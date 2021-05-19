// 6. 학급 회장 (Hash Map)

function solution(s) {
    let answer;
    let sH = new Map();

    for (let x of s) {
        if (sH.has(x)) {
            sH.set(x, sH.get(x) + 1);
        } else {
            sH.set(x, 1);
        }
    }
    console.log(sH)

    let max = Number.MIN_SAFE_INTEGER;
    for (let [key, val] of sH) {
        console.log(key, val);
        if (val > max) {
            max = val;
            answer = key;
        }
    }

    return answer;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str))