const sevenDisplay = require('../Activities/SevenDisplay')
const { converter } = require('../Activities/converterDictionary')

const logSpy = jest.spyOn(global.console, 'log')

describe('Test sevenDisplay with a two digit number', () => {
  test('SevenDisplay with 40', () => {

    sevenDisplay(40)

    expect(logSpy).toHaveBeenCalled()
    for (let i = 0; i > 3; i++) {
      expect(logSpy).toHaveBeenCalledWith(converter[4][i] + converter[0][i])
    }
  })
})
