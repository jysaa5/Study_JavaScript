// 할인 행사

function solution(want, number, discount) {
  let answer = 0;

  const products = new Map();
  const wants = new Map();

  for (const d of discount) {
    products.set(d, (products.get(d) || 0) + 1);
  }

  for (let i = 0; i < want.length; i++) {
    if (!products.has(want[i]) || !products.get(want[i]) >= number[i]) {
      return 0;
    }
    wants.set(want[i], number[i]);
  }

  let count = new Map();

  let left = 0;
  let right = 0;

  for (let j = 0; j < discount.length; j++) {
    count.set(discount[j], (count.get(discount[j]) || 0) + 1);
    right++;

    while (Math.abs(right - left) === 10) {
      let flag = true;
      for (const [key, value] of wants) {
        if (count.get(key) !== value) {
          flag = false;
        }
      }
        
        count.set(discount[left], count.get(discount[left]) - 1);
        
      if (count.get(discount[left]) === 0) {
        count.delete(discount[left]);
      }
      left++;

      if (flag) {
        answer++;
      } else {
        break;
      }
    }
  }

  return answer;
}