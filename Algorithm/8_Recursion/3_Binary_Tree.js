// 이진트리순회 (DFS: 깊이우선탐색)

function solution(v) {
    let answer = '';

    function DFS(v) {

        if (v > 7) {
            return;
        } else {
            // console.log(v); // 전위 순회
            DFS(v * 2)
            console.log('노드: ', v); // 중위 순회
            DFS(v * 2 + 1)
            // console.log(v); // 후위 순회
        }
    }

    DFS(v);
    return answer;
}

console.log(solution(1))