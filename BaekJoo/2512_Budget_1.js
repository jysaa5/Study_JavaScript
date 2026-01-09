// 2512 예산

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];
let country = 0;
let nums = [];
let total = 0;

let start = 0;
let mid = 0;
let end = 0;
let result = 0;

rl.on('line', function (line) {
	input.push(line);
	if (input.length === 3) {
		rl.close();
	}
}).on('close', function () {
	country = Number(input[0]);
	nums = input[1]
		.split(' ')
		.map(Number)
		.sort((a, b) => a - b);
	total = Number(input[2]);

	start = 1;
	end = nums[country - 1];

	while (start <= end) {
		mid = Math.floor((start + end) / 2);
		let count = 0;
		for (let b of nums) {
			count += Math.min(mid, b);
		}

		if (count <= total) {
			result = mid;
			start = mid + 1;
		} else {
			end = mid - 1;
		}
	}

	console.log(result);

	process.exit();
});
