// 문제: 10103, 주사위 게임

// 낮은 숫자가 나온 사람: -상대편 주사위에 나온 숫자
// 두 사람의 주사위가 같은 수: 점수 잃기 X

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
		var n = parseInt(input[0]);
		var c = 100;
		var s = 100;
		for (var i = 0; i < n; i++) {
			if (
				parseInt(input[i + 1].split(' ')[0]) > parseInt(input[i + 1].split(' ')[1])
			) {
				s = s - parseInt(input[i + 1].split(' ')[0]);
			} else if (
				parseInt(input[i + 1].split(' ')[0]) < parseInt(input[i + 1].split(' ')[1])
			) {
				c = c - parseInt(input[i + 1].split(' ')[1]);
			}
		}
		console.log(c);
		console.log(s);
		process.exit();
	});
