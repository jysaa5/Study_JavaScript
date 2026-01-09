// 9663 N-Queen
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];
let n = 1;
let queen = [];
let cnt = 0;

const possible = (x, y) => {
	for (let [a, b] of queen) {
		if (a === x || b === y) return false;
		if (Math.abs(a - x) === Math.abs(b - y)) return false;
	}
	return true;
};

const dfs = (row) => {
	if (row === n) cnt += 1;
	for (let i = 0; i < n; i++) {
		if (!possible(row, i)) continue;
		queen.push([row, i]);
		dfs(row + 1);
		queen.pop();
	}
};

rl.on('line', function (line) {
	input.push(line);
	n = Number(input[0]);
	rl.close();
}).on('close', function () {
	dfs(0);
	console.log(cnt);
	process.exit();
});
