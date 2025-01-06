// 문제: 2675, 문자열 반복

// solution 2
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
		var t = parseInt(input[0]);
		for (var i = 0; i < t; i++) {
			var r = parseInt(input[i + 1].split(' ')[0]);
			var str = input[i + 1].split(' ')[1];
			let result = '';

			var strArray = str.split('');
			var n = 0;
			result = strArray.reduce((acc, curr) => {
				n = 0;
				while (true) {
					if (r == n) {
						break;
					}
					acc += curr;
					n++;
				}
				return acc;
			}, '');
			console.log(result);
		}
		process.exit();
	});
