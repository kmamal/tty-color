const { PATTERN } = require('./tags')

const REGEX = new RegExp(PATTERN, 'u')

const strip = (string) => string.split(REGEX).join('')

module.exports = { strip }
