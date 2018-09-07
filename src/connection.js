'use strict'

const EventEmitter = require('events')
const BufferList = require('bl')
const debug = require('debug')('abci')
const { varint } = require('protocol-buffers-encodings')
const { Request, Response } = require('../types.js').abci

class Connection extends EventEmitter {
  constructor (stream, onMessage) {
    super()

    this.stream = stream
    this.onMessage = onMessage
    this.recvBuf = new BufferList()
    this.waiting = false

    stream.on('data', this.onData.bind(this))
  }

  async onData (data) {
    this.recvBuf.append(data)
    if (this.waiting) return
    this.readNextMessage()
  }

  readNextMessage () {
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

    // log incoming messages, except for 'flush'
    if (!message.flush) {
      debug('<<', message)
    }

    this.onMessage(message, () => {
      this.waiting = false
      this.stream.resume()

      if (this.recvBuf.length > 0) {
        this.readNextMessage()
      }
    })
  }

  write (message) {
    this._write(message)
      .catch((err) => this.emit('error', err))
  }

  async _write (message) {
    Response.verify(message)
    // log outgoing messages, except for 'flush'
    if (debug.enabled && !message.flush) {
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
