let net = require('net')
let debug = require('debug')('abci:server')
let Connection = require('./connection.js')

function createServer (app) {
  let server = net.createServer(function (client) {
    client.name = `${client.remoteAddress}:${client.remotePort}`

    let conn = new Connection(client, function (req, cb) {
      let [ type ] = Object.keys(req)
      let message = req[type]

      // special messages
      if (type === 'flush') {
        conn.write({ flush: {} })
        return cb()
      } else if (type === 'echo') {
        conn.write({ echo: { message: message.message } })
        return cb()
      }

      let resCb = respondOnce((response) => {
        let message = { [type]: response }
        conn.write(message)
        cb()
      })

      // message handler not implemented in app
      if (app[type] == null) {
        return resCb({})
      }

      // call method
      try {
        app[type](message, resCb)
      } catch (err) {
        // if app throws an error, send an 'exception' response
        debug(`ABCI error on "${type}":`, err)
        message = { exception: { message: err.message } }
        conn.writeMessage(message)
        conn.close()
      }
    }, true)
  })

  return server
}

var respondOnce = function (f) {
  var ran = false
  return (...args) => {
    if (ran) {
      throw Error('ABCI response callback called more than once')
    }
    ran = true
    return f(...args)
  }
}

module.exports = createServer
