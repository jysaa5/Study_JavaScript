// 3. 최대 부분 증가 수열

function solution(arr) {
  let answer = 0;
  let dy = Array.from({ length: arr.length }, () => 0);
  for (let i = 0; i < dy.length; i++) {
    let minIndex = [];
    for (let j = i; j > 0; j--) {
      if (arr[i] > arr[j]) {
        minIndex.push(dy[j]);
      }
    }
    if (minIndex.length === 0) {
      dy[i] = 1;
    } else {
      dy[i] = 1 + minIndex.sort((a, b) => b - a)[0];
    }
  }
  console.log(dy);
  answer = dy.sort((a, b) => b - a)[0];
  return answer;
}

let arr = [5, 3, 7, 8, 6, 2, 9, 4];
console.log(solution(arr));
