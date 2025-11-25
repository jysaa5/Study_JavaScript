// 1012: 유기농 배추

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const input = [];

rl.on('line', (line) => {
	input.push(line);
}).on('close', () => {
	let t = Number(input[0]);
	let line = 1;

	const dx = [1, -1, 0, 0];
	const dy = [0, 0, 1, -1];

	const answers = [];

	while (t--) {
		const [M, N, K] = input[line++].split(' ').map(Number);

		const board = Array.from({ length: N }, () => Array(M).fill(0));

		for (let i = 0; i < K; i++) {
			const [x, y] = input[line++].split(' ').map(Number);
			board[y][x] = 1;
		}

		const dfs = (sx, sy) => {
			const stack = [[sx, sy]];
			board[sy][sx] = 0;

			while (stack.length) {
				const [x, y] = stack.pop();

				for (let dir = 0; dir < 4; dir++) {
					const nx = x + dx[dir];
					const ny = y + dy[dir];

					if (nx < 0 || nx >= M || ny < 0 || ny >= N) continue;
					if (board[ny][nx] !== 1) continue;

					board[ny][nx] = 0;
					stack.push([nx, ny]);
				}
			}
		};

		let wormCount = 0;

		for (let y = 0; y < N; y++) {
			for (let x = 0; x < M; x++) {
				if (board[y][x] === 1) {
					dfs(x, y);
					wormCount++;
				}
			}
		}

		answers.push(String(wormCount));
	}

	console.log(answers.join('\n'));
});