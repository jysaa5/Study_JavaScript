// 문제: 2985, 세 수

function calculateAddition(a, b, c) {
	return c === a + b ? true : false;
}

function calculateSubtraction(a, b, c) {
	return c === a - b ? true : false;
}

function calculateMultiplication(a, b, c) {
	return c === a * b ? true : false;
}

function calculateDivision(a, b, c) {
	return c === parseInt(a / b) ? true : false;
}

// main 입출력
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let input = [];
rl.on('line', function (line) {
	input = line.split(' ').map((i) => parseInt(i));
	rl.close();
}).on('close', function () {
	if (calculateAddition(input[0], input[1], input[2])) {
		console.log(input[0] + '+' + input[1] + '=' + input[2]);
	} else if (calculateSubtraction(input[0], input[1], input[2])) {
		console.log(input[0] + '-' + input[1] + '=' + input[2]);
	} else if (calculateMultiplication(input[0], input[1], input[2])) {
		console.log(input[0] + '*' + input[1] + '=' + input[2]);
	} else if (calculateDivision(input[0], input[1], input[2])) {
		console.log(input[0] + '/' + input[1] + '=' + input[2]);
	} else if (calculateAddition(input[1], input[2], input[0])) {
		console.log(input[0] + '=' + input[1] + '+' + input[2]);
	} else if (calculateSubtraction(input[1], input[2], input[0])) {
		console.log(input[0] + '=' + input[1] + '-' + input[2]);
	} else if (calculateMultiplication(input[1], input[2], input[0])) {
		console.log(input[0] + '=' + input[1] + '*' + input[2]);
	} else if (calculateDivision(input[1], input[2], input[0])) {
		console.log(input[0] + '=' + input[1] + '/' + input[2]);
	}
	process.exit();
});
