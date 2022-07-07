const { caesarEncode, caesarDecode } = require('../challenges/caesar')

describe('Caesar', () => {

  test('it encodes correctly', () => {
    expect(caesarEncode('my name is jeff', 15)).toBe('BN CPBT XH YTUU')
  })

  test('it decodes correctly', () => {
    expect(caesarDecode('DEFATOTEJ RZE FD TYEZ ESTD XPDD LYO DEFATOTEJ HTWW RPE FD ZFE', 11)).toBe('stupidity got us into this mess and stupidity will get us out')
  })

})
