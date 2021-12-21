// 5. 최대 점수 구하기 (냅색을 이용한 조합)
// m: 전체 시간
function solution(m, arr) {
  let answer = 0;
  let dy = Array.from({ length: m + 1 }, () => 0);
  for (let i = 0; i < arr.length; i++) {
    let ps = arr[i][0]; // 문제 점수
    let pt = arr[i][1]; // 문제 푸는 데 걸리는 시간
    for (let j = m; j >= pt; j--) {
      dy[j] = Math.max(dy[j], dy[j - pt] + ps);
    }
  }
  answer = dy[m];
  return answer;
}

// 문제 점수, 문 푸는데 걸리는 시간
let arr = [
  [10, 5],
  [25, 12],
  [15, 8],
  [6, 3],
  [7, 4],
];

console.log(solution(20, arr));
