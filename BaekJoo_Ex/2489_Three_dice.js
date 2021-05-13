// 문제: 2480, 주사위 세개

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let input = []
rl.on("line", function (line) {
    input = line.split(' ').map((i) => parseInt(i))
    rl.close();
}).on("close", function () {
    if (input[0] === input[1] && input[0] === input[2]) {
        console.log(10000 + (input[0] * 1000))
    } else if (input[0] === input[1] || input[0] === input[2]) {
        console.log(1000 + (input[0] * 100))
    } else if (input[1] === input[2]) {
        console.log(1000 + (input[1] * 100))
    } else {
        console.log(Math.max(...input) * 100)
    }
    process.exit();
});