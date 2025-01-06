// 문제: 2753, 윤년

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let input = [];
rl.on('line', function (line) {
	input = line.split(' ').map((i) => parseInt(i));
	rl.close();
}).on('close', function () {
	let year = input[0];
	if (year % 4 === 0) {
		if (year % 100 !== 0 || year % 400 === 0) {
			console.log(1);
		} else {
			console.log(0);
		}
	} else {
		console.log(0);
	}
	process.exit();
});
