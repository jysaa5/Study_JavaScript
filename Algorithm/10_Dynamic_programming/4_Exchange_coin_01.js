// 4. 동전 교환 (냅색 알고리즘)
// m: 거슬러 줄 돈, coin: 동전 종류
function solution(m, coin) {
  let answer = 0;
  let dy = Array.from({ length: m + 1 }, () => 1000);
  dy[0] = 0;
  for (let i = 0; i < coin.length; i++) {
    for (let j = coin[i]; j < dy.length; j++) {
      dy[j] = Math.min(dy[j], dy[j - coin[i]] + 1);
    }
    console.log(dy);
  }
  answer = dy[m];
  return answer;
}

let arr = [1, 2, 5];
console.log(solution(15, arr));
