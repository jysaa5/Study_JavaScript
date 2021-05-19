// 3. 연속부분수열1 (Two Pointers Algorithm)
// lt = 0, rt = 0 (왼쪽에서 오른쪽으로 가는데, rt가 먼저 움직이고 lt가 나중에 움직인다.)
// sum은 lt ~ rt 의 합
// sum이 기준 파라미터보다 작으면 rt 이동하고 합, 크면 lt가 뼈고 이동.
// 기준 파라미터와 sum이 같으면 lt 값을 빼고 이동한다.


function solution(n, m, arr) {
    let answer = 0,
        lt = 0,
        sum = 0;
    for (let rt = 0; rt < n; rt++) {
        sum += arr[rt]
        // rt가 이동하면서 같아질 때
        if (sum === m) {
            answer++;
        }
        // sum이 크거나 같을 때
        while (sum >= m) {
            sum -= arr[lt++];
            if (sum === m) {
                answer++;
                console.log(lt, rt)
            }
        }
    }
    return answer;
}


let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(8, 6, a));