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
