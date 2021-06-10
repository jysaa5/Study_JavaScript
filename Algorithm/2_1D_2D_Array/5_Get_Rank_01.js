// 5. 등수구하기
/*
N(1 <= N <= 100) 명의 학생의 국어점수가 입력되면 각 학생의 등수를 입력된 순서대로 출력하는 프로그램을 작성하세요.
*/


function solution(arr) {
    let n = 0;
    let cnt = 1;
    let nums = arr.slice();
    let scores = new Map();
    let answer = [];
    nums.sort((a, b) => b - a);
    console.log(nums);
    for (let i = 0; i < nums.length; i++) {
        if (!scores.has(nums[i] + "")) {
            console.log(scores.has(nums[i] + ""))
            n++;
            console.log('n1:', n)
            scores.set(nums[i] + "", n + cnt);
            cnt = 0;
        } else if (scores.has(nums[i] + "")) {
            console.log(scores.has(nums[i] + ""))
            cnt++;
            console.log('n2:', n)
            console.log(cnt)
        }
    }

    console.log(scores)

    for (let s of arr) {
        answer.push(scores.get(s + ""));
    }

    return answer;
}

let scoreArr1 = [87, 89, 92, 100, 76];
let scoreArr2 = [2, 92, 92, 33]
console.log(solution(scoreArr1));
console.log(solution(scoreArr2));