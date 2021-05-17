// 송아지 찾기 (BFS)
// 레벨 1은 루트에서 한번만에 갈 수 있는 것을 뜻한다.
// 이미 큐에 들어갔던 것은 체크 배열을 만들어서 체크한다.
// 거리 배열을 1차원 배열로 만들어서 거리 저장 = 부모 노드의 거리 + 1


function solution(s, e) {
    let answer = 0;
    // 체크 배열 
    let ch = Array.from({
        length: 10001
    }, () => 0);

    // 거리
    let dis = Array.from({
        length: 10001
    }, () => 0);

    let queue = [];

    queue.push(s);
    ch[s] = 1;
    dis[s] = 0;

    while (queue.length) {
        let x = queue.shift();
        for (let nx of [x - 1, x + 1, x + 5]) {
            if (nx === e) return dis[x] + 1;
            if (nx > 0 && nx <= 10000 && ch[nx] === 0) {
                ch[nx] = 1;
                queue.push(nx);
                dis[nx] = dis[x] + 1;
            }
        }
    }
    return answer;
}

console.log(solution(8, 3));