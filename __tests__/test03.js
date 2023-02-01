const sevenDisplay = require('../Activities/SevenDisplay')
const { converter } = require('../Activities/converterDictionary')

const logSpy = jest.spyOn(global.console, 'log')

describe('Test sevenDisplay with numbers from 0 to 1', () => {
  test('SevenDisplay with 1234567890', () => {

    const numTest = 1234567890
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
