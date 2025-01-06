// 문제: 1003, 피보나치 함수
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let input = [];
let result = new Array(100).fill(0);
result[0] = 0;
result[1] = 1;

const fibonacci = () => {
	for (let i = 2; i <= 40; i++) {
		result[i] = result[i - 1] + result[i - 2];
	}
};

const getResults = (count) => {
	for (let i = 0; i < count; i++) {
		const num = Number(input[i + 1]);
		if (num === 0) {
			console.log(result[num + 1], result[num]);
		} else {
			console.log(result[num - 1], result[num]);
		}
	}
};

rl
	.on('line', function (line) {
		if (input.length === 0) {
			input.push(line);
		} else if (input.length >= 1) {
			input.push(line);
			if (Number(input[0]) === input.length - 1) rl.close();
		}
	})
	.on('close', function () {
		fibonacci();
		getResults(Number(input[0]));
		process.exit();
	});
