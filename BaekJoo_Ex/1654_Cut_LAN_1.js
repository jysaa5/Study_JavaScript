// 1654: 랜선 자르기
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];
let k = 0;
let n = 0;
let lengths = [];

let start = 0;
let mid = 0;
let end = 0;
let result = 0;

rl.on('line', function (line) {
	input.push(line);
	k = Number(input[0].split(' ')[0]);
	if (input.length === k + 1) {
		rl.close();
	}
}).on('close', function () {
	n = Number(input[0].split(' ')[1]);
	input.shift();
	lengths = input.map(Number).sort((a, b) => a - b);

	start = 0;
	end = lengths[k - 1];

	while (start <= end) {
		mid = Math.floor((start + end) / 2);
		let count = 0;

		for (let cable of lengths) {
			count += Math.floor(cable / mid);
		}

		if (count >= n) {
			start = mid + 1;
			result = mid;
		} else {
			end = mid - 1;
		}
	}

	console.log(result);
	process.exit();
});
