const sevenDisplay = require('../Activities/SevenDisplay')
const { converter } = require('../Activities/converterDictionary')

const logSpy = jest.spyOn(global.console, 'log')

describe('Test sevenDisplay with Number.MAX_SAFE_INTEGER', () => {
  test('SevenDisplay with Number.MAX_SAFE_INTEGER', () => {

    const numTest = Number.MAX_SAFE_INTEGER
    const digits = Array.from(numTest.toString(), Number)

    sevenDisplay(numTest)

    expect(logSpy).toHaveBeenCalled()
    for (let i = 0; i > 3; i++) {
      digits.forEach(e => {
        expect(logSpy).toHaveBeenCalledWith(converter[e][i])
      })
    }
  })
})
