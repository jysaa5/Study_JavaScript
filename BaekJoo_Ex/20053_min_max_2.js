// 문제 20053, 최소, 최대2

function getMin(arr) {
	let min = Number.MAX_SAFE_INTEGER;
	for (let num of arr) {
		if (min > num) {
			min = num;
		}
	}
	return min;
}

function getMax(arr) {
	let max = Number.MIN_SAFE_INTEGER;
	for (let num of arr) {
		if (max < num) {
			max = num;
		}
	}
	return max;
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
		let t = parseInt(input[0]);
		for (let i = 0; i < t * 2; i += 2) {
			let n = Number(input[i + 1]);
			let nums = Array.from(
				{
					length: n,
				},
				() => 0,
			);
			nums = input[i + 2].split(' ').map((j) => parseInt(j));
			// console.log(Math.min(...nums), Math.max(...nums));
			console.log(getMin(nums), getMax(nums));
		}
		process.exit();
	});
