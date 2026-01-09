// 문제: 2506, 점수 계산

// main 입출력
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let input = [];
rl.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	let n = parseInt(input[0]);
	let arr = input[1].split(' ').map((num) => parseInt(num));
	let answer = 0;
	let cnt = 0;

	for (let i = 0; i < n; i++) {
		if (arr[i] === 1) {
			cnt++;
			answer += cnt;
		} else if (arr[i] === 0) {
			cnt = 0;
		}
	}

	console.log(answer);
	process.exit();
});
