var client = require("./client");
var net = require("net");

var c = new client.Client("tcp://127.0.0.1:46658");
c.deliverTx(new Buffer([0x01, 0x01, 0x01, 0x34, 0x01, 0x01, 0x34]),
  function(res) {
  console.log("DeliverTx result:", res);
  c.close();
});
c.flush();
