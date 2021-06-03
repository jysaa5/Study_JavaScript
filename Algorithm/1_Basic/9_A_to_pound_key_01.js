// 문제: A를 #으로
/*
대문자로 이루어진 영어단어가 입력되면 단어에 포함된 'A'를 모두 '#'으로 바꾸어 출력하는 프로그램을 작성하세요.
*/

// solution 1
function solution(str) {
    return str.replace(/A/gi, '#');
}


console.log(solution('BANANA'));