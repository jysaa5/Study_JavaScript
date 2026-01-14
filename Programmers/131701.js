// 연속 부분 수열 합의 개수

function solution(elements) {
  let answer = 0;
  let numSet = new Set();

  elements = [...elements, ...elements];

  for (let i = 0; i < elements.length / 2; i++) {
    let left = 0;
    let right = i;

    while (left < elements.length / 2) {
      let result = 0;

      for (let j = left; j <= right; j++) {
        result += elements[j];
      }

      numSet.add(result);

      left++;
      right++;

      if (i === right) break;
    }
  }

  answer = numSet.size;

  return answer;
}