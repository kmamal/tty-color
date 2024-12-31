const Codes = require('./codes')
const { mapValues } = require('@kmamal/util/object/map-values')

const PATTERN = "\u001b\\[\\d\\d?\\d?m"
const CAPTURING_PATTERN = "\u001b\\[(\\d\\d?\\d?)m"

const _ALL_CODES = [
	...Object.values(Codes.colors),
	...Object.values(Codes.backgrounds),
	...Object.values(Codes.modifiers),
	...Object.values(Codes.closing),
]
const _ALL_TAGS = []
for (const code of _ALL_CODES) {
	_ALL_TAGS[code] = `\u001b[${code}m`
}

const fromCode = (code) => _ALL_TAGS[code] ?? `\u001b[${code}m`
const toCode = (tag) => parseInt(tag.slice(2, -1), 10)

const _closing = mapValues(Codes.closing, fromCode)
const _colors = mapValues(Codes.colors, fromCode)
const _backgrounds = mapValues(Codes.backgrounds, fromCode)
const _modifiers = mapValues(Codes.modifiers, fromCode)

module.exports = {
	PATTERN,
	CAPTURING_PATTERN,
	fromCode,
	toCode,
	colors: _colors,
	backgrounds: _backgrounds,
	modifiers: _modifiers,
	closing: _closing,
	..._colors,
	..._backgrounds,
	..._modifiers,
}
