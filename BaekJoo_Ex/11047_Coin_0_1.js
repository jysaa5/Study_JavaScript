// 문제: 11047 동전 0

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];
let n = 1;
let k = 1;
let coins = [];
let result = 0;

const setInputs = () => {
	input.shift();
	coins = input.map((i) => parseInt(i)).reverse();
};

rl.on('line', function (line) {
	input.push(line);
	let numbers = input[0].split(' ').map((i) => parseInt(i));
	n = numbers[0];
	k = numbers[1];
	if (input.length === n + 1) {
		rl.close();
	}
}).on('close', function () {
	setInputs();

	for (let coin of coins) {
		if (k < coin) {
			continue;
		} else {
			let nums = Math.floor(k / coin);
			k = k - nums * coin;
			result += nums;
		}
	}

	console.log(result);

	process.exit();
});
