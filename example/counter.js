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
    if(request.tx.length < 4) {
      const zeroPadding = Buffer.alloc(4 - request.tx.length, 0);
      request.tx = Buffer.concat([zeroPadding, request.tx]);
    }
    
    let number = request.tx.readUInt32BE(0)
    if (number !== state.count) {
      return { code: 1, log: 'tx does not match count' }
    }
    return { code: 0, log: 'tx succeeded' }
  },

  deliverTx (request) {
    if(request.tx.length < 4) {
      const zeroPadding = Buffer.alloc(4 - request.tx.length, 0);
      request.tx = Buffer.concat([zeroPadding, request.tx]);
    }
    
    let number = request.tx.readUInt32BE(0)
    if (number !== state.count) {
      return { code: 1, log: 'tx does not match count' }
    }

    // update state
    state.count += 1

    return { code: 0, log: 'tx succeeded' }
  }
}

let port = 46658
createABCIServer(handlers).listen(port, () => {
  console.log(`listening on port ${port}`)
})
