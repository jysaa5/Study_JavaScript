// 중앙값 구하기

function solution(array) {
  let answer = 0;

  array.sort((a, b) => a - b);

  answer = array[Math.ceil(array.length / 2) - 1];

  return answer;
}