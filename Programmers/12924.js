// 숫자의 표현

function solution(n) {
  let answer = 0;

  for (let i = 0; i < n; i++) {
    let left = i + 1;
    let result = 0;

    while (result < n) {
      result += left;
      left++;
    }

      if (result === n) {
          answer++;
      }
  }

  return answer;
}