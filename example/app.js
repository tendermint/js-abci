var tmsp = require("js-tmsp");
var util = require("util");

function CounterApp(){
	this.hashCount = 0;
	this.txCount = 0;
  this.serial = false;
};

CounterApp.prototype.info = function(req, cb) {
  return cb({
    data: util.format("hashes:%d, txs:%d", this.hashCount, this.txCount),
  });
}

CounterApp.prototype.setOption = function(req, cb) {
	if (req.key == "serial") {
    if (req.value == "on") {
      this.serial = true;
      return cb({log:"ok"});
    } else {
      return cb({log:"Unexpected value "+req.value});
    }
	}
  return cb({log: "Unexpected key "+req.key});
}

CounterApp.prototype.appendTx = function(req, cb) {
  var txBytes = req.append_tx.tx.buffer;
	if (this.serial) {
		if (txBytes.length >= 2 && txBytes.slice(0, 2) == "0x") {
      var hexString = txBytes.toString("ascii", 2);
      var hexBytes = new Buffer(hexString, "hex");
      txBytes = hexBytes;
		}	
    var txValue = txBytes.readUIntBE(0, txBytes.length);
		if (txValue != this.txCount){
      return cb({code:tmsp.CodeType.BadNonce, log:"Nonce is invalid. Got "+txValue+", expected "+this.txCount});
		}
	}
	this.txCount += 1;
	return cb({code:tmsp.CodeType_OK});
}

CounterApp.prototype.checkTx = function(req, cb) {
  var txBytes = req.check_tx.tx.buffer;
	if (this.serial) {
		if (txBytes.length >= 2 && txBytes.slice(0, 2) == "0x") {
      var hexString = txBytes.toString("ascii", 2);
      var hexBytes = new Buffer(hexString, "hex");
      txBytes = hexBytes;
		}	
    var txValue = txBytes.readUIntBE(0, txBytes.length);
		if (txValue < this.txCount){
      return cb({code:tmsp.CodeType.BadNonce, log:"Nonce is too low. Got "+txValue+", expected >= "+this.txCount});
		}
	}
	return cb({code:tmsp.CodeType_OK});
}

CounterApp.prototype.commit = function(req, cb) {
	this.hashCount += 1;
	if (this.txCount == 0){
    return cb({log:"Zero tx count; hash is empth"});
	}
  var buf = new Buffer(8);
  buf.writeIntBE(this.txCount, 0, 8);
  return cb({data:buf});
}

CounterApp.prototype.query = function(req, cb) {
  return cb({code:tmsp.CodeType_OK, log:"Query not yet supported"});
}

console.log("Counter app in Javascript");

var app = new CounterApp();
var appServer = new tmsp.Server(app);
appServer.server.listen(46658);
