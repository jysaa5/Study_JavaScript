'use strict';
// 문제: 2178, 미로 탐색

let graph;
let check;
let cnt = 0;
let min = Number.MAX_SAFE_INTEGER;

function bfs(x, y) {
	let reachX = graph.length; //4
	let reachY = graph[0].length; //6
	//console.log(reachX, reachY)
	//console.log(reachX, reachY)
	let way = [
		[-1, 0],
		[1, 0],
		[0, -1],
		[0, 1],
	];
	const queue = [];
	queue.push([x, y]);
	check[x][y] = 1;

	while (queue.length) {
		const [x1, y1] = queue.shift();
		//console.log(x1, y1)
		for (let i = 0; i < 4; i++) {
			const x2 = x1 + way[i][0];
			const y2 = y1 + way[i][1];
			if (x2 >= 0 && x2 < reachX && y2 >= 0 && y2 < reachY) {
				if (check[x2][y2] === 0 && graph[x2][y2] === 1) {
					check[x2][y2] = check[x1][y1] + 1;
					queue.push([x2, y2]);
				}
			}
		}
	}
}

// main 입출력
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let input = [];
rl.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	let n = parseInt(input[0].split(' ')[0]);
	let m = parseInt(input[0].split(' ')[1]);
	graph = Array.from(Array(n), () => Array(m).fill(0));
	check = Array.from(Array(n), () => Array(m).fill(0));
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < m; j++) {
			graph[i][j] = input[i + 1].split('').map((m) => parseInt(m))[j];
		}
	}
	bfs(0, 0);
	//console.log(check)
	console.log(check[n - 1][m - 1]);
	process.exit();
});
