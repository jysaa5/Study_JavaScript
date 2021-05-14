// 문제: 5717, 상근이의 친구들

// M, F

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let input = []
rl.on("line", function (line) {
    input.push(line)
}).on("close", function () {
    for (var i = 0; i < input.length; i++) {
        var sum = parseInt(input[i].split(" ")[0]) + parseInt(input[i].split(" ")[1])
        sum !== 0 ? console.log(sum) : null
    }
    process.exit();
});