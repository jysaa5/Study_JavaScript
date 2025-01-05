// 2805 나무 자르기

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let tree = 0;
let nums = [];
let height = 0;

let start = 0;
let mid = 0;
let end = 0;
let result = 0;

rl.on("line", function (line) {
  input.push(line);
  if (input.length === 2) {
    rl.close();
  }
}).on("close", function () {
    tree = input[0].split(' ').map(Number)[0];
    height = input[0].split(" ").map(Number)[1];
  nums = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  start = 1;
    end = nums[tree - 1];

  while (start <= end) {
      mid = Math.floor((start + end) / 2);
    let count = 0;
    for (let b of nums) {
      count += (mid >= b) ? 0 : b - mid;
    }

      if (count >= height) {
         result = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  console.log(result);

  process.exit();
});
