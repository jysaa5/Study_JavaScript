// 문제: 10817, 세 수
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
	var max = Math.max(...input);
	input.splice(input.indexOf(max), 1);
	max = Math.max(...input);
	console.log(max);
	process.exit();
});
