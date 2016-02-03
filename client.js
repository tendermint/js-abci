var net = require("net");
var types = require("./types");
var Connection = require("./connection").Connection;

// "tcp://127.0.0.1:46658" -> {host,port}
// "unix://path" -> {path}
function parseAddr(addr) {
  if (addr.startsWith("tcp://")) {
    var hostPort = addr.substr(6).split(":");
    return {host: hostPort[0], port: hostPort[1]};
  }
  if (addr.startsWith("unix://")) {
    return {path: addr.substr(7)};
  }
}

// TODO: Handle auto-reconnect & re-sending requests.
function Client(addr) {
  this.error = undefined;
  this.addr = addr;
  this.reqResQ = []; // stores [{req,res,cb}...]
  this.reqResQSendPtr = 0; // next request to send
  this.conn = null;
  this._connect();
}

Client.prototype._connect = function() {
  var addrObj = parseAddr(this.addr);
  var socket = net.connect(addrObj, () => {
    this.conn = new Connection(socket, (resBytes, cb) => { this.onResponse(resBytes, cb); });
    this.wakeSender();
  });
}

Client.prototype.onResponse = function(resBytes, cb) {
  var res = types.Response.decode(resBytes);
  if (res.type === types.MessageCode_Exception) {
    this.setError(res[0]);
    return;
  }
  if (this.reqResQ.length == 0) {
    this.setError("Unexpected response: "+resBytes.toString("hex"));
    return;
  }
  var reqRes = this.reqResQ[0];
  if (res.type !== reqRes.req.type) {
    this.setError("Unexpected response type: "+resBytes.toString("hex"));
    return;
  }
  if (!!reqRes.cb) {
    reqRes.cb.call(reqRes, res);
  }
  // TODO: we'll want to do something more intelligent
  // in the future to handle reconnects; e.g. resend requests.
  this.reqResQ.shift();
  this.reqResQSendPtr--;
  cb();
}

Client.prototype.setError = function(error) {
  if (!this.error) {
    this.error = error;
  }
}

Client.prototype.flush = function(cb) {
  var reqObj = {};
  this.queueRequest(types.MessageType.Flush, reqObj, cb);
}

Client.prototype.info = function(cb) {
  var reqObj = {};
  this.queueRequest(types.MessageType.Info, reqObj, cb);
}

Client.prototype.setOption = function(key, value, cb) {
  var reqObj = {key:key, value:value};
  this.queueRequest(types.MessageType.SetOption, reqObj, cb);
}

Client.prototype.appendTx = function(txBytes, cb) {
  var reqObj = {data:txBytes};
  this.queueRequest(types.MessageType.AppendTx, reqObj, cb);
}

Client.prototype.checkTx = function(txBytes, cb) {
  var reqObj = {data:txBytes};
  this.queueRequest(types.MessageType.CheckTx, reqObj, cb);
}

Client.prototype.getHash = function(cb) {
  var reqObj = {};
  this.queueRequest(types.MessageType.GetHash, reqObj, cb);
}

Client.prototype.query = function(queryBytes, cb) {
  var reqObj = {data:queryBytes};
  this.queueRequest(types.MessageType.Query, reqObj, cb);
}

Client.prototype.queueRequest = function(type, reqObj, cb) {
  if (typeof type === "undefined") {
    throw "queueRequest cannot handle undefined types";
  }
  if (typeof type === 0) {
    throw "queueRequest cannot handle null messages";
  }
  reqObj.type = type; // TODO: maybe copy the object?
  var req = new types.Request(reqObj);
  var reqRes = {req:req,cb:cb};
  this.reqResQ.push(reqRes);
  this.wakeSender();
}

Client.prototype.wakeSender = function() {
  if (!this.conn) {
    // wakeSender gets called again upon connection est.
    return;
  }
  if (!this.sending) {
    this.sending = true;
    setTimeout(
      ()=>{this.sendRequest()},
      0
    );
  }
}

Client.prototype.sendRequest = function() {
  // Get next request to send
  var nextReqRes = this.reqResQ[this.reqResQSendPtr];
  if (!nextReqRes) {
    this.sending = false;
    return // Nothing to send, we're done!
  }
  // Send request
  var req = nextReqRes.req;
  this.conn.writeMessage(req);
  this.reqResQSendPtr++;
  // Also flush maybe
  if (req.type == types.MessageType.Flush) {
    this.conn.flush();
  }
  // If we have more messages to send...
  if (this.reqResQ.length > this.reqResQSendPtr) {
    setTimeout(
      ()=>{this.sendRequest()},
      0
    ); // TODO: benchmark this; batch it if slow.
  }
}

module.exports = {
  Client: Client,
};
