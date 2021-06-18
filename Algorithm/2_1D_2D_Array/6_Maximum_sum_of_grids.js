// 6. 격자판의 최대합

/*
N * N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가 장 큰 합을 출력합니다.
*/

const getSumNums = (numArray) => {
    let arr = numArray.slice();
    let sum = 0;
    for (let n of arr) {
        sum += n;
    }
    return sum;
}

function solution(num, array) {
    let number = num;
    let nums = array.slice();
    let rowsMax = Number.MIN_SAFE_INTEGER;
    let columnMax = Number.MIN_SAFE_INTEGER;
    let diagonalMax = Number.MIN_SAFE_INTEGER;
    let result = 0;

    // 행의 합
    for (let i = 0; i < nums.length; i++) {
        rowsMax = Math.max(rowsMax, getSumNums(nums[i]));
        console.log('행의 합>>>', rowsMax);
    }

    // 열의 합
    for (let j = 0; j < nums.length; j++) {
        let numsArr1 = [];
        for (let k = 0; k < nums[j].length; k++) {
            numsArr1.push(nums[k][j]);
        }
        columnMax = Math.max(columnMax, getSumNums(numsArr1));
        console.log('열의 합>>>', columnMax);
    }

    // 두 대각선의 합 (첫 번째 대각선)
    for (let l = 0; l < nums.length; l++) {
        let numsArr2 = [];
        numsArr2.push(nums[l][l]);
        diagonalMax = Math.max(diagonalMax, getSumNums(numsArr2));
        console.log('대각선의 합1>>>', diagonalMax);
    }

    // 두 대각선의 합 (두 번째 대각선)
    for (let m = 0; m < nums.length; m++) {
        let numsArr3 = [];
        numsArr3.push(nums[m][nums.length - 1 - m]);
        diagonalMax = Math.max(diagonalMax, getSumNums(numsArr3));
        console.log('대각선의 합2>>>', diagonalMax);
    }

    result = Math.max(rowsMax, columnMax, diagonalMax);
    return result;
}

let n = 5;
let arr = [
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19]
];

console.log(solution(n, arr));