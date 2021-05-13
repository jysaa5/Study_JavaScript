// 문제: 10039, 평균 점수
// 수강생: 원섭, 세희, 상근, 숭, 강수
// 기말고시 점수 >= 40 -> 자신의 상적
// 기말고사 점수 < 40 ->  보충학습을 듣는 조건 -> 40

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let input = []
rl.on("line", function (line) {
    input.push(parseInt(line));
}).on("close", function () {
    let sum = 0;
    for (var score of input) {
        if (score < 40) {
            sum += 40
        } else {
            sum += score
        }
    }
    console.log(parseInt(sum / 5))
    process.exit();
});