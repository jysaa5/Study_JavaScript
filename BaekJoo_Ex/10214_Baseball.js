// 문제: 10214, Baseball

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
		var t = input[0];
		let y = 0;
		let k = 0;
		for (var j = 0; j < t; j++) {
			for (var i = 1; i < 10; i++) {
				if (parseInt(input[i].split(' ')[0]) > parseInt(input[i].split(' ')[1])) {
					y++;
				} else if (
					parseInt(input[i].split(' ')[0]) < parseInt(input[i].split(' ')[1])
				) {
					k++;
				}
			}

			if (y > k) {
				console.log('Yonsei');
			} else if (y < k) {
				console.log('Korea');
			} else if (y == k) {
				console.log('Draw');
			}
		}
		process.exit();
	});
