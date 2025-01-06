// JavaScript 입력 정리
// 한 줄 입력

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl
	.on('line', function (line) {
		console.log('input >>>>', line);
		rl.close();
	})
	.on('close', function () {
		process.exit();
	});
