var net = require("net");
var wire = require("js-wire");
var types = require("./types");
var Connection = require("./connection").Connection;

function Client(conn) {
  this.conn = new Connection(conn, (res) => {
    console.log(">>", res); // XXX
  });
}

Client.prototype.flush = function() {
  var w = new wire.Writer(); // TODO this is overkill just write flush byte
  w.writeByte(types.RequestTypeFlush);
  this.conn.writeMessage(w.getBuffer());
  this.conn.flush();
}

Client.prototype.appendTx = function(txBytes, cb) {
  var w = new wire.Writer();
  w.writeByte(types.RequestTypeAppendTx);
  w.writeByteArray(txBytes);
  this.conn.writeMessage(w.getBuffer());
  this.flush();
  // XXX continue developing
}

Client.prototype.checkTx = function(txBytes, cb) {
}

Client.prototype.getHash = function(cb) {
}

Client.prototype.query = function(cb) {
}

module.exports = {
  Client: Client,
};
