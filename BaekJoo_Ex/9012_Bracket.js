// 문제: 9012, 괄호

function checkVPS(line) {
	let brackets = line;
	let arr = brackets.split('');
	let stack = [];

	if (arr.length % 2 === 1) {
		return 'NO';
	}

	for (var bracket of arr) {
		if (stack.length === 0) {
			if (bracket === '(') {
				stack.push(bracket);
			} else {
				return 'NO';
			}
		} else {
			if (stack[stack.length - 1] === '(' && bracket === ')') {
				stack.pop();
				continue;
			} else {
				stack.push(bracket);
			}
		}
	}

	return stack.length > 0 ? 'NO' : 'YES';
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
		let t = parseInt(input[0]);
		for (var i = 0; i < t; i++) {
			console.log(checkVPS(input[i + 1]));
		}
		process.exit();
	});
