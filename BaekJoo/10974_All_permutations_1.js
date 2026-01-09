// 10974: 모든 순열

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];
let n = 1;
let numbers = [];
let visited = [];
let selected = [];
let answer = '';

const dfs = (arr, depth) => {
	if (depth === n) {
		let result = [];
		for (let s of selected) {
			result.push(arr[s]);
		}
		for (let r of result) {
			answer += r + ' ';
		}
		answer += '\n';
		return;
	}

	for (let i = 0; i < n; i++) {
		if (visited[i]) continue;
		selected.push(i);
		visited[i] = true;
		dfs(arr, depth + 1);
		selected.pop();
		visited[i] = false;
	}
};

rl
	.on('line', function (line) {
		input.push(line);
		n = Number(input[0]);
		numbers = Array.from({ length: n }, (_, i) => i + 1);
		visited = Array.from({ length: n }, (_) => false);
		rl.close();
	})
	.on('close', function () {
		dfs(numbers, 0);
		console.log(answer);
		process.exit();
	});
