// 문제: 5063, TGN
// N 개
// r: 광고를 하지 않았을 때 수익
// e: 광고를 했을 때 수익
// c: 광고 비용

function printMessage(value) {
	if (value > 0) {
		console.log('advertise');
	} else if (value === 0) {
		console.log('does not matter');
	} else {
		console.log('do not advertise');
	}
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
	for (var i = 0; i < n; i++) {
		let nums = input[i + 1].split(' ').map((i) => parseInt(i));
		var r = nums[0];
		var e = nums[1];
		var c = nums[2];
		printMessage(e - c - r);
	}
	process.exit();
});
