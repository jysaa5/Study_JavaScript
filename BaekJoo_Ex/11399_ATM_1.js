// 문제: 11399 ATM

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let n = 0;
let arr = [];


rl.on("line", function (line) {
  input.push(line);
  n = Number(input[0]); // 사람 수
  if (input.length === 2) {
    rl.close();
  }
}).on("close", function () {
  // 각 사람이 돈을 인출하는데 걸리는 시간
  arr = input[1]
    .split(" ")
    .map((i) => Number(i))
    .sort((a, b) => a - b);

    let cnt = 0;
    let times = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
        times[i] = times[i - 1] + arr[i];
    }
    cnt = times.reduce((prev, cur) => prev + cur, 0);
    console.log(cnt)

  process.exit();
});
