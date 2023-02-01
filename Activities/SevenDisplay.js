const { converter } = require('./converterDictionary')

function sevenDisplay(number) {
	const digits = Array.from(number.toString(), Number)

	let upperLine = ""
	let midLine = ""
	let bottomLine = ""

	for (const num of digits) {
		upperLine += converter[num][0]
		midLine += converter[num][1]
		bottomLine += converter[num][2]
	}

	console.log(upperLine)
	console.log(midLine)
	console.log(bottomLine)
	return
}

module.exports = sevenDisplay
