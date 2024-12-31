const chalk = require('../src/chalk')

for (const background of chalk.backgrounds) {
	const chalkWithBackground = chalk[background]
	for (const foreground of [ ...chalk.modifiers, ...chalk.colors ]) {
		const chalkWithBoth = chalkWithBackground[foreground]
		process.stdout.write(chalkWithBoth('X'))
	}
	process.stdout.write('\n')
}
