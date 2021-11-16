// 1. 올바른 괄호
/*
괄호가 입력되면 올바른 괄호이면 “YES", 올바르지 않으면 ”NO"를 출력합니다.
(())() 이것은 괄호의 쌍이 올바르게 위치하는 거지만, (()()))은 올바른 괄호가 아니다.
 */

// solution 1
function solution(brackets) {
  let answer = "";
  let bracketArray = brackets.split("");
  let array = [];
  for (const bracket of bracketArray) {
    console.log(array);
    if (array.length === 0) {
      array.push(bracket);
    } else {
      let inBracket = array.pop();
      if (inBracket !== "(" || bracket !== ")") {
        array.push(inBracket);
        array.push(bracket);
      }
    }
  }

  return array.length === 0 ? "YES" : "NO";
}

console.log(solution(")))((("));
console.log(solution("(()(()))(()"));
console.log(solution("()"));
