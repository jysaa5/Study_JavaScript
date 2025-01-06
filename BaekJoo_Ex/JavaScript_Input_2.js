// JavaScript 입력 정리
// 여러 줄 입력

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];

rl
	.on('line', function (line) {
		input.push(line);
	})
	.on('close', function () {
		console.log(input);
		process.exit();
	});
