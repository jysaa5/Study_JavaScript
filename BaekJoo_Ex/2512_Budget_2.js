// 2512 예산

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// 지방의 수(N)
let n = Number(input[0].split(' ')[0]);
// 각 지방의 예산 요청
let arr = input[1].split(' ').map(Number);
// 총 예산(M)
let m = Number(input[2]);

// 이진 탐색을 위한 시작점(start)과 끝점(end) 설정
let start = 1;
let end = arr.reduce((a, b) => Math.max(a, b));

let result = 0;

// 이진 탐색 수행 (반복문)
while (start <= end) {
  // 현재의 중간점(상한액)
  let mid = parseInt((start + end) / 2);
  // 배정된 예산의 총액 계산
  let total = 0;

  // 각 지방에서 요청한 예산을 하나씩 확인하며
  for (let x of arr) {
    // 예산 배정 
    total += Math.min(mid, x); 
  }
  // 조건을 만족한다면, 상한액(최대화가 목표)을 증가시키기
  if (total <= m) {
    result = mid;
    start = mid + 1;
  } else {
    // 조건을 만족하지 못한다면, 상한액을 감소시키기
    end = mid - 1;
  }
}

console.log(result);