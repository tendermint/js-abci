var client = require("./client");
var net = require("net");

var c = new client.Client("tcp://127.0.0.1:46659");
c.appendTx(new Buffer([0x01, 0x01, 0x01, 0x34, 0x01, 0x01, 0x34]),
  function(res) {
  console.log("AppendTx result:", res);
});
c.flush();
