// 문제: 2935, 소음
// 문제 원인: 일반적인 사칙연산을 하면 범위가 커져서 지수 표현이 된다.

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
		var a = input[0];
		var op = input[1];
		var b = input[2];
		if (op == '*') {
			var len = String(a).length + String(b).length - 2;
			var arr1 = ['1'];
			var result1 = arr1.reduce((acc, curr) => {
				var num = 0;
				acc += curr;
				while (true) {
					if (num == len) {
						break;
					}
					num++;
					acc += '0';
				}
				return acc;
			}, '');
			console.log(result1);
		} else if (op == '+') {
			if (String(a).length === String(b).length) {
				var arr2 = ['2'];
				var result2 = arr2.reduce((acc, curr) => {
					var num = 0;
					acc += curr;
					while (true) {
						if (num == String(a).length - 1) {
							break;
						}
						num++;
						acc += '0';
					}
					return acc;
				}, '');
				console.log(result2);
			} else {
				var aArray = a.split('');
				var bArray = b.split('');
				if (String(a).length > String(b).length) {
					aArray[String(a).length - String(b).length] = 1;
					console.log(aArray.join(''));
				} else {
					bArray[String(b).length - String(a).length] = 1;
					console.log(bArray.join(''));
				}
			}
		}
		process.exit();
	});
