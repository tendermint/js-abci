function xport(exports, m) {
  for (var key in m) {
    exports[key] = m[key];
  }
}

var proto = require("protobufjs");
var protoPath = require("path").join(__dirname, "types.proto"); // TODO: better to just compile this into a js file.
var builder = proto.loadProtoFile(protoPath);
var types = builder.build("types");

var reqMethodLookup = {};
reqMethodLookup[types.MessageType.Info]       = "info";
reqMethodLookup[types.MessageType.SetOption]  = "setOption";
reqMethodLookup[types.MessageType.AppendTx]   = "appendTx";
reqMethodLookup[types.MessageType.CheckTx]    = "checkTx";
reqMethodLookup[types.MessageType.GetHash]    = "getHash";
reqMethodLookup[types.MessageType.Query]      = "query";

module.exports = types;
module.exports.reqMethodLookup = reqMethodLookup;
