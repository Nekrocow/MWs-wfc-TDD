const print = require('../Activities/SevenDisplay')
const { converter } = require('../Activities/converterDictionary')

const logSpy = jest.spyOn(global.console, 'log')

describe('Test print single digits', () => {
  test('Print 0', () => {

    print(0)

    expect(logSpy).toHaveBeenCalled()
    converter[0].forEach(e => {
      expect(logSpy).toHaveBeenCalledWith(e)
    })
  })

  test('Print 1', () => {

    print(1)

    converter[1].forEach(e => {
      expect(logSpy).toHaveBeenCalledWith(e)
    })
  })
})
