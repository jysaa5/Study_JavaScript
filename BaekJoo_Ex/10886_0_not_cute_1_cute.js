// 문제: 10886, 0 = not cute / 1 = cute

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let input = [];
rl
	.on('line', function (line) {
		input.push(parseInt(line));
	})
	.on('close', function () {
		var result = input.reduce((acc, curr, i) => {
			if (i == 0) {
				return acc;
			}
			return (acc -= curr);
		}, input[0])(result >= input[0] / 2 + 1)
			? console.log('Junhee is cute!')
			: console.log('Junhee is not cute!');

		process.exit();
	});
