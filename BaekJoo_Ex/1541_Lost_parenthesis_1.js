// 1541 잃어버린 괄호

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let minusArr = [];
let plusArr = [];
let result = 0;


rl.on("line", function (line) {
  input.push(line);
  minusArr = input[0].split("-");
  minusArr.forEach((arr) => plusArr.push(arr.split('+').map(Number).reduce((pre, cur) => pre + cur, 0)));
  result = plusArr.reduce((prev, cur, index) => {
    if (index === 0) {
      return prev + cur
    } else {
      return prev - cur
    }
  }, 0);
  if (input.length === 1) {
    rl.close();
  }
}).on("close", function () {

console.log(result)
  process.exit();
});
