// 3. 가위 바위 보
/*
A, B 두 사람이 가위바위보 게임을 합니다.총 N번의 게임을 하여 A가 이기면 A를 출력하고, B가 이기면 B를 출력합니다.비길 경우에는 D를 출력합니다.
가위, 바위, 보의 정보는 1: 가위, 2: 바위, 3: 보로 정하겠습니다.
두 사람의 각 회의 가위, 바위, 보 정보가 주어지면 각 회를 누가 이겼는지 출력하는 프로그램을 작성하세요.
*/


function rockPaperScissors(p1, p2) {
    if ((p1 === 1 && p2 === 2) || (p1 === 3 && p2 === 1) || (p1 === 2 && p2 === 3)) {
        return 'B';
    } else if ((p1 === 2 && p2 === 1) || (p1 === 1 && p2 === 3) || (p1 === 3 && p2 === 2)) {
        return 'A';
    } else {
        return 'D';
    }
}

function solution(n, arrA, arrB) {
    let a = arrA.slice();
    let b = arrB.slice();
    let result = [];
    for (let i = 0; i < n; i++) {
        result.push(rockPaperScissors(a[i], b[i]));
    }

    for (let r of result) {
        console.log(r);
    }

    return result;
}



let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(5, a, b))