// 동전 교환 (DFS-Cut Edge Tech)

// m: 거슬러줄 금액
function solution(m, arr) {
    let answer = Number.MAX_SAFE_INTEGER;
    let n = arr.length;
    // L: 동전 개수
    function DFS(L, sum) {
        if (sum > m) {
            return
        }
        if (L >= answer) {
            return;
        }
        if (sum === m) {
            console.log(L, sum)
            answer = Math.min(answer, L)
        } else {
            for (let i = 0; i < n; i++) {
                DFS(L + 1, sum + arr[i])
            }
        }

    }
    DFS(0, 0);
    return answer;
}

let arr = [1, 2, 5]
console.log(solution(15, arr))