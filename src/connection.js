let EventEmitter = require('events')
let BufferList = require('bl')
let debug = require('debug')('abci:connection')
let old = require('old')
let { varint } = require('protocol-buffers-encodings')
let getTypes = require('./types.js')

// asynchronously load types from proto files
let Request, Response
getTypes().then((types) => {
  Request = types.lookupType('abci.Request')
  Response = types.lookupType('abci.Response')
})

const MAX_LENGTH = 4096

class Connection extends EventEmitter {
  constructor (stream, onMessage, isServer) {
    if (!Request) {
      throw Error('Tried to create a connection before loading protobuf files')
    }

    super()

    this.stream = stream
    this.onMessage = onMessage
    this.isServer = isServer
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
    if (length > MAX_LENGTH) {
      throw Error('Message length greater than maximum')
    }

    let messageBytes = this.recvBuf.slice(
      varint.decode.bytes, varint.decode.bytes + length)
    this.recvBuf.consume(varint.decode.bytes + length)

    let type = this.isServer ? Request : Response
    let message = type.decode(messageBytes)

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
    let type = this.isServer ? Response : Request
    if (debug.enabled) {
      debug('>>', type.fromObject(message))
    }
    let messageBytes = type.encode(message).finish()
    let lengthBytes = varint.encode(messageBytes.length << 1)
    this.stream.write(Buffer.from(lengthBytes))
    this.stream.write(messageBytes)
  }

  close () {
    this.stream.destroy()
  }
}

module.exports = old(Connection)
