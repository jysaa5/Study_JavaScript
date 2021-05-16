// 문제: 11866, 요세푸스 문제 0
// 유형: Deque

// 사람 제거
function removePeople(n, k) {
    let people = []
    people = Array.from({
        length: n
    }, (v, i) => i)
    let ret = [];
    let cnt = 0;
    while (true) {
        if (people.length === 0) {
            break;
        }
        cnt++;
        if (cnt % k === 0) {
            ret.push(people.shift() + 1)
        } else {
            people.push(people.shift())
        }

    }
    return ret
}

// 출력
function printResult(answer) {
    let arr = answer.slice()
    let ret = arr.reduce((acc, curr, idx) => {
        if (idx === arr.length - 1) {
            acc += `${curr}` + '>'
        } else {
            acc += `${curr}` + ',' + ' '
        }
        return acc
    }, '<')
    return ret
}


// main 입출력
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let input = []
rl.on("line", function (line) {
    input = line.split(' ').map((i) => parseInt(i))
    rl.close();
}).on("close", function () {
    let n = input[0]
    let k = input[1]
    console.log(printResult(removePeople(n, k)))
    process.exit();
});