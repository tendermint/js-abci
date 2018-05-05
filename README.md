# js-abci

ABCI server for Node.js. Supports up to Tendermint version 0.19.

## Usage

`npm install abci`

Requires Node.js v7.6+

```js
let createServer = require('abci')

let server = createServer({
  info (request, cb) {
    console.log('got info request', request)
    cb(null, { ... })
  }

  // implement any ABCI method handlers here
})
server.listen(46658)
```

### `let server = createServer(app)`

Returns a [`net.Server`](https://nodejs.org/api/net.html#net_class_net_server) that accepts ABCI connections from a Tendermint node.

`app` should be an object with ABCI method handlers, each with the signature `handler(request, cb(err, response))`. `cb` responds to the ABCI request with either the error or `response` value.

Supported ABCI methods are:

```
echo
flush
info
setOption
initChain
query
beginBlock
checkTx
deliverTx
endBlock
commit
```
