var net = require("net");
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

    var conn = new Connection(socket, function(reqBytes, cb) {
      var req = types.Request.decode(reqBytes);
      var msgType = req.type;

      // Special messages.
      // NOTE: msgs are length prefixed
      if (msgType == types.MessageType.Flush) {
        var res = new types.Response({
          type: msgType,
        });
        conn.writeMessage(res);
        conn.flush();
        return cb();
      } else if (req.type == types.MessageType.Echo) {
        var res = new types.Response({
          type: msgType,
          data: req.data,
        });
        conn.writeMessage(res);
        return cb();
      }

      // Make callback for apps to pass result.
      var resCb = respondOnce(function(resObj) {
        // Convert strings to utf8
        if (typeof resObj.data == "string") {
          resObj.data = new Buffer(resObj.data);
        }
        // Response type is always the same as req type
        resObj.type = msgType;
        var res = new types.Response(resObj);
        conn.writeMessage(res);
        cb(); // Tells Connection that we're done responding.
      });

      // Call app function
      var reqMethod = types.reqMethodLookup[msgType];
      if (!reqMethod) {
        throw "Unexpected request type "+reqType;
      }
      if (!app[reqMethod]) {
        resCb({code:tmsp.CodeType_OK, log:"Method not implemented: "+reqMethod});
      } else {
        var res = app[reqMethod].call(app, req, resCb);
        if (res != undefined) {
          console.log("Message handler shouldn't return anything!");
        }
      }
    });
  });
}

// Wrap a function to only be called once.
var respondOnce = function(f) {
  var ran = false;
  return function() {
    if (ran) {
      console.log("Error: response was already written");
      console.log("arguments", arguments);
      return
    } else {
      ran = true;
    }
    return f.apply(this, arguments);
  };
};

module.exports = {
  Server: Server,
};
