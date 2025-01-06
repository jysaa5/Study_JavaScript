// 문제: 5355, 화성 수학

// @: 3 곱하기
// %: 5 더하기
// #: 7 빼기
// 수, 연산자

const readline = require('readline');

function convertOperator(num, value) {
	var mars = {
		'@': 3,
		'%': 5,
		'#': 7,
	};
	if (mars[value] === 3) {
		return num * 3;
	} else if (mars[value] === 5) {
		return num + 5;
	} else if (mars[value] === 7) {
		return num - 7;
	}
}

function financial(x) {
	return Number.parseFloat(x).toFixed(2);
}

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
			var inputLine = input[i + 1].split(' ');
			var num = Number(inputLine[0]);
			for (var j = 1; j < inputLine.length; j++) {
				num = convertOperator(num, inputLine[j]);
			}
			console.log(financial(num));
		}
		process.exit();
	});
