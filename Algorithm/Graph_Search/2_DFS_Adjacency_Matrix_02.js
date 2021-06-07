// 문제: 경로 탐색 (인접 행렬)

// 방문했는지 체크하는 배열이 필요하다. 
function solution(n, arr) {
    let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
    let check = Array.from({
        length: n + 1
    }, () => 0);



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