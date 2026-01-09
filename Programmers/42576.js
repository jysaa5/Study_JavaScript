// 완주하지 못한 선수

function solution(participant, completion) {
  let answer = "";

  participant.sort();
  completion.sort();

  for (let i = 0; participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }

  return answer;
}