// 1654: 랜선 자르기

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// 가지고 있는 랜선의 개수(K)
let k = Number(input[0].split(' ')[0]);
// 필요한 랜선의 개수(N)
let n = Number(input[0].split(' ')[1]);

// 각 랜선의 길이
let arr = [];

for (let i = 1; i <= k; i++) {
	arr.push(Number(input[i]));
}

// 이진 탐색을 위한 시작점(start)과 끝점(end) 설정
let start = 1;
let end = arr.reduce((a, b) => Math.max(a, b));

let result = 0;
// 이진 탐색 수행 (반복문)
while (start <= end) {
	// 현재의 중간점 (길이)
	let mid = parseInt((start + end) / 2);
	// 가지고 있는 각 랜선을 잘라서 길이가 mid인 랜선을 몇 개 만들 수 있는지
	let total = 0;
	for (let x of arr) {
		total += parseInt(x / mid);
	}

	if (total < n) {
		// 만들 수 있는 랜선의 개수가 부족한 경우 길이 줄이기
		end = mid - 1;
	} else {
		// 만들 수 있는 랜선의 개수가 충분한 경우 길이 늘이기
		// 최대 길이를 찾아야 하므로, result에 기록
		result = mid;
		start = mid + 1;
	}
}

console.log(result);
