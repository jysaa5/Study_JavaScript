// 15649 N과 M
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let n = 1;
let m = 1;
let numbers = [];
let visited = [];
let selected = [];
let answer = '';

const dfs = (arr, depth) => {
    if (depth === m) {
        let result = [];
        for (let i of selected) {
            result.push(arr[i]);
        }
        for (let j of result) {
            answer += j + ' '; 
        }
        answer += "\n";
        return;
    }

    for (let k = 0; k < arr.length; k++){
        if (visited[k]) continue;
        selected.push(k);
        visited[k] = true;
        dfs(arr, depth + 1);
        selected.pop();
        visited[k] = false;
    }
}


rl.on('line', function (line) {
    input.push(line);
    n = Number(input[0].split(' ')[0]);
    m = Number(input[0].split(' ')[1]);
    numbers = Array.from({ length: n }, (_, i) => i + 1);
    visited = new Array(n).fill(false);

    rl.close();
}).on("close", function () {
    dfs(numbers, 0);
    console.log(answer);
    process.exit();
})