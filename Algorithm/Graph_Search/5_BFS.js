// BFS (이진트리 너비 우선탐색)

function solution() {
    let answer = '';
    let queue = [];
    queue.push(1)

    while (queue.length) {
        let v = queue.shift();
        answer += v + " ";
        for (let nv of [v * 2, v * 2 + 1]) {
            if (nv > 7) {
                continue;
            }
            queue.push(nv);
        }
    }

    return answer;
}

console.log(solution())