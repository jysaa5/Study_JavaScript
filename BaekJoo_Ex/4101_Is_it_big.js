// 문제: 4101, 크냐?
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let input = [];
rl.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	let i = 0;
	while (true) {
		if (input[i].split(' ')[0] === '0' && input[i].split(' ')[1] === '0') {
			break;
		}
		var first = parseInt(input[i].split(' ')[0]);
		var second = parseInt(input[i].split(' ')[1]);
		if (first > second) {
			console.log('Yes');
		} else {
			console.log('No');
		}
		i++;
	}

	process.exit();
});
