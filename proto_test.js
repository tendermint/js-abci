var types = require("./types");

var request = new types.Request({type:1, data:new Buffer("qwe")});
console.log("request", request);

var reqBytes = request.encode().toBuffer();
console.log(reqBytes);

var it = types.Request.decode(reqBytes);
console.log(it);
console.log(it.data.toBuffer().length);
console.log(it.data.length);
