const { converter } = require('./converterDictionary')

function print(number) {
	const digits = Array.from(number.toString(), Number)

	for (const num of digits) {
		converter[num].forEach(e => {
			console.log(e)
		})
	}
	return
}

module.exports = print
