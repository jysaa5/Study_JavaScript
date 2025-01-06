// 문제: 2839, 설탕 배달

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let input = [];

const getNumberOfPacks = (n) => {
	let count = 0;
	while (true) {
		if (n % 5 === 0) {
			return parseInt(n / 5) + count;
		} else if (n <= 0) {
			return -1;
		}
		n = n - 3;
		count++;
	}
};

rl
	.on('line', function (line) {
		input.push(line);
		rl.close();
	})
	.on('close', function () {
		console.log(getNumberOfPacks(Number(input[0])));
		process.exit();
	});
