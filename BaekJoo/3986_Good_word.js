// 문제: 3986, 좋은 단어

function checkGoodWord(line) {
	let ab = line;
	let arr = ab.split('');
	let stack = [];
	if (arr.length % 2 === 1) {
		return false;
	}

	for (var word of arr) {
		if (stack.length === 0) {
			stack.push(word);
		} else {
			if (stack[stack.length - 1] === word) {
				stack.pop();
				continue;
			} else {
				stack.push(word);
			}
		}
	}
	return stack.length > 0 ? false : true;
}

// main 입출력
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
	let result = 0;
	for (var i = 0; i < n; i++) {
		checkGoodWord(input[i + 1]) === true ? result++ : null;
	}
	console.log(result);
	process.exit();
});
