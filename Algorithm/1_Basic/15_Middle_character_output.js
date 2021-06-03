// 문제: 가운데 문자 출력

/*
소문자로 된 단어(문자열) 가 입력되면 그 단어의 가운데 문자를 출력하는 프로그램을 작성하세요.
단 단어의 길이가 짝수일 경우 가운데 2 개의 문자를 출력합니다.
*/

function solution(s) {
    let result = '';
    let arr = s.split("");
    if (parseInt(arr.length % 2) === 0) {
        result += arr[parseInt(arr.length / 2) - 1];
        result += arr[parseInt(arr.length / 2)];
    } else {
        result += arr[parseInt(arr.length / 2)];
    }
    return result;
}

console.log(solution('study'));
console.log(solution('good'));