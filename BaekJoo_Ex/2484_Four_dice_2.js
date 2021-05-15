// 문제: 2484, 주사위 네 개
// 주사위 4개
// solution 2 
// 핵심: 같은 눈 체크는 정렬을 통해서 알 수 있다. Set과 정렬 사용


function getMoney(dices) {
    // 정렬
    const nums = new Set([])
    if (nums.size === 1) {
        return 50000 + (nums[0] * 5000)
    }

    if (nums.size === 2) {

    }
}



const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let input = []
rl.on("line", function (line) {
    input.push(line)
}).on("close", function () {
    let n = parseInt(input[0])
    let result = [];
    for (var i = 0; i < n; i++) {
        let nums = [0, 0, 0, 0, 0, 0, 0, 0];
        let dices = input[i + 1].split(" ");
        for (var d of dices) {
            nums[parseInt(d)]++;
        }
        let max = Math.max(...nums)

        // 4개 일때
        if (max === 4) {
            result.push(50000 + (nums.indexOf(max)) * 5000)
            // 3개 일때
        } else if (max === 3) {
            result.push(10000 + nums.indexOf(max) * 1000)
            // 2개 일때
        } else if (max === 2) {
            var arr = [];
            nums.reduce((acc, curr, i) => {
                if (curr === 2) {
                    arr.push(i)
                }
            }, 0)
            if (arr.length > 1) {
                result.push(2000 + parseInt(arr[0]) * 500 + parseInt(arr[1]) * 500)
            } else {
                result.push(1000 + parseInt(arr[0]) * 100)
            }
        } else {
            let i = nums.length - 1
            while (true) {
                if (nums.pop() === 1) {
                    result.push(i * 100)
                    break;
                }
                i--;
            }
        }
    }
    console.log(Math.max(...result))
    process.exit();
});