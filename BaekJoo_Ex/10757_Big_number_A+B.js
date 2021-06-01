// 문제: 10757, 큰 수 A+B

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let input = []
rl.on("line", function (line) {
    input.push(line);
    rl.close();
}).on("close", function () {
    let a = BigInt(input[0].split(" ")[0]);
    let b = BigInt(input[0].split(" ")[1]);
    console.log(String(a + b));
    process.exit();
});