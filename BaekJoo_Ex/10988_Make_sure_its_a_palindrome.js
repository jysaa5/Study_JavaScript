// 문제: 10988, 팰린드롬인지 확인하기

// 팰린드롬: 앞으로 읽을 때와 거꾸로 읽을 때 똑같은 단어

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let input = []
rl.on("line", function (line) {
    input.push(line)
    rl.close();
}).on("close", function () {
    let str1 = input[0]
    let str2 = str1.split("").reverse().join("")
    str1 === str2 ? console.log(1) : console.log(0)
    process.exit();
});