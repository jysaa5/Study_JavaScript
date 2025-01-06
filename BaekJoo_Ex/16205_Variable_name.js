// 문제: 16205, 변수명
// 1: 카멜 표기법, 2: 스네이크 표기법, 3: 파스칼 표기법

function convertBig(str) {
	let str1 = str.split('');
	str1[0] = str1[0].toUpperCase();
	return str1.join('');
}

function convertSmall(str) {
	let str1 = str.split('');
	str1[0] = str1[0].toLowerCase();
	return str1.join('');
}

function sliceString(idxs, str) {
	let result = [];
	var start = 0;

	for (var idx of idxs) {
		if (idxs[idxs.length - 1] === idx) {
			result.push(str.slice(start, idx));
			result.push(str.slice(idx));
		} else {
			result.push(str.slice(start, idx));
		}
		start = idx;
	}
	return result;
}

function convertName(num, name) {
	// 카멜 표기법
	if (num === 1) {
		//1
		console.log(name);
		//2
		const regex = /[A-Z]/;
		let str1 = name.split('');
		let idxs = [];
		for (var i = 0; i < str1.length; i++) {
			if (str1[i].match(regex)) {
				idxs.push(i);
			}
		}
		if (idxs.length > 0) {
			let str2 = sliceString(idxs, name);
			for (var j = 0; j < str2.length; j++) {
				str2[j] = convertSmall(str2[j]);
			}
			console.log(str2.join('_'));
		} else {
			console.log(name);
		}

		//3
		console.log(convertBig(name));
	} else if (num === 2) {
		// 스네이크 표기법

		// 1
		let str1 = name.split('_');
		let result1 = str1[0];
		for (var j = 1; j < str1.length; j++) {
			result1 += convertBig(str1[j]);
		}
		console.log(result1);

		// 2
		console.log(name);

		// 3
		let str3 = name.split('_');
		let result2 = '';
		for (var i = 0; i < str3.length; i++) {
			result2 += convertBig(str3[i]);
		}
		console.log(result2);
	} else {
		// 파스칼 표기법
		// 1
		console.log(convertSmall(name));

		// 2
		let str2 = name.split('');
		str2[0] = str2[0].toLowerCase();
		const regex = /[A-Z]/;
		let str3 = str2.join('').split('');
		let idxs = [];
		for (var i = 0; i < str3.length; i++) {
			if (str3[i].match(regex)) {
				idxs.push(i);
			}
		}
		if (idxs.length > 0) {
			let str4 = sliceString(idxs, name);
			for (var j = 0; j < str4.length; j++) {
				str4[j] = convertSmall(str4[j]);
			}
			console.log(str4.join('_'));
		} else {
			console.log(convertSmall(name));
		}

		// 3
		console.log(name);
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
		rl.close();
	})
	.on('close', function () {
		let num = parseInt(input[0].split(' ')[0]);
		let name = input[0].split(' ')[1];
		convertName(num, name);
		process.exit();
	});
