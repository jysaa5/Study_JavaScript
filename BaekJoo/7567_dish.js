// 문제: 7567, 그릇
// 1개 그릇과 바닥: 10
// 포갤때마다: 5
// 반대방향 포개면: 10

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let input = [];
rl.on('line', function (line) {
	input.push(line);
	rl.close();
}).on('close', function () {
	let dishes = input[0].split('');
	let stack = [];
	let result = 10;
	for (var d of dishes) {
		if (stack.length === 0) {
			stack.push(d);
		} else {
			if (stack[stack.length - 1] === d) {
				result += 5;
			} else {
				result += 10;
			}
			stack.push(d);
		}
	}
	console.log(result);
	process.exit();
});
