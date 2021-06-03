// 1. 큰 수 출력하기
/*
N(1 <= N <= 100) 개의 정수를 입력받아, 자신의 바로 앞 수보다 큰 수만 출력하는 프로그램을 작성하세요.(첫 번째 수는 무조건 출력한다)
*/

function solution(n, n1, n2, n3, n4, n5, n6) {
    let numOfNums = n;
    let arr = [n1, n2, n3, n4, n5, n6];
    let result = [];
    result.push(arr[0]);
    let tmp = arr[0];
    for (let i = 1; i < numOfNums; i++) {
        if (tmp < arr[i]) {
            result.push(arr[i]);
        }
        tmp = arr[i];
    }
    return result;
}


console.log(solution(6, 7, 3, 9, 5, 6, 12))