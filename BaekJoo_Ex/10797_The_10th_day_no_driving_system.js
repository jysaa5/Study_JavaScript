// 문제: 10797, 10부제

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let input = []
rl.on("line", function (line) {
    input.push(line);
}).on("close", function () {
    let num = parseInt(input[0]);
    let cars = input[1].split(" ").map((i) => parseInt(i));
    let result = [];
    for (let c of cars) {
        if (c === num) {
            result.push(c);
        }
    }
    console.log(result.length);
    process.exit();
});