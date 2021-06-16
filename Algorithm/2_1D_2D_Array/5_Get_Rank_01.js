// 5. 등수구하기
/*
N(1 <= N <= 100) 명의 학생의 국어점수가 입력되면 각 학생의 등수를 입력된 순서대로 출력하는 프로그램을 작성하세요.
*/

// solution 1
function solution(arr) {
    let tmp = -1;
    let rank = 1;
    let cnt = 1;
    let nums = arr.slice();
    let answer = [];
    nums.sort((a, b) => b - a);
    console.log(nums);
    for (let i = 0; i < nums.length; i++) {
        if (tmp < 0) {
            tmp = nums[i];
            answer.push(rank);
            rank++;
        } else {
            if (tmp !== nums[i]) {
                if (cnt > 1) {
                    answer.push(rank + cnt);
                    rank += cnt
                    cnt = 1;
                } else {
                    answer.push(rank);
                }
                rank++;
            } else if (tmp === nums[i]) {
                cnt++;
                rank--;
                answer.push(rank);
            }
            tmp = nums[i];
        }
    }

    return answer;
}

let scoreArr1 = [87, 89, 92, 100, 76];
let scoreArr2 = [2, 92, 92, 33]
console.log(solution(scoreArr1));
console.log(solution(scoreArr2));