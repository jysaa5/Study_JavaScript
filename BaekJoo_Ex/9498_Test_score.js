// 문제: 9498, 시험 성적
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let input = [];
rl
	.on('line', function (line) {
		input.push(parseInt(line));
		rl.close();
	})
	.on('close', function () {
		var x = input[0];
		if (x >= 90 && x <= 100) {
			console.log('A');
		} else if (x >= 80 && x <= 89) {
			console.log('B');
		} else if (x >= 70 && x <= 79) {
			console.log('C');
		} else if (x >= 60 && x <= 69) {
			console.log('D');
		} else {
			console.log('F');
		}
		process.exit();
	});
