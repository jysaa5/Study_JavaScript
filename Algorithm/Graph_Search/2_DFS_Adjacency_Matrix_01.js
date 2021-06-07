// 경로 탐색 (DFS-인접행렬: 노드 개수가 적을 때)

function solution(n, arr) {
    let answer = 0; // 경로 개수

    // 2차원 배열
    let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0))
    // 체크 배열 (1차 배열)
    let ch = Array.from({
        length: n + 1
    }, () => 0)

    // 경로
    path = [];

    // 인접 행렬 만들기
    for (let [a, b] of arr) {
        graph[a][b] = 1 // 가중치면 1이 아니고 다르 값이 들어온다.
        // graph[b][a] = 1 -> 무방향 
    }

    function DFS(v) {
        if (v === n) {
            answer++;
            console.log(path)
        } else {
            for (let i = 1; i <= n; i++) {
                // 갈 수 있는지 확인
                if (graph[v][i] === 1 && ch[i] === 0) {
                    ch[i] = 1;
                    path.push(i);
                    DFS(i); // v -> i로 넘어간거임
                    // 뒤로 다시 돌아가는 부분
                    ch[i] = 0;
                    path.pop();
                }
            }
        }
    }

    // 방문 체크하고 넘어가야함.
    ch[1] = 1
    path.push(1)
    DFS(1);
    return answer;
}


// main
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

console.log(solution(5, arr))