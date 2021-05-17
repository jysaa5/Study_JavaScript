// 문제: 1260, DFS, BFS

// 정점 번호가 작은 것 부터 먼저 방문 (모든 점 방문이라 빽할 필요가 없다.)

// 재귀함수로 풀어야함. -> 알아서 stack이 된다.
let ch_dfs;
let ch_bfs;
let graph;
let dfs_path = []
let bfs_path = []

// 반복문과 큐로 풀어야 함.
function bfs(v, node) {

    let queue = [];

    queue.push(v);
    ch_bfs[v] = 1;
    bfs_path.push(v)

    while (queue.length) {
        let x = queue.shift();
        for (let i = 1; i <= node; i++) {
            if (graph[x][i] === 1 && ch_bfs[i] === 0) {
                ch_bfs[i] = 1;
                queue.push(i);
                bfs_path.push(i)
            }
        }
    }
}


// 양방향
function dfs(v, node) {
    ch_dfs[v] = 1
    dfs_path.push(v)
    for (let i = 1; i <= node; i++) {
        if (graph[v][i] === 1 && ch_dfs[i] === 0) {
            dfs(i, node);
        }

    }
}


// main 입출력
const readline = require("readline");
const {
    pathToFileURL
} = require("url");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let input = []
rl.on("line", function (line) {
    input.push(line)
}).on("close", function () {
    let node = parseInt(input[0].split(" ")[0]);
    let edge = parseInt(input[0].split(" ")[1]);
    let v = parseInt(input[0].split(" ")[2]);
    let arr = []
    for (let i = 0; i < edge; i++) {
        arr.push(input[i + 1].split(" ").map((i) => parseInt(i)))
    }

    arr.sort(function (a, b) {
        if (a[1] > b[1]) return 1
        if (a[1] === b[1]) return 0
        if (a[1] < b[1]) return -1
    })
    // 인접행렬 (2차원 배열)
    graph = Array.from(Array(node + 1), () => Array(node + 1).fill(0))
    // 체크 배열 (1차원 배열)
    ch_dfs = Array.from({
        length: node + 1
    }, () => 0);

    ch_bfs = Array.from({
        length: node + 1
    }, () => 0)

    for (let [a, b] of arr) {
        graph[a][b] = 1
        graph[b][a] = 1
    }

    // console.log(graph)

    dfs(v, node)
    bfs(v, node)
    let str1 = ''
    for (let dfs of dfs_path) {
        str1 += dfs + ' '
    }
    let str2 = ''
    for (let bfs of bfs_path) {
        str2 += bfs + ' '
    }
    console.log(str1)
    console.log(str2)
    process.exit();
});