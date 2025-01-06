// 문제: 13116, 30번

// 유형: 이진트리

function getCommonAncestor(a, b) {
	while (a !== b) {
		Math.max(a, b) === a ? (a = Math.floor(a / 2)) : (b = Math.floor(b / 2));
	}
	return a;
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
	let t = parseInt(input[0]);
	for (var i = 0; i < t; i++) {
		let a = parseInt(input[i + 1].split(' ')[0]);
		let b = parseInt(input[i + 1].split(' ')[1]);
		console.log(getCommonAncestor(a, b) * 10);
	}

	process.exit();
});
