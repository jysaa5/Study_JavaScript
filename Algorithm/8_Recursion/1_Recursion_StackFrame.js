// 1. 재귀함수
// L: level
function solution(n) {
  function DFS(L) {
    if (L === 0) {
      return;
    } else {
      DFS(L - 1);
      console.log(L);
    }
  }
  DFS(n);
}

// DFS(3) -> DFS(2) -> DFS(1) -> DFS(0)
solution(3);
