// 문제: 2476, 주사위 게임
// N: 참여한 사람 수

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let input = []
rl.on("line", function (line) {
    input.push(line)
}).on("close", function () {
    let result = [];
    for (var i = 0; i < parseInt(input[0]); i++) {
        let nums = input[i + 1].split(" ").map((i) => parseInt(i))
        if (nums[0] === nums[1] && nums[0] === nums[1] && nums[1] === nums[2]) {
            result.push(10000 + (nums[0] * 1000))
        } else if (nums[0] === nums[1] || nums[0] === nums[2]) {
            result.push(1000 + (nums[0] * 100))
        } else if (nums[1] === nums[2]) {
            result.push(1000 + (nums[1] * 100))
        } else {
            result.push(Math.max(...nums) * 100)
        }
    }
    console.log(Math.max(...result))
    process.exit();
});