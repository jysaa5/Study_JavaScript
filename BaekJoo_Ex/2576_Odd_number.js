// 문제: 2576, 홀수

function getSum(arr) {
	let sum = 0;
	for (let num of arr) {
		sum += num;
	}
	return sum;
}

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
		let oddNums = [];
		for (let i = 0; i < 7; i++) {
			if (parseInt(input[i]) % 2 !== 0) {
				oddNums.push(parseInt(input[i]));
			}
		}
		if (oddNums.length < 1) {
			console.log(-1);
		} else {
			console.log(getSum(oddNums));
			console.log(Math.min(...oddNums));
		}
		process.exit();
	});
