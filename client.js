var types = require("./types");
var Connection = require("./connection").Connection;

function Client(conn) {
  this.error = undefined;
  this.reqResQ = []; // stores [{req,res,cb}...]
  this.conn = new Connection(conn, (resBytes, cb) => {
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
    this.reqResQ.shift();
    cb();
  });
}

Client.prototype.setError = function(error) {
  if (!this.error) {
    this.error = error;
  }
}

Client.prototype.flush = function(cb) {
  var req = new types.Request({type:types.MessageType.Flush});
  var reqRes = {req:req,cb:cb};
  this.reqResQ.push(reqRes);
  this.writeRequest(req);
  this.conn.flush();
}

Client.prototype.info = function(cb) {
  var reqObj = {};
  this.writeReqObj(types.MessageType.Info, reqObj, cb);
}

Client.prototype.setOption = function(key, value, cb) {
  var reqObj = {key:key, value:value};
  this.writeReqObj(types.MessageType.SetOption, reqObj, cb);
}

Client.prototype.appendTx = function(txBytes, cb) {
  var reqObj = {data:txBytes};
  this.writeReqObj(types.MessageType.AppendTx, reqObj, cb);
}

Client.prototype.checkTx = function(txBytes, cb) {
  var reqObj = {data:txBytes};
  this.writeReqObj(types.MessageType.CheckTx, reqObj, cb);
}

Client.prototype.getHash = function(cb) {
  var reqObj = {};
  this.writeReqObj(types.MessageType.GetHash, reqObj, cb);
}

Client.prototype.query = function(queryBytes, cb) {
  var reqObj = {data:queryBytes};
  this.writeReqObj(types.MessageType.Query, reqObj, cb);
}

Client.prototype.writeReqObj = function(type, reqObj, cb) {
  if (typeof type === "undefined") {
    throw "writeReqObj cannot handle undefined types";
  }
  if (typeof type === 0) {
    throw "writeReqObj cannot handle null messages";
  }
  reqObj.type = type; // TODO: maybe copy the object?
  var req = new types.Request(reqObj);
  var reqRes = {req:req,cb:cb};
  this.reqResQ.push(reqRes);
  this.writeRequest(req);
  this.flush();
}

Client.prototype.writeRequest = function(req) {
  this.conn.writeMessage(req);
}

module.exports = {
  Client: Client,
};
