// 4. 가장 짧은 문자거리
// 1) 왼쪽에 있는 e로부터의 거리: 왼쪽에서부터 e와의 거리를 배열에 저장.
// 2) 오른쪽에 있는 e로부터의 거리: 오른쪽에서부터 e와의 거리를 위에서 구한 배열과 비교


/*
한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출력하는 프로그램을 작성하세요.
*/


function solution(s, t) {
    let answer = [];
    let p = 1000;
    for (let x of s) {
        if (x === t) {
            p = 0;
            answer.push(p);
        } else {
            p++;
            answer.push(p);
        }
    }
    p = 1000;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === t) p = 0;
        else {
            p++;
            answer[i] = Math.min(answer[i], p);
        }
    }
    return answer;
}

let str = "teachermode";
console.log(solution(str, 'e'));