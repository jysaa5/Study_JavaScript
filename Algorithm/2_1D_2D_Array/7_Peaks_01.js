// 7. 봉우리

/*
지도 정보가 N * N 격자판에 주어집니다.각 격자에는 그 지역의 높이가 쓰여있습니다.
각 격자판의 숫자 중 자신의 상하좌우 숫자보다 큰 숫자는 봉우리 지역입니다.
봉우리 지역이 몇 개 있는 지 알아내는 프로그램을 작성하세요.
격자의 가장자리는 0 으로 초기화 되었다고 가정한다.
만약 N = 5 이고, 격자판의 숫자가 다음과 같다면 봉우리의 개수는 10 개입니다.
*/

const checkPeak = (n, up, down, right, left) => {
    return n === Math.max(n, up, down, right, left) ? true : false;
}

function solution(num, array) {
    let n = num;
    let numsArr = array.slice();
    let result = 0;
    let zeros = Array.from({
        length: n + 2
    }, () => Array(n + 2).fill(0));

    for (let i = 0; i < numsArr.length; i++) {
        for (let j = 0; j < numsArr[0].length; j++) {
            zeros[i + 1][j + 1] = numsArr[i][j];
        }
    }

    for (let k = 0; k < zeros.length; k++) {
        for (let l = 0; l < zeros[0].length; l++) {
            if ((0 < k + 1) && (k + 1 < zeros.length - 1) && (0 < l + 1) && (l + 1 < zeros.length - 1)) {
                if (checkPeak(zeros[k + 1][l + 1], zeros[k][l + 1], zeros[k + 2][l + 1], zeros[k + 1][l + 2], zeros[k + 1][l])) {
                    result++;
                }
            }
        }
    }
    return result;
}


let n = 5;

let arr = [
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2]
];

console.log(solution(n, arr));