
const _colors = {
	black: 30,
	red: 31,
	green: 32,
	yellow: 33,
	blue: 34,
	magenta: 35,
	cyan: 36,
	white: 37,
	gray: 90,

	brightRed: 91,
	brightGreen: 92,
	brightYellow: 93,
	brightBlue: 94,
	brightMagenta: 95,
	brightCyan: 96,
	brightWhite: 97,
}

const _backgrounds = {
	bgBlack: 40,
	bgRed: 41,
	bgGreen: 42,
	bgYellow: 43,
	bgBlue: 44,
	bgMagenta: 45,
	bgCyan: 46,
	bgWhite: 47,
	bgGray: 100,

	bgBrightRed: 101,
	bgBrightGreen: 102,
	bgBrightYellow: 103,
	bgBrightBlue: 104,
	bgBrightMagenta: 105,
	bgBrightCyan: 106,
	bgBrightWhite: 107,
}

const _modifiers = {
	bold: 1,
	dim: 2,
	italic: 3,
	underline: 4,
	inverse: 7,
	hidden: 8,
	strikethrough: 9,
}

const _closing = {
	all: 0,
	color: 39,
	background: 49,
	bold: 22,
	dim: 22,
	weight: 22,
	italic: 23,
	underline: 24,
	inverse: 27,
	hidden: 28,
	strikethrough: 29,
}

module.exports = {
	colors: _colors,
	backgrounds: _backgrounds,
	modifiers: _modifiers,
	closing: _closing,
	..._colors,
	..._backgrounds,
	..._modifiers,
}
