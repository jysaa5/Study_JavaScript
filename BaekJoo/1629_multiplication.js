// 문제: 1629, 곱셈
// 파이썬과 동일하게 풀었는데, 계속 오답이 된다.

function pow_custom(a, b, mod) {
	let ret = 1;
	while (b > 0) {
		if (b % 2 === 1) {
			ret = (ret * a) % mod;
		}
		a = (a * a) % mod;
		b = Math.floor(b / 2);
	}
	return ret;
}

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let input = [];
rl.on('line', function (line) {
	input.push(line);
	rl.close();
}).on('close', function () {
	var a = parseInt(input[0].split(' ')[0]);
	var b = parseInt(input[0].split(' ')[1]);
	var c = parseInt(input[0].split(' ')[2]);
	console.log(pow_custom(a, b, c));
	process.exit();
});
