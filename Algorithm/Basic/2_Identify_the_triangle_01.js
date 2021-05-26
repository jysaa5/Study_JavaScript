// 2. 삼각형 판별하기
// 길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있으면“ YES "를 출력하고, 만들 수 없으면 ”NO" 를 출력한다.

function solution(a, b, c) {
    let answer = '';
    let arr = [a, b, c];
    arr.sort((a, b) => a - b)

    if (arr[2] < arr[1] + arr[0]) {
        console.log('YES');
    } else {
        console.log('NO')
    }
    return answer
}

console.log(solution(6, 7, 11))