// 문제: 9610, 사분면

function quadrant(x, y) {
	if (x === 0 || y === 0) {
		return 'AXIS';
	} else if (x > 0 && y > 0) {
		return 'Q1';
	} else if (x < 0 && y > 0) {
		return 'Q2';
	} else if (x < 0 && y < 0) {
		return 'Q3';
	} else {
		return 'Q4';
	}
}

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
		var pointNum = parseInt(input[0]);
		var point = {
			AXIS: 0,
			Q1: 0,
			Q2: 0,
			Q3: 0,
			Q4: 0,
		};
		for (var i = 0; i < pointNum; i++) {
			point[
				quadrant(
					parseInt(input[i + 1].split(' ')[0]),
					parseInt(input[i + 1].split(' ')[1]),
				)
			]++;
		}
		console.log(`Q1: ${point['Q1']}`);
		console.log(`Q2: ${point['Q2']}`);
		console.log(`Q3: ${point['Q3']}`);
		console.log(`Q4: ${point['Q4']}`);
		console.log(`AXIS: ${point['AXIS']}`);
		process.exit();
	});
