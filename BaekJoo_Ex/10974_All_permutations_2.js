// 10974: 모든 순열

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// 1부터 N까지 자연수 중에서 중복 없이 N개를 고를 수열
let n = Number(input[0]);
// 순열을 계산하고자 하는 원소(element)가 담긴 배열
let arr = [];

for (let i = 1; i <= n; i++) {
	arr.push(i);
}

// 각 원소 인덱스(index)별 방문 여부
let visited = new Array(n).fill(false);
// 현재 순열에 포함된 원소(element)
let selected = [];

let answer = '';

const dfs = (arr, depth) => {
	// 모든 순열을 확인하는 부분
	if (depth === n) {
		// 순열(permutation) 결과 저장 테이블
		let result = [];
		for (let i of selected) {
			result.push(arr[i]);
		}
		// 계산된 순열을 실질적으로 처리하는 부분
		for (let x of result) {
			answer += x + ' ';
		}
		answer += '\n';
		return;
	}
	// 하나씩 원소 인덱스(index)를 확인하며
	for (let i = 0; i < arr.length; i++) {
		// [중복을 허용하지 않으므로] 이미 처리 된 원소라면 무시
		if (visited[i]) continue;
		// 현재 원소 선택
		selected.push(i);
		// 현재 원소 방문 처리
		visited[i] = true;
		// 재귀 함수 호출
		dfs(arr, depth + 1);
		// 현재 원소 선택 취소
		selected.pop();
		// 현재 원소 방문 처리 취소
		visited[i] = false;
	}
};

dfs(arr, 0);
console.log(answer);
