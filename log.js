module.exports = {

	Reset : (text) => {

		console.log('\x1b[0m', text);
	},

	Bright : (text) => {

		console.log('\x1b[1m', text);
	},

	Dim : (text) => {

		console.log('\x1b[2m', text);
	},

	Underscore : (text) => {

		console.log('\x1b[4m', text);
	},

	Blink : (text) => {

		console.log('\x1b[5m', text);
	},

	Reverse : (text) => {

		console.log('\x1b[7m', text);
	},

	Hidden : (text) => {

		console.log('\x1b[8m', text);
	},

	Hidden : (text) => {

		console.log('\x1b[8m', text);
	},

	Black : (text) => {

		console.log('\x1b[30m', text);
	},

	Red : (text) => {

		console.log('\x1b[31m', text);
	},

	Green : (text) => {

		console.log('\x1b[32m', text);
	},

	Yellow : (text) => {

		console.log('\x1b[33m', text);
	},

	Blue : (text) => {

		console.log('\x1b[34m', text);
	},

	Magenta : (text) => {

		console.log('\x1b[35m', text);
	},

	Cyan : (text) => {

		console.log('\x1b[36m', text);
	},

	White : (text) => {

		console.log('\x1b[37m', text);
	},

	BgBlack : (text) => {

		console.log('\x1b[40m', text);
	},

	BgRed : (text) => {

		console.log('\x1b[41m', text);
	},

	BgGreen : (text) => {

		console.log('\x1b[42m', text);
	},

	BgYellow : (text) => {

		console.log('\x1b[43m', text);
	},

	BgBlue : (text) => {

		console.log('\x1b[44m', text);
	},

	BgMagenta : (text) => {

		console.log('\x1b[45m', text);
	},

	BgCyan : (text) => {

		console.log('\x1b[46m', text);
	},

	BgWhite : (text) => {

		console.log('\x1b[47m', text);
	}
};