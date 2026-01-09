// 7490: 0 만들기

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];
let testCase = 0;
let n = 0;
let arr = [];

const dfs = (result, depth) => {
	// 현재 순열(permutation) 처리 (중복 순열)
	if (depth === n - 1) {
		// 현재 수식 문자열
		let str = '';
		for (let i = 0; i < n - 1; i++) {
			str += arr[i] + result[i];
		}
		str += arr[n - 1] + '';
		// 공백을 제거한 뒤에 수식 계산
		let current = eval(str.split(' ').join(''));
		// 수식의 결과가 0이 되는 경우 출력
		if (current === 0) {
			console.log(str);
		}
		return;
	}

	// 더하기(+), 빼기(-), 혹은 이어 붙이기( )
	for (let x of [' ', '+', '-']) {
		result.push(x);
		// 재귀 함수 호출
		dfs(result, depth + 1);
		result.pop();
	}
};

rl
	.on('line', function (line) {
		input.push(line);
		testCase = Number(input[0]);
		if (input.length === testCase + 1) {
			rl.close();
		}
	})
	.on('close', function () {
		// 각 테스트 케이스 처리
		for (let tc = 1; tc <= testCase; tc++) {
			// 자연수(N) 입력받기
			n = Number(input[tc]);
			arr = [];
			// 1부터 N까지의 수 삽입
			for (let i = 1; i <= n; i++) {
				arr.push(i);
			}
			dfs([], 0);
			console.log();
		}
		process.exit();
	});
