const Styles = require('./styles')

const COLOR_KEYS = Object.keys(Styles.colors)
const BACKGROUND_KEYS = Object.keys(Styles.backgrounds)
const MODIFIER_KEYS = Object.keys(Styles.modifiers)

const ALL_KEYS = [
	'colors',
	'backgrounds',
	'modifiers',
	...COLOR_KEYS,
	...BACKGROUND_KEYS,
	...MODIFIER_KEYS,
]


const _chalk = (styles) => new Proxy(Styles.makeStylize(styles), {
	get: (_, key) => {
		switch (key) {
			case 'colors': { return COLOR_KEYS }
			case 'backgrounds': { return BACKGROUND_KEYS }
			case 'modifiers': { return MODIFIER_KEYS }
			default: {
				const style = Styles[key]
				if (!style) { throw new Error("unknown style") }
				return _chalk(Styles.normalize([ ...styles, style ]))
			}
		}
	},
	ownKeys: () => ALL_KEYS,
})

module.exports = _chalk([])
