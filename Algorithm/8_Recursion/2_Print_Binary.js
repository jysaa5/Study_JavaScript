// 2. 이진수 출력 (재귀)

function solution(n) {
  let answer = "";

  function DFS(n) {
    if (n === 0) {
      return;
    } else {
      DFS(parseInt(n / 2));
      console.log(n % 2); // 스택 상댄부터 처리 된다.
      answer += String(n % 2);
    }
  }

  DFS(n);

  return answer;
}

console.log(solution(11));
