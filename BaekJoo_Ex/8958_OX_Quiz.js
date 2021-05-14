// 문제: 8958, OX퀴즈
// O: 맞은 문제, X: 틀린 문제
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let input = []
rl.on("line", function (line) {
    input.push(line)
}).on("close", function () {
    var num = parseInt(input[0])
    for (var i = 0; i < num; i++) {
        let o = 0;
        let sum = 0;
        for (var j = 0; j < input[i + 1].length; j++) {
            input[i + 1][j] === 'O' ? o++ : o = 0
            sum += o;
        }
        console.log(sum)
    }
    process.exit();
});