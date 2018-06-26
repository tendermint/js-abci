let createABCIServer = require('abci')

// turn on debug logging
require('debug').enable('abci*')

let state = {
  count: 0
}

let handlers = {
  info (request) {
    return {
      data: 'Node.js counter app',
      version: '0.0.0',
      lastBlockHeight: 0,
      lastBlockAppHash: Buffer.alloc(0)
    }
  },

  checkTx (request) {
    let tx = padTx(request.tx)
    let number = tx.readUInt32BE(0)
    if (number !== state.count) {
      return { code: 1, log: 'tx does not match count' }
    }
    return { code: 0, log: 'tx succeeded' }
  },

  deliverTx (request) {
    let tx = padTx(request.tx)
    let number = tx.readUInt32BE(0)
    if (number !== state.count) {
      return { code: 1, log: 'tx does not match count' }
    }

    // update state
    state.count += 1

    return { code: 0, log: 'tx succeeded' }
  }
}

// make sure the transaction data is 4 bytes long
function padTx (tx) {
  let buf = Buffer.alloc(4)
  tx.copy(buf, 4 - tx.length)
  return buf
}

let port = 26658
createABCIServer(handlers).listen(port, () => {
  console.log(`listening on port ${port}`)
})
