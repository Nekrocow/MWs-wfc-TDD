const print = require('../Activities/seven-display')
const { converter } = require('../Activities/converterDictionary')

const logSpy = jest.spyOn(global.console, 'log')

describe('Test print Number.MAX_SAFE_INTEGER', () => {
  test('Print Number.MAX_SAFE_INTEGER', () => {

    const numTest = Number.MAX_SAFE_INTEGER
    const digits = Array.from(numTest.toString(), Number)

    print(numTest)

    expect(logSpy).toHaveBeenCalled()

    digits.forEach(e => {
      expect(logSpy).toHaveBeenCalledWith(converter[e][0])
    })
  })
})
