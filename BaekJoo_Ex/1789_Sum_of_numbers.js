// 문제: 1789, 수들의 합

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
		let n = input[0];
		if (n == 1) {
			console.log(1);
			return;
		}
		let cnt = 0;
		for (var i = 0; i < input[0]; i++) {
			var a = i;
			var b = n - i;
			if (a < b) {
				cnt++;
				n = b;
			} else {
				break;
			}
		}
		console.log(cnt);
		process.exit();
	});
