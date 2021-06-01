// 8. 일곱 난쟁이
/*
왕비를 피해 일곱 난쟁이들과 함께 평화롭게 생활하고 있던 백설공주에게 위기가 찾아왔다.
일과를 마치고 돌아온 난쟁이가 일곱 명이 아닌 아홉 명이었던 것이다.
아홉 명의 난쟁이는 모두 자신이 "백설 공주와 일곱 난쟁이"의 주인공이라고 주장했다.
뛰어난 수학적 직관력을 가지고 있던 백설공주는, 다행스럽게도 일곱 난쟁이의 키의 합이 100 이 됨을 기억해 냈다.
아홉 난쟁이의 키가 주어졌을 때, 백설공주를 도와 일곱 난쟁이를 찾는 프로그램을 작성하시오.
*/

function getTotalSum(arr) {
    let sum = 0;
    for (let n of arr) {
        sum += n;
    }
    return sum;
}

function solution(h1, h2, h3, h4, h5, h6, h7, h8, h9) {
    let height = [h1, h2, h3, h4, h5, h6, h7, h8, h9];
    height.sort((a, b) => a - b);
    let sum = getTotalSum(height);
    let rest = sum - 100;
    for (let i = 0; i < 9; i++) {
        let a = height[i];
        for (let j = i; j < 9; j++) {
            if (j < 8) {
                let b = height[j + 1];
                if (a + b === rest) {
                    height.splice(i, 1);
                    height.splice(j, 1);
                    break;
                }
            }
        }
    }
    return height;
}

console.log(solution(20, 7, 23, 19, 10, 15, 25, 8, 13));