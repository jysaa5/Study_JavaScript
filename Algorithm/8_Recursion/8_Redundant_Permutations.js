// 중복 순열
function solution(n, m) {
  let answer = [];
  let tmp = Array.from(
    {
      length: m,
    },
    () => 0
  );

  console.log("tmp >>>>", tmp);

  function DFS(L) {
    if (L === m) {
      answer.push(tmp.slice()); // 배열 복사가 필요함.
    } else {
      for (let i = 1; i <= n; i++) {
        tmp[L] = i;
        DFS(L + 1);
      }
    }
  }
  DFS(0);
  return answer;
}

console.log(solution(3, 2));
