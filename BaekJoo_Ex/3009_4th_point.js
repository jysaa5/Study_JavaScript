// 문제: 3009, 네 번째 점

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let input = [];
rl.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	let x = [];
	let y = [];
	for (var point of input) {
		if (x.indexOf(point.split(' ')[0]) < 0) {
			x.push(point.split(' ')[0]);
		} else {
			x.splice(x.indexOf(point.split(' ')[0]), 1);
		}
		if (y.indexOf(point.split(' ')[1]) < 0) {
			y.push(point.split(' ')[1]);
		} else {
			y.splice(y.indexOf(point.split(' ')[1]), 1);
		}
	}
	console.log(x[0], y[0]);

	process.exit();
});
