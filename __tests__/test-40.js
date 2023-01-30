const print = require('../Activities/seven-display')
const { converter } = require('../Activities/converterDictionary')

const logSpy = jest.spyOn(global.console, 'log')

describe('Test print 40', () => {
  test('Print 40', () => {

    print(40)

    expect(logSpy).toHaveBeenCalled()
    expect(logSpy).toHaveBeenCalledWith(converter[4][0])
    expect(logSpy).toHaveBeenCalledWith(converter[4][1])
    expect(logSpy).toHaveBeenCalledWith(converter[4][2])

    expect(logSpy).toHaveBeenCalledWith(converter[0][0])
    expect(logSpy).toHaveBeenCalledWith(converter[0][1])
    expect(logSpy).toHaveBeenCalledWith(converter[0][2])
  })
})
