// 문제: 2752, 세수정렬

function sortNumber(a, b, c) {
	return new Array(a, b, c).sort((a, b) => a - b);
}

// main 입출력
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let input = [];
rl
	.on('line', function (line) {
		input = line.split(' ').map((i) => parseInt(i));
		rl.close();
	})
	.on('close', function () {
		let answer = sortNumber(input[0], input[1], input[2]);
		console.log(answer[0], answer[1], answer[2]);
		process.exit();
	});
