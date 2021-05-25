// 송아지 찾기 (BFS)
// 레벨 1은 루트에서 한번만에 갈 수 있는 것을 뜻한다.
// 이미 큐에 들어갔던 것은 체크 배열을 만들어서 체크한다.
// Level를 배열 말고 방법으로 구한다.

// s: 현수의 위치, e: 송아지의 위치
function solution(s, e) {
    let answer = 0;
    let ch = Array.from({
        length: 10001
    }, () => 0);

    let queue = [];

    queue.push(s);
    ch[s] = 1;
    let L = 0;

    while (queue.length) {
        let len = queue.length;

        for (let i = 0; i < len; i++) {
            let x = queue.shift();
            for (let nx of [x - 1, x + 1, x + 5]) {
                if (nx === e) return L + 1;
                if (nx > 0 && nx <= 10000 && ch[nx] === 0) {
                    ch[nx] = 1;
                    queue.push(nx);
                }
            }
        }
        L++;
    }
    return answer;
}

console.log(solution(5, 14));