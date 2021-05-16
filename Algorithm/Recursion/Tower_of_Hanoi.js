// 하노이 탑
// st: 시작점, ed: 도착점, sz: 원판 개수
// 6-st-ed: 중간지점
function hanoi(st, ed, sz) {
    if (sz === 1) {
        return console.log(st, ed)
    }
    hanoi(st, 6 - st - ed, sz - 1)
    console.log(st, ed)
    hanoi(6 - st - ed, ed, sz - 1)
}


// main 입출력
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let input = []
rl.on("line", function (line) {
    input.push(parseInt(line))
    rl.close();
}).on("close", function () {
    console.log((2 ** input[0]) - 1)
    if (input[0] <= 20) {
        hanoi(1, 3, input[0])
    }
    process.exit();
});