// 각도기

function solution(angle) {
  let answer = 0;

  if (angle < 0) return answer;

  if (angle > 0 && angle < 90) {
    answer = 1;
  }

  if (angle === 90) {
    answer = 2;
  }

  if (angle > 90 && angle < 180) {
    answer = 3;
  }

  if (angle === 180) {
    answer = 4;
  }

  return answer;
}