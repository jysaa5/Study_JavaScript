// 문제: 2525, 오븐 시계

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let input = []
rl.on("line", function (line) {
    input.push(line)
}).on("close", function () {
    var hour = parseInt(input[0].split(" ")[0])
    var minutes = parseInt(input[0].split(" ")[1])
    var time = parseInt(input[1]) // 분 단위
    minutes += time;
    hour += parseInt(minutes / 60)
    minutes = minutes % 60
    hour = hour % 24
    console.log(`${hour} ${minutes}`)
    process.exit();
});