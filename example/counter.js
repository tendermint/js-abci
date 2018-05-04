let createABCIServer = require('abci')

// turn on debug logging
require('debug').enable('abci*')

let state = {
  count: 0
}

let handlers = {
  info (request, cb) {
    cb(null, {
      data: 'Node.js counter app',
      version: '0.0.0',
      lastBlockHeight: 0,
      lastBlockAppHash: Buffer.alloc(0)
    })
  },

  checkTx (request, cb) {
    let number = request.tx.readUInt32BE(0)
    if (number !== state.count) {
      return cb(null, { code: 1, log: 'tx does not match count' })
    }
    cb(null, { code: 0, log: 'tx succeeded' })
  },

  deliverTx (request, cb) {
    let number = request.tx.readUInt32BE(0)
    if (number !== state.count) {
      return cb(null, { code: 1, log: 'tx does not match count' })
    }

    // update state
    state.count += 1

    cb(null, { code: 0, log: 'tx succeeded' })
  }
}

let port = 46658
createABCIServer(handlers).listen(port, () => {
  console.log(`listening on port ${port}`)
})
