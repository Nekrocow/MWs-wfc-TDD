const { converter } = require('./converterDictionary')

// La solución está MAL porque tengo que hacer el número línea por línea, no número por número; revisar

function print(number) {
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

module.exports = print

print(12)