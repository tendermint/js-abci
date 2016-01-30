var net = require("net");
var wire = require("js-wire");
var msg = require("./msgs");
var types = require("./types");
var Connection = require("./connection").Connection;

// Takes an application and handles TMSP connection
// which invoke methods on the app
function Server(app) {
  // set the app for the socket handler
  this.app = app;

  // create a server by providing callback for 
  // accepting new connection and callbacks for 
  // connection events ('data', 'end', etc.)
  this.createServer();
}

Server.prototype.createServer = function() {
  var app = this.app;

  // Define the socket handler
  this.server = net.createServer(function(socket) {
    socket.name = socket.remoteAddress + ":" + socket.remotePort;
    console.log("new connection from", socket.name);

    var conn = new Connection(socket, function(msgBytes, cb) {
      var r = new wire.Reader(msgBytes);

      // Now we can decode
      var typeByte = r.readByte();
      var reqType = msg.types[typeByte];

      // Special messages.
      // NOTE: msgs are length prefixed
      if (reqType == "flush") {
        var w = new wire.Writer();
        w.writeByte(types.ResponseTypeFlush);
        conn.writeMessage(w.getBuffer());
        conn.flush();
        return cb();
      } else if (reqType == "echo") {
        var message = r.readString();
        var w = new wire.Writer();
        w.writeByte(types.ResponseTypeEcho);
        w.writeString(message);
        conn.writeMessage(w.getBuffer());
        return cb();
      }

      // Make callback by wrapping cp
      var resCb = msg.writerGenerators[reqType](new wire.Writer(), function(w) {
        conn.writeMessage(w.getBuffer());
        return cb();
      });

      // Decode arguments
      var args = msg.readers[reqType](r);
      args.unshift(resCb);

      // Call function
      var res = app[reqType].apply(app, args);
      if (res != undefined) {
        console.log("Message handler shouldn't return anything!");
      }

    });
  });
}

module.exports = {
  Server: Server,
};
