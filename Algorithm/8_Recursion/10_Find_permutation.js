// 순열 구하기
// 체크 배열이 필요하다. -> 중복 순열이 아니기 때문에.
// m개를 뽑는다.
function solution(m, arr) {
  let answer = [];
  n = arr.length;
  let ch = Array.from(
    {
      length: n,
    },
    () => 0
  );
  let tmp = Array.from(
    {
      length: m,
    },
    () => 0
  );

  function DFS(L) {
    if (L === m) {
      answer.push(tmp.slice());
    } else {
      for (let i = 0; i < n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          tmp[L] = arr[i];
          DFS(L + 1);
          ch[i] = 0;
        }
      }
    }
  }
  DFS(0);
  return answer;
}

let arr = [3, 6, 9, 5];
console.log(solution(2, arr));
