// 문제: 10162, 전자레인지

// A = 5분, B = 1분, C = 10초
// T초
// 최소 버튼 조작

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
    var sec = input[0]
    var a = 300
    var b = 60
    var c = 10
    var nums = {
        'a': 0,
        'b': 0,
        'c': 0
    }
    while (true) {
        if (input[0] < c || (0 < sec && sec < c)) {
            console.log(-1)
            break;
        }

        if (sec === 0) {
            console.log(`${nums['a']} ${nums['b']} ${nums['c']}`)
            break;
        }

        if (sec >= a) {
            sec -= a
            nums['a']++;
        } else if (sec >= b) {
            sec -= b
            nums['b']++;
        } else if (sec >= c) {
            sec -= c
            nums['c']++;
        }
    }

    process.exit();
});