// 문제: 11557, Yangjojang of The Year

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let input = [];
rl.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	let test = parseInt(input[0]);
	input.shift();
	while (true) {
		if (input.length < 1) {
			break;
		}

		var num = parseInt(input.shift());
		let alcohol = [];
		for (var i = 0; i < num; i++) {
			alcohol.push(parseInt(input[i].split(' ')[1]));
		}

		console.log(input[alcohol.indexOf(Math.max(...alcohol))].split(' ')[0]);
		for (var i = 0; i < num; i++) {
			input.shift();
		}
	}
	process.exit();
});
