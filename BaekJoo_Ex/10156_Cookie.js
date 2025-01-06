// 문제: 10156, 과자
// 과자 1개 가격: K, 사려는 과자 개수: N, 현재 가진 돈: M

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
		let k = input[0];
		let n = input[1];
		let m = input[2];
		console.log(k * n - m > 0 ? k * n - m : 0);
		process.exit();
	});
