// 문제: 10102, 개표

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let input = [];
rl.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	var p = parseInt(input[0]);
	var vote = input[1].split('');
	let a = 0;
	let b = 0;
	for (var v of vote) {
		if (v === 'A') {
			a++;
		} else {
			b++;
		}
	}
	let result = '';
	if (a > b) {
		result = 'A';
	} else if (a < b) {
		result = 'B';
	} else {
		result = 'Tie';
	}
	console.log(result);

	process.exit();
});
