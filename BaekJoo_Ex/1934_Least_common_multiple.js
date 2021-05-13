// 문제: 1934, 최소공배수
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let input = []
rl.on("line", function (line) {
    input.push(line)
}).on("close", function () {
    let t = parseInt(input[0]);
    for (var i = 0; i < t; i++) {
        let a = parseInt(input[i + 1].split(" ")[0])
        let b = parseInt(input[i + 1].split(" ")[1])
        let min = Math.min(a, b)
        let max = Math.max(a, b)
        let m = max;
        let result = 0;
        for (var j = 1; j < (min + 1); j++) {
            max = m * j
            if (max % min === 0) {
                result = max;
                break;
            }
        }

        console.log(result)
    }
    process.exit();
});