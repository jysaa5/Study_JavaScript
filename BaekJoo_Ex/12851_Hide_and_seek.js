//  문제: 12851, 숨박꼭질2

// 수빈: N, 동생: K, 
// 걷기: x+1, x-1, 순간이동: 2*x
// 가장 빠른 시간이 몇 초 후


function bfs(n) {
    let start = n;
    // 방문한 노드 저장
    let checked = Array.from({
        length: 100001
    }, () => 0)
    // 거리 저장  === 시간 저장
    let time = Array.from({
        length: 100001
    }, () => 0)
    // 큐
    let queue = []

    // 루트 노드 방문 체크
    checked[start] = 1
    // 큐에 루트 노드 저장
    queue.push(start)
    // 루트에서부터 거리 저장 (루트는 거리 0)
    time[start] = 0;

    while (queue.length) {
        let node = queue.shift()

        for (let nv of [node - 1, node + 1, node * 2]) {
            if (0 <= nv && nv < 100001) {
                if (checked[nv] === 0) {
                    checked[nv] = checked[node]
                    time[nv] = time[node] + 1
                    queue.push(nv)
                } else if (time[nv] === time[node] + 1) {
                    checked[nv] += checked[node]
                }
            }
        }
    }
    return {
        time: time,
        checked: checked
    }
}


// main 입출력
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let input = []
rl.on("line", function (line) {
    input.push(line)
    rl.close();
}).on("close", function () {
    let n = parseInt(input[0].split(" ")[0])
    let k = parseInt(input[0].split(" ")[1])
    console.log(bfs(n, k).time[k])
    console.log(bfs(n, k).checked[k])
    process.exit();
});