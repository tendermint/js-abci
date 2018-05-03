let { load } = require('protobufjs')

module.exports = async function () {
  let path = require.resolve('../proto/abci.proto')
  return load(path)
}
