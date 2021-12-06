// 합이 같은 부분 집합 (이진 트리 DFS)

function solution(arr) {
    let answer = "NO";
    let total = arr.reduce((a, b) => a + b, 0)
    let n = arr.length
    let flag = 0;

    function DFS(L, sum) {
        if (flag) {
            return;
        }
        if (L === n) {
            if ((total - sum) === sum) {
                answer = 'YES'
                flag = 1;
            }
        } else {
            DFS(L + 1, sum + arr[L]); // 원소를 사용한다.
            DFS(L + 1, sum) // 원소를 사용하지 않는다.
        }
    }
    DFS(0, 0);
    return answer;
}

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr))