// 조합수
// nCr 에서 r이 0이거나 ,n과 r이 같으면 return 1
// nC0 = 1, nCn = 1
// 메모이제이션: 2차원 배열에 값을 미리 저장한다.
function solution(n, r) {
    let answer;
    let dy = Array.from(Array(35), () => Array(35).fill(0))

    function DFS(n, r) {
        if (dy[n][r] > 0) {
            return dy[n][r];
        }
        if (n === r || r === 0) {
            return 1;
        } else {
            return dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r);
        }
    }
    answer = DFS(n, r);
    return answer;
}

console.log(solution(33, 19))