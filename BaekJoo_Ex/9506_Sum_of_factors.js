// 문제: 9506, 약수들의 합

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let input = []
rl.on("line", function (line) {
    input.push(parseInt(line))
}).on("close", function () {
    for (var i = 0; i < input.length; i++) {
        if (input[i] === -1) {
            break;
        }
        let nums = [];
        let n = input[i]
        for (var j = 1; j < input[i]; j++) {
            if (n % j === 0) {
                nums.push(j)
            }
        }
        var result = nums.reduce((acc, curr) => {
            return acc + curr
        }, 0)
        if (result === input[i]) {
            console.log(`${input[i]} = ${nums.join(" + ")}`)
        } else {
            console.log(`${input[i]} is NOT perfect.`)
        }
    }
    process.exit();
});