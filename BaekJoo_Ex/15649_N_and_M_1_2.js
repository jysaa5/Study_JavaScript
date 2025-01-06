// 15649 N과 M (1)
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// 1부터 N까지 자연수 중에서 중복 없이 M개를 고른 수열
let [n, m] = input[0].split(" ").map(Number);
// 순열을 계산하고자 하는 원소(element)가 담긴 배열
let arr = [];

for(let i = 1; i <= n; i++){
  arr.push(i);
}

// 각 원소 인덱스(index)별 방문 여부
let visited = new Array(n).fill(false);
// 현재 순열에 포함된 원소(element)
let selected = [];
let answer = '';


