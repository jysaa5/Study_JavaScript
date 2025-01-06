// 문제: 3047, ABC

function sortABC(arr, str) {
	let order = str;
	let sortArr = arr.sort((a, b) => a - b);
	let orderArr = order.split('');
	let result = [];
	for (let o of orderArr) {
		if (o === 'A') {
			result.push(sortArr[0]);
		} else if (o === 'B') {
			result.push(sortArr[1]);
		} else {
			result.push(sortArr[2]);
		}
	}
	return result;
}

// main 입출력
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
		let nums = input[0].split(' ').map((i) => parseInt(i));
		let strABC = input[1];
		let result = sortABC(nums, strABC);
		console.log(result[0], result[1], result[2]);
		process.exit();
	});
