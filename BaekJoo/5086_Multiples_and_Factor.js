// 문제: 5086, 배수와 약수

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let input = [];
rl.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	for (var i = 0; i < input.length; i++) {
		var nums = input[i].split(' ');
		if (nums[0] === '0' && nums[1] === '0') {
			break;
		}
		if (parseInt(nums[0]) > parseInt(nums[1])) {
			parseInt(nums[0]) % parseInt(nums[1]) === 0 ? console.log('multiple') : console.log('neither');
		} else if (parseInt(nums[0]) < parseInt(nums[1])) {
			parseInt(nums[1]) % parseInt(nums[0]) === 0 ? console.log('factor') : console.log('neither');
		}
	}

	process.exit();
});
