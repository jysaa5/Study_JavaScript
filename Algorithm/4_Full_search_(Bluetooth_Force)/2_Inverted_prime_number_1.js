// 2. 뒤집은 소수

/*
N개의 자연수가 입력되면 각 자연수를 뒤집은 후 그 뒤집은 수가 소수이면 그 소수를 출력하는 프로그램을 작성하세요. 
예를 들어 32를 뒤집으면 23이고, 23은 소수이다. 그러면 23을 출력한다.
단 910를 뒤집으면 19로 숫자화 해야 한다. 첫 자리부터의 연속된 0은 무시한다.
*/

function checkPrimeNumber(num) {
    if (num === 1) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}


function solution(numArr) {
    let arr = [];
    let result = [];
    for (let n of numArr) {
        arr.push(Number(String(n).split("").reverse().join("")));
    }
    for (let m of arr) {
        checkPrimeNumber(m) ? result.push(m) : null;
    }
    return result;
}

let nums = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(nums))