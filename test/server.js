let net = require('net')
let test = require('ava')
let Connection = require('../src/connection.js')
let { createServer } = require('..')
let fixtures = require('./fixtures.js')
let { mockStream } = require('./common.js')

test('create server', (t) => {
  let server = createServer({})
  t.true(server instanceof net.Server)
})

test('respond', async (t) => {
  await Connection.loaded

  let server = createServer({
    info (message, cb) {
      t.deepEqual(
        message.toJSON(),
        fixtures.infoRequest.info
      )
      cb(null, fixtures.infoResponse.info)
    }
  })

  let stream = mockStream()
  server.emit('connection', stream)

  stream.emit('data', fixtures.infoRequestBytes)
  t.is(
    stream.sent.toString('hex'),
    fixtures.infoResponseHex
  )
})

test('respond to non-implemented functions', async (t) => {
  await Connection.loaded

  let server = createServer({})

  let stream = mockStream()
  server.emit('connection', stream)

  stream.emit('data', fixtures.infoRequestBytes)
  t.is(
    stream.sent.toString('hex'),
    fixtures.emptyInfoResponseHex
  )
})

test('respond to special functions', async (t) => {
  await Connection.loaded

  let server = createServer({})

  let stream = mockStream()
  server.emit('connection', stream)

  stream.emit('data', fixtures.flushRequestBytes)
  stream.emit('data', fixtures.echoRequestBytes)
  t.is(
    stream.sent.toString('hex'),
    fixtures.flushResponseHex +
    fixtures.echoResponseHex
  )
})

test('respond with callback error', async (t) => {
  await Connection.loaded

  let server = createServer({
    info (message, cb) {
      cb(Error('test error'))
    }
  })

  let stream = mockStream()
  server.emit('connection', stream)

  stream.emit('data', fixtures.multiRequestBytes)
  t.is(
    stream.sent.toString('hex'),
    fixtures.exceptionResponseHex
  )
})

test('respond with thrown error', async (t) => {
  await Connection.loaded

  let server = createServer({
    info (message, cb) {
      throw Error('test error')
    }
  })

  let stream = mockStream()
  server.emit('connection', stream)

  stream.emit('data', fixtures.multiRequestBytes)
  t.is(
    stream.sent.toString('hex'),
    fixtures.exceptionResponseHex
  )
})

test('message callbacks can only be called once', async (t) => {
  await Connection.loaded

  let server = createServer({
    info (message, cb) {
      cb(null, {})
      try {
        cb(null, {})
      } catch (err) {
        t.is(err.message, 'ABCI response callback called more than once')
      }
    }
  })

  let stream = mockStream()
  server.emit('connection', stream)

  stream.emit('data', fixtures.multiRequestBytes)
})
