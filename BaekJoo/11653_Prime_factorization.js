// 문제: 11653, 소인수분해

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
	let n = input[0];
	for (var i = 1; i < input[0]; i++) {
		while (true) {
			if (n % (i + 1) != 0) {
				break;
			}
			n /= i + 1;
			console.log(i + 1);
		}
	}
	process.exit();
});
