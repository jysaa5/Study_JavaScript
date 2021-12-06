// 수열 추측하기 (순열, 이항계수 응용)
// 파스칼 삼각형 -> 조합
// 배열에 조합 수를 저장한다.
// 순열이 들어온 것과 조합의 배열을 가지고 곱한 값을 구해서 16이 되는 지 본다.
// 순열은 체크 배열이 필요하다.


function solution(n, f) {
    let answer;
    let dy = Array.from(Array(11), () => Array(11).fill(0))
    let ch = Array.from({
        length: n + 1
    }, () => 0)
    let p = Array.from({
        length: n
    }, () => 0) // 순열 저장
    let b = Array.from({
        length: n
    }, () => 0) // 조합 저장

    let flag = 0

    function combi(n, r) {
        if (dy[n][r] > 0) {
            return dy[n][r];
        }

        if (n === r || r === 0) {
            return 1;
        } else {
            dy[n][r] = combi(n - 1, r - 1) + combi(n - 1, r);
        }
    }

    function DFS(L, sum) {
        if (flag) {
            return
        }
        if (L === n) {
            console.log(p)
        }
        if (L === n && sum === f) {
            answer = p.slice();
            flag = 1
        } else {
            for (let i = 1; i <= n; i++) {
                if (ch[i] === 0) {
                    ch[i] = 1;
                    p[L] = i; // push를 해줄 경우 아래에 체크 풀고 pop을 해줘야함.
                    DFS(L + 1, sum + (b[L] * p[L]));
                    ch[i] = 0
                }
            }
        }

    }
    for (let i = 0; i < n; i++) {
        b[i] = combi(n - 1, i);
    }
    DFS(0, 0);
    return answer;
}

console.log(solution(4, 16))