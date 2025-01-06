// 문제: 2309, 일곱 난쟁이

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let input = [];
rl.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	let height = [];
	let sum = 0;
	let result = [];
	for (let i = 0; i < 9; i++) {
		height.push(parseInt(input[i]));
	}
	height.sort((a, b) => a - b);
	for (let j = 0; j < 9; j++) {
		sum += height[j];
		result.push(height[j]);
	}

	let rest = sum - 100;
	for (let k = 0; k < 9; k++) {
		let a = result[k];
		for (let l = k; l < 9; l++) {
			if (l < 8) {
				let b = result[l + 1];
				if (a + b === rest) {
					result.splice(k, 1);
					result.splice(l, 1);
					break;
				}
			}
		}
	}
	result.sort((a, b) => a - b);
	for (let d of result) {
		console.log(d);
	}
	process.exit();
});
