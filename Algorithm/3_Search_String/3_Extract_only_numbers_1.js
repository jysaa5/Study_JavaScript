// 3. 숫자만 추출

function solution(str) {
    let answer = "";
    for (let x of str) {
        if (!isNaN(x)) answer += x;
        // if(!isNaN(x)) answer = answer*10+Number(x)
    }
    return parseInt(answer);
}

let str = "g0en2T0s8eSoft";
console.log(solution(str));