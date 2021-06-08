'use strict';
// 문제: 경로 탐색 (인접 행렬)

// 방문했는지 체크하는 배열이 필요하다. -> check



function solution(n, arr) {
    let answer = 0;
    let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
    let check = Array.from({
        length: n + 1
    }, () => 0);

    for (let nums of arr) {
        graph[nums[0]][nums[1]] = 1;
    }

    function dfs(v) {
        if (n === v) {
            answer++;
        } else {
            for (let i = 1; i <= n; i++) {
                if (graph[v][i] === 1 && check[i] === 0) {
                    check[i] = 1;
                    dfs(i);
                    check[i] = 0;
                }
            }
        }

    }

    check[1] = 1;
    dfs(1);

    return answer;
}
let arr = [
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 1],
    [2, 3],
    [2, 5],
    [3, 4],
    [4, 2],
    [4, 5]
];

console.log(solution(5, arr));