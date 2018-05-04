let EventEmitter = require('events')
let BufferList = require('bl')
let debug = require('debug')('abci:connection')
let { varint } = require('protocol-buffers-encodings')
let getTypes = require('./types.js')

// asynchronously load types from proto files
let Request, Response
let loaded = getTypes().then((types) => {
  Request = types.lookupType('abci.Request')
  Response = types.lookupType('abci.Response')
})

class Connection extends EventEmitter {
  constructor (stream, onMessage) {
    if (!Request) {
      throw Error('Tried to create a connection before loading protobuf files')
    }

    super()

    this.stream = stream
    this.onMessage = onMessage
    this.recvBuf = new BufferList()
    this.waiting = false

    stream.on('data', this.onData.bind(this))
  }

  onData (data) {
    this.recvBuf.append(data)
    if (this.waiting) return
    this.handleErrors(this.readNextMessage())
  }

  handleErrors (promise) {
    promise.catch((err) => this.emit('error', err))
  }

  async readNextMessage () {
    let length = varint.decode(this.recvBuf.slice(0, 4)) >> 1
    let lengthLength = varint.decode.bytes
    let messageBytes = this.recvBuf.slice(
      lengthLength,
      lengthLength + length
    )
    this.recvBuf.consume(lengthLength + length)

    let message = Request.decode(messageBytes)

    this.waiting = true
    this.stream.pause()

    debug('<<', message)

    this.onMessage(message, () => {
      this.waiting = false
      this.stream.resume()

      if (this.recvBuf.length > 0) {
        this.handleErrors(this.readNextMessage())
      }
    })
  }

  write (message) {
    this.handleErrors(this._write(message))
  }

  async _write (message) {
    if (debug.enabled) {
      debug('>>', Response.fromObject(message))
    }
    let messageBytes = Response.encode(message).finish()
    let lengthBytes = varint.encode(messageBytes.length << 1)
    this.stream.write(Buffer.from(lengthBytes))
    this.stream.write(messageBytes)
  }

  close () {
    this.stream.destroy()
  }
}

module.exports = Connection
module.exports.loaded = loaded
