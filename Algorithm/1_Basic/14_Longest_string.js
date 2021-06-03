// 문제: 가장 긴 문자열
/*
N개의 문자열이 입력되면 그 중 가장 긴 문자열을 출력하는 프로그램을 작성하세요.
*/

function solution(n, str1, str2, str3, str4, str5) {
    let result = '';
    let arr = [str1, str2, str3, str4, str5];
    let max = Number.MIN_SAFE_INTEGER;
    for (let s of arr) {
        if (s.length > max) {
            max = s.length;
            result = s;
        }
    }
    return result;
}

console.log(solution(5, 'teacher', 'time', 'student', 'beautiful', 'good'))