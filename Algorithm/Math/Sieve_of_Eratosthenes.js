// 소수 판별: 에라토스테네스의 체

function era(n) {
    ck = [];
    p = [];
    for (var i = 0; i < n + 1; i++) {
        ck.push(false)
    }
    for (var j = 2; j < n + 1; j++) {
        if (ck[j] === true) {
            continue;
        }
        p.push(j)
        for (var k = (j * j); k < (n + 1); k = k + j) {
            ck[k] = true
        }
    }
    return {
        ck,
        p
    }
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
    let number = input[0]
    console.log(era(number))
    process.exit();
});