// 문제: 중복 단어 제거
/*
N개의 문자열이 입력되면 중복된 문자열은 제거하고 출력하는 프로그램을 작성하세요.
출력하는 문자열은 원래의 입력순서를 유지합니다.
*/

function solution(n, str1, str2, str3, str4, str5) {
    let arr = [str1, str2, str3, str4, str5];
    let strSet = new Set(arr);
    let result = [];
    for (let s of strSet) {
        result.push(s);
    }
    return result;
}

console.log(solution(5, 'good', 'time', 'good', 'time', 'student'));