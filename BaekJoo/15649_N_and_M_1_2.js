// 15649 N과 M (1)
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// 1부터 N까지 자연수 중에서 중복 없이 M개를 고른 수열
let [n, m] = input[0].split(' ').map(Number);
// 순열을 계산하고자 하는 원소(element)가 담긴 배열
let numbers = [];

for (let i = 1; i <= n; i++) {
	numbers.push(i);
}

// 각 원소 인덱스(index)별 방문 여부
let visited = new Array(n).fill(false);
// 현재 순열에 포함된 원소(element)
let selected = [];
let answer = '';

const dfs = (arr, depth) => {
	// 모든 순열을 확인하는 부분
	if (depth === m) {
		// 순열(permutation) 결과 저장 테이블
		let result = [];
		for (let s of selected) {
			result.push(arr[s]);
		}
		// 계산된 순열을 실질적으로 처리하는 부분
		for (let r of result) {
			answer += r + ' ';
		}
		answer += '\n';
		return;
	}

	for (let i = 0; i < arr.length; i++) {
		if (visited[i]) continue;
		selected.push(i);
		visited[i] = true;
		dfs(arr, depth + 1);
		selected.pop();
		visited[i] = false;
	}
};

dfs(numbers, 0);
console.log(answer);
