let net = require('net')
let test = require('ava')
let Connection = require('../src/connection.js')
let { createServer } = require('..')
let fixtures = require('./fixtures.js')
let { mockStream, wait } = require('./common.js')

test('create server', (t) => {
  let server = createServer({})
  t.true(server instanceof net.Server)
})

test('respond', async (t) => {
  await Connection.loaded

  let server = createServer({
    info (message) {
      t.deepEqual(
        message.toJSON(),
        fixtures.infoRequest.info
      )
      return fixtures.infoResponse.info
    }
  })

  let stream = mockStream()
  server.emit('connection', stream)

  stream.emit('data', fixtures.infoRequestBytes)

  await wait()
  t.is(
    stream.sent.toString('hex'),
    fixtures.infoResponseHex
  )
})

test('respond async', async (t) => {
  await Connection.loaded

  let server = createServer({
    async info (message) {
      t.deepEqual(
        message.toJSON(),
        fixtures.infoRequest.info
      )
      return fixtures.infoResponse.info
    }
  })

  let stream = mockStream()
  server.emit('connection', stream)

  stream.emit('data', fixtures.infoRequestBytes)

  await wait()
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
  await wait()
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
  await wait()
  t.is(
    stream.sent.toString('hex'),
    fixtures.flushResponseHex +
    fixtures.echoResponseHex
  )
})

test('respond with callback error', async (t) => {
  await Connection.loaded

  let server = createServer({
    info (message) {
      throw Error('test error')
    }
  })

  let stream = mockStream()
  server.emit('connection', stream)

  stream.emit('data', fixtures.multiRequestBytes)
  await wait()
  t.is(
    stream.sent.toString('hex'),
    fixtures.exceptionResponseHex
  )
})

test('respond with async callback error', async (t) => {
  await Connection.loaded

  let server = createServer({
    async info (message) {
      throw Error('test error')
    }
  })

  let stream = mockStream()
  server.emit('connection', stream)

  stream.emit('data', fixtures.multiRequestBytes)

  await wait()
  t.is(
    stream.sent.toString('hex'),
    fixtures.exceptionResponseHex
  )
})
