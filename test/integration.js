let test = require('ava')
let createTempDir = require('tempy').directory
let getPort = require('get-port')
let tm = require('tendermint-node')
let createAbciServer = require('..')

test.beforeEach(async (t) => {
  let home = createTempDir()
  await tm.init(home)

  let ports = {
    p2p: await getPort(),
    rpc: await getPort(),
    abci: await getPort()
  }

  let node = tm.node(home, {
    p2p: { laddr: `tcp://127.0.0.1:${ports.p2p}` },
    rpc: { laddr: `tcp://127.0.0.1:${ports.rpc}` },
    proxy_app: `tcp://127.0.0.1:${ports.abci}`
  })

  t.context.ports = ports
  t.context.node = node
})

test.afterEach((t) => {
  return t.context.node.kill()
})

test('app info resolves over RPC', async (t) => {
  let { ports, node } = t.context

  let info = {
    data: 'test app',
    version: '1.2.3'
  }
  let server = createAbciServer({
    info: () => info
  })
  server.listen(ports.abci)

  await node.started()

  let rpcResponse = await node.rpc.abciInfo()
  t.deepEqual(rpcResponse, { response: info })
})

test('large tx', async (t) => {
  let { ports, node } = t.context

  let server = createAbciServer({
    info: () => ({
      data: 'test app',
      version: '1.2.3'
    }),

    initChain (req) {
      return {}
    },

    beginBlock (req) {
      return {}
    },

    checkTx (req) {
      return {}
    },

    deliverTx (req) {
      return {}
    }
  })
  server.listen(ports.abci)

  await node.started()

  let res = await node.rpc.broadcastTxCommit({
    tx: '0x' + Buffer.allocUnsafe(10e3).toString('hex')
  })
  t.falsy(res.check_tx.code)
  t.falsy(res.deliver_tx.code)
})
