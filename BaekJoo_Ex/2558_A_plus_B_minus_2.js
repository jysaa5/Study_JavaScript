// 문제: 2558, A+B -2
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let input = []
rl.on("line", function (line) {
    input.push(parseInt(line))
}).on("close", function () {
    console.log(input[0] + input[1])
    process.exit();
});