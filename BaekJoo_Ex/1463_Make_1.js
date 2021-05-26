// 문제: 1463, 1로 만들기

// solution1
/*
점화식을 이용해푼다.
f(x) 는 다음과 같은 값에서 최솟값을 가진다.
1) f(x - 1) + 1
2) f(x / 2) + 1
3) f(x / 3) + 1
이 세 함수의 최소 값을 구해주면 된다.
*/
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
    let n = input[0];
    let arr = Array.from({
        length: n + 1
    }, () => 0);

    for (let i = 1; i < n + 1; i++) {
        if (i === 1) {
            arr[i] = 0;
            continue;
        }
        arr[i] = arr[i - 1] + 1
        if (i % 3 === 0 && arr[parseInt(i / 3)] + 1 < arr[i]) {
            arr[i] = arr[parseInt(i / 3)] + 1
        }
        if (i % 2 === 0 && arr[parseInt(i / 2)] + 1 < arr[i]) {
            arr[i] = arr[parseInt(i / 2)] + 1
        }
    }
    //console.log(arr)
    console.log(arr[n])
    process.exit();
});