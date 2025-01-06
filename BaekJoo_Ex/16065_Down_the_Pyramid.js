// 문제: 16065, Down the Pyramid

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
	let arr = [];
	arr[0] = 0;
	for (let i = 1; i <= n; i++) {
		arr[i] = parseInt(input[1].split(' ')[i - 1]);
	}

	let low = 0;
	let high = 1e18;
	let x = 0;

	for (let j = 0; j <= n; j++) {
		x = arr[j] - x;
		if (Math.floor(j % 2) === 1) {
			high = Math.min(high, x);
		} else {
			low = Math.max(low, -x);
		}
	}

	if (low > high || low < 0 || high < 0) {
		console.log(0);
	} else {
		console.log(high - low + 1);
	}

	process.exit();
});
