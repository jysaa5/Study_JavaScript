// 문제: 1389, 케빈 베이컨의 6단계 법칙

function getLeastKevinBacons(arr, n, root) {
	let matrix = arr.slice();
	let queue = [];
	let dis = Array.from(
		{
			length: n + 1,
		},
		() => 0,
	);
	let check = Array.from(
		{
			length: n + 1,
		},
		() => 0,
	);
	queue.push(root);
	check[root] = 1;
	while (queue.length) {
		let q = queue.shift();
		for (let i = 0; i < matrix.length; i++) {
			for (let j = 0; j < matrix[i].length; j++) {
				if (check[j] === 0 && matrix[q][j] === 1) {
					dis[j] = dis[q] + 1;
					check[j] = 1;
					queue.push(j);
				}
			}
		}
	}
	return dis;
}

// main 입출력
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
		let n = parseInt(input[0].split(' ')[0]);
		let m = parseInt(input[0].split(' ')[1]);
		let matrix = Array.from(
			{
				length: n + 1,
			},
			() => Array(n + 1).fill(0),
		);

		for (let i = 0; i < m; i++) {
			let list = input[i + 1].split(' ');
			for (let j = 0; j < m; j++) {
				matrix[parseInt(list[0])][parseInt(list[1])] = 1;
				matrix[parseInt(list[1])][parseInt(list[0])] = 1;
			}
		}

		let result = [];
		for (let k = 0; k < n + 1; k++) {
			result.push(
				getLeastKevinBacons(matrix, n, k).reduce((arr, cur) => {
					return (arr += cur);
				}, 0),
			);
		}
		result.shift();
		let min = Math.min(...result);
		let ret = result.indexOf(min);

		console.log(ret + 1);
		process.exit();
	});
