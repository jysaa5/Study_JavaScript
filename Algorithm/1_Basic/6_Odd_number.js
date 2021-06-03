// 6. 홀수
/*
7개의 자연수가 주어질 때, 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고, 고른 홀수들
중 최소값을 찾는 프로그램을 작성하세요.
예를 들어, 7 개의 자연수 12, 77, 38, 41, 53, 92, 85 가 주어지면 이들 중 홀수는 77, 41, 53,
85 이므로 그 합은 77 + 41 + 53 + 85 = 256 이 되고,
41 < 53 < 77 < 85 이므로 홀수들 중 최소값은 41 이 된다.
*/

function getOddNumbers(n1, n2, n3, n4, n5, n6, n7) {
    let arr = [n1, n2, n3, n4, n5, n6, n7];
    let res = [];
    for (let num of arr) {
        if (num % 2 !== 0) {
            res.push(num);
        }
    }
    return res;
}

function getSum(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum
}


function solution(n1, n2, n3, n4, n5, n6, n7) {
    let min = Number.MAX_SAFE_INTEGER;
    let sum = 0;
    min = Math.min(...getOddNumbers(n1, n2, n3, n4, n5, n6, n7));
    sum = getSum(getOddNumbers(n1, n2, n3, n4, n5, n6, n7));
    return {
        sum,
        min
    };
}

console.log(solution(12, 77, 38, 41, 53, 92, 85));