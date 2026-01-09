// 문제: 2914, 저작권
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let input = [];
rl.on('line', function (line) {
	input = line.split(' ').map((i) => parseInt(i));
	rl.close();
}).on('close', function () {
	console.log(input[0] * (input[1] - 1) + 1);
	process.exit();
});
