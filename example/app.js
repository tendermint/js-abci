var abci = require("js-abci");
var util = require("util");

function CounterApp(){
	this.hashCount = 0;
	this.txCount = 0;
  this.serial = true;
};

CounterApp.prototype.info = function(req, cb) {
  return cb({
    data: util.format("hashes:%d, txs:%d", this.hashCount, this.txCount),
  });

}

CounterApp.prototype.setOption = function(req, cb) {
  if (req.set_option.key == "serial") {
    if (req.set_option.value == "on") {
      this.serial = true;
      return cb({log:"ok"});
    } else if (req.set_option.value == "off") {
      this.serial = false;
      return cb({log:"ok"});
    } else {
      return cb({log:"Unexpected value "+req.set_option.value});
    }
  }
  return cb({log: "Unexpected key "+req.set_option.key});
}

CounterApp.prototype.deliverTx = function(req, cb) {
  var txBytes = req.deliver_tx.tx.toBuffer();
  if (this.serial) {
    if (txBytes.length >= 2 && txBytes.slice(0, 2) == "0x") {
      var hexString = txBytes.toString("ascii", 2);
      var hexBytes = new Buffer(hexString, "hex");
      txBytes = hexBytes;
    }	
    var txValue = txBytes.readUIntBE(0, txBytes.length);
    if (txValue != this.txCount){
      return cb({code:abci.CodeType.BadNonce, log:"Nonce is invalid. Got "+txValue+", expected "+this.txCount});
    }
  }
  this.txCount += 1;
  return cb({code:abci.CodeType_OK});
}

CounterApp.prototype.checkTx = function(req, cb) {
  var txBytes = req.check_tx.tx.toBuffer();
	if (this.serial) {
		if (txBytes.length >= 2 && txBytes.slice(0, 2) == "0x") {
      var hexString = txBytes.toString("ascii", 2);
      var hexBytes = new Buffer(hexString, "hex");
      txBytes = hexBytes;
		}	
    var txValue = txBytes.readUIntBE(0, txBytes.length);
		if (txValue < this.txCount){
      return cb({code:abci.CodeType.BadNonce, log:"Nonce is too low. Got "+txValue+", expected >= "+this.txCount});
		}
	}
	return cb({code:abci.CodeType_OK});
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
  return cb({code:abci.CodeType_OK, log:"Query not yet supported"});
}

console.log("Counter app in Javascript");

var app = new CounterApp();
var appServer = new abci.Server(app);
appServer.server.listen(46658);
