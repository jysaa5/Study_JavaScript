// 섬나라 아일랜드 (DFS)
// 재귀가 5번 호출 된다. -> 재귀 호출 수를 구하면 된다.


function solution(board) {
    let answer = 0;
    let n = board.length;

    // 시계방향으로 잡음
    let dx = [-1, -1, 0, 1, 1, 1, 0, -1]
    let dy = [0, 1, 1, 1, 0, -1, -1, -1]

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 1) {
                // 발견함. 재귀함수 호출 
                answer++;
                DFS(i, j);
            }
        }
    }


    function DFS(x, y) {
        board[x][y] = 0;
        for (let k = 0; k < 8; k++) {
            let nx = x + dx[k];
            let ny = y + dy[k];
            if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 1) {
                DFS(nx, ny);
            }
        }
    }
    return answer;
}



let arr = [
    [1, 1, 0, 0, 0, 1, 0],
    [0, 1, 1, 0, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 1, 0, 0],
    [1, 0, 1, 0, 1, 0, 0]
];

console.log(solution(arr));