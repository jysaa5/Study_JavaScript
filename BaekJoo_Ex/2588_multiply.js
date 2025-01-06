// 문제: 2588, 곱셈

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
		console.log(input[0] * parseInt(String(input[1]).split('')[2]));
		console.log(input[0] * parseInt(String(input[1]).split('')[1]));
		console.log(input[0] * parseInt(String(input[1]).split('')[0]));
		console.log(input[0] * input[1]);
		process.exit();
	});
