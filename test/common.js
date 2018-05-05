let EventEmitter = require('events')

function mockStream () {
  let stream = new EventEmitter()
  stream.sent = Buffer.alloc(0)
  stream.write = (data) => {
    stream.sent = Buffer.concat([ stream.sent, data ])
  }
  stream.pause = () => {}
  stream.resume = () => {}
  stream.destroy = () => {}
  return stream
}

function wait (ms = 100) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

module.exports = { mockStream, wait }
