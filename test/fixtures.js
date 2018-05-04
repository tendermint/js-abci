module.exports = {
  multiRequestBytes: Buffer.from('2622110a0f302e31392e322d3634343038613430041a00', 'hex'),
  infoRequestBytes: Buffer.from('2622110a0f302e31392e322d3634343038613430', 'hex'),
  flushRequestBytes: Buffer.from('041a00', 'hex'),
  echoRequestBytes: Buffer.from('0e12050a03010203', 'hex'),
  infoRequest: {
    info: {
      version: '0.19.2-64408a40'
    }
  },
  infoResponse: {
    info: {
      data: 'test',
      version: '123',
      lastBlockHeight: 0,
      lastBlockAppHash: Buffer.alloc(0)
    }
  },
  infoResponseHex: '22220f0a0474657374120331323318002200',
  emptyInfoResponseHex: '042200',
  flushResponseHex: '041a00',
  echoResponseHex: '0e12050a03010203',
  exceptionResponseHex: '2a0a130a114572726f723a2074657374206572726f72'
}
