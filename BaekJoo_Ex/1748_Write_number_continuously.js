// 문제: 1748, 수 이어쓰기 - 1
// solution 1

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
	let n = input[0];
	let len = n.length;
	let sum = 0;
	for (var i = 1; i < len + 1; i++) {
		if (i < len) {
			sum += 9 * Math.pow(10, i - 1) * i;
		} else if (i === len) {
			let nine = '';
			for (var j = 0; j < i - 1; j++) {
				nine = nine.concat('9');
			}
			if (nine.length > 0) {
				sum += (parseInt(n) - parseInt(nine)) * i;
			} else {
				sum += parseInt(n);
			}
		}
	}
	console.log(sum);
	process.exit();
});
