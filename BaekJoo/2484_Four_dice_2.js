// 문제: 2484, 주사위 네 개
// 주사위 4개
// solution 2
// 핵심: 같은 눈 체크는 정렬을 통해서 알 수 있다. Set과 정렬 사용

function getMoney(dices) {
	// 정렬
	dices.sort();
	const nums = new Set([...dices]);
	// 4개
	if (nums.size === 1) {
		return dices[0] * 5000 + 50000;
	}
	// 3개, 2쌍 일때
	if (nums.size === 2) {
		// 3개가 같을 때
		if (dices[1] === dices[2]) {
			return dices[1] * 1000 + 10000;
		}
		// 2개씩 쌍일때
		return dices[1] * 500 + dices[2] * 500 + 2000;
	}
	// 2개
	if (nums.size === 3) {
		for (var i = 0; i < dices.length; i++) {
			if (dices[i] === dices[i + 1]) {
				return dices[i] * 100 + 1000;
			}
		}
	}
	// 다 다를때
	return dices[dices.length - 1] * 100;
}

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
	let result = [];
	for (var i = 0; i < n; i++) {
		let dices = input[i + 1].split(' ').map((e) => parseInt(e));
		result.push(getMoney(dices));
	}
	console.log(Math.max(...result));
	process.exit();
});
