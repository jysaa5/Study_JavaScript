/**
 * 1. 큰 수 출력하기
 * N(1 <= N <= 100) 개의 정수를 입력받아, 자신의 바로 앞 수보다 큰 수만 출력하는 프로그램을 작성하세요.(첫 번째 수는 무조건 출력한다)
 */
const solution = (arr) => {
  const answer = [];
  arr.forEach((number, index) => {
    if (index === 0) {
      answer.push(number);
    } else if (number < arr[index + 1]) {
      answer.push(arr[index + 1]);
    }
  });
  return answer;
};

const arr = [7, 3, 9, 5, 6, 12];

console.log(solution(arr));
