// 문제: 2530, 인공지능 시계
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
		var hour = parseInt(input[0].split(' ')[0]);
		var minutes = parseInt(input[0].split(' ')[1]);
		var second = parseInt(input[0].split(' ')[2]);
		var time = parseInt(input[1]); // 초 단위
		second += time;
		minutes += parseInt(second / 60);
		hour += parseInt(minutes / 60);
		hour = hour % 24;
		minutes = minutes % 60;
		second = second % 60;
		console.log(`${hour} ${minutes} ${second}`);
		process.exit();
	});
