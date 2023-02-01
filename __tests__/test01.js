const sevenDisplay = require('../Activities/SevenDisplay')
const { converter } = require('../Activities/converterDictionary')

const logSpy = jest.spyOn(global.console, 'log')

describe('Test sevenDisplay for single digits', () => {
  test('SevenDisplay with 0', () => {

    sevenDisplay(0)

    expect(logSpy).toHaveBeenCalled()
    converter[0].forEach(e => {
      expect(logSpy).toHaveBeenCalledWith(e)
    })
  })

  test('SevenDisplay with 1', () => {

    sevenDisplay(1)

    converter[1].forEach(e => {
      expect(logSpy).toHaveBeenCalledWith(e)
    })
  })
})
