// 2606: 바이러스

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];
let computer = 0;
let connected = 0;
let numbers = [];
let trees = [];

let visited = [];
let result = [];

const dfs = (graph, v, visited) => {
	visited[v] = true;
	result.push(v);
	for (let g of graph[v]) {
		if (!visited[g]) {
			dfs(graph, g, visited);
		}
	}
};

rl
	.on('line', function (line) {
		input.push(line);
		computer = Number(input[0]);
		connected = Number(input[1]);
		if (input.length > 0 && input.length === connected + 2) rl.close();
	})
	.on('close', function () {
		for (let i = 2; i < connected + 2; i++) {
			numbers.push(input[i].split(' ').map(Number));
		}

		for (let j = 0; j < computer + 1; j++) {
			if (j === 0) {
				trees.push([]);
			} else {
				trees.push(
					numbers.filter((n) => n.includes(j)).map(([a, b]) => (a === j ? b : a)),
				);
			}
		}
		visited = new Array(computer + 1).fill(false);

		dfs(trees, 1, visited);
		console.log(result.length - 1);
		process.exit();
	});
