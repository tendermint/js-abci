let test = require('ava')
let Connection = require('../src/connection.js')
let fixtures = require('./fixtures.js')
let { mockStream } = require('./common.js')

test('create connection before loading protobuf', (t) => {
  try {
    let connection = new Connection()
    t.fail(connection, 'should have thrown')
  } catch (err) {
    t.is(err.message, 'Tried to create a connection before loading protobuf files')
  }
})

test('create connection after loading protobuf', async (t) => {
  await Connection.loaded
  let stream = mockStream()
  let connection = new Connection(stream)
  t.true(connection instanceof Connection, 'created connection')
})

test('receive requests', async (t) => {
  await Connection.loaded
  let received = []
  let onMessage = (message, cb) => {
    received.push(message)
    cb()
  }
  let stream = mockStream()
  let connection = new Connection(stream, onMessage)
  t.true(connection instanceof Connection, 'created connection')

  stream.emit('data', fixtures.multiRequestBytes)

  t.is(received.length, 2)
  t.deepEqual(received[0].toJSON(), fixtures.infoRequest)
  t.deepEqual(received[1].toJSON(), { flush: {} })
})

test('requests not emitted while waiting for handler', async (t) => {
  await Connection.loaded

  let numMessages = 0
  let onMessageCb
  let onMessage = (message, cb) => {
    numMessages += 1
    onMessageCb = cb
  }
  let stream = mockStream()
  let connection = new Connection(stream, onMessage)
  t.true(connection instanceof Connection, 'created connection')

  stream.emit('data', fixtures.multiRequestBytes)
  t.is(numMessages, 1)
  onMessageCb()
  t.is(numMessages, 2)
  stream.emit('data', fixtures.multiRequestBytes)
  t.is(numMessages, 2)
  onMessageCb()
  t.is(numMessages, 3)
  onMessageCb()
  t.is(numMessages, 4)
})

test('send responses', async (t) => {
  await Connection.loaded
  let onMessage = (message, cb) => cb()
  let stream = mockStream()
  let connection = new Connection(stream, onMessage)

  connection.write(fixtures.infoResponse)

  t.is(
    stream.sent.toString('hex'),
    fixtures.infoResponseHex
  )
})

test('close', async (t) => {
  await Connection.loaded
  let onMessage = (message, cb) => cb()
  let stream = mockStream()

  let destroyCalled = false
  stream.destroy = () => { destroyCalled = true }

  let connection = new Connection(stream, onMessage)
  connection.close()
  t.true(destroyCalled)
})
