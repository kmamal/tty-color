const Tags = require('./tags')
const { mapValues } = require('@kmamal/util/object/map-values')
const { mapEntries } = require('@kmamal/util/object/map-entries')

const _colors = mapValues(Tags.colors, (tag) => ({
	type: 'color',
	open: tag,
	close: Tags.closing.color,
}))

const _backgrounds = mapValues(Tags.backgrounds, (tag) => ({
	type: 'background',
	open: tag,
	close: Tags.closing.background,
}))

const _modifiers = mapEntries(Tags.modifiers, ([ name, tag ]) => [
	name,
	{
		type: 'modifier',
		open: tag,
		close: Tags.closing[name],
	},
])

const applyStyles = (styles, string) => [
	...styles.map((t) => t.open),
	string,
	...styles.map((t) => t.close).reverse(),
].join('')

const makeStylize = (styles) => {
	const open = styles.map((t) => t.open).join('')
	const close = styles.map((t) => t.close).reverse().join('')
	return (string) => `${open}${string}${close}`
}

const normalize = (styles) => {
	const normalized = []
	let hasColor = false
	let hasBackground = false
	for (const style of styles) {
		if (style.type === 'color') {
			if (hasColor) { continue }
			hasColor = true
		}
		if (style.type === 'background') {
			if (hasBackground) { continue }
			hasBackground = true
		}
		normalized.push(style)
	}
	return normalized
}

module.exports = {
	applyStyles,
	makeStylize,
	normalize,
	colors: _colors,
	backgrounds: _backgrounds,
	modifiers: _modifiers,
	..._colors,
	..._backgrounds,
	..._modifiers,
}
