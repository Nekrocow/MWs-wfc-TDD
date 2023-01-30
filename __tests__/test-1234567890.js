const print = require('../Activities/seven-display')
const { converter } = require('../Activities/converterDictionary')

const logSpy = jest.spyOn(global.console, 'log')

describe('Test print 1234567890', () => {
  test('Print 1234567890', () => {

    const numTest = 1234567890
    const digits = Array.from(numTest.toString(), Number)

    print(numTest)

    expect(logSpy).toHaveBeenCalled()

    digits.forEach(e => {
      expect(logSpy).toHaveBeenCalledWith(converter[e][0])
    })
  })
})
