// 문제: 11021, A+B-7
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let input = [];
rl.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	const t = parseInt(input[0]);
	for (var i = 1; i < t + 1; i++) {
		result = input[i].split(' ');
		sum = parseInt(result[0]) + parseInt(result[1]);
		console.log(`Case #${i}: ${sum}`);
	}
	process.exit();
});
