// 2805 나무 자르기

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// 나무의 수 (N)
let n = Number(input[0].split(' ')[0]);
// 가져갈 나무의 길이 (M)
let m = Number(input[0].split(' ')[1]);
// 각 나무의 높이
let arr = input[1].split(' ').map(Number);

// 이진 탐색을 위한 시작점(start)과 끝점(end) 설정
let start = 0;
let end = arr.reduce((a, b) => Math.max(a, b));

let result = 0;
// 이진 탐색 수행 (반복문)
while (start <= end) {
	// 현재의 중간점(높이)
	let mid = parseInt((start + end) / 2);
	// mid로 잘랐을 때 얻을  수 있는 나무의 양 계산
	let total = 0;
	for (let x of arr) {
		if (x > mid) {
			total += x - mid;
		}
	}

	// 나무의 양이 부족한 경우 더 많이 자르기 (높이 줄이기)
	if (total < m) {
		end = mid - 1;
	} else {
		// 나무의 양이 충분한 경우 덜 자르기(높이 키우기)
		// 최대한 덜 잘랐을 대가 정답이므로, result에 기록
		result = mid;
		start = mid + 1;
	}
}

console.log(result);
