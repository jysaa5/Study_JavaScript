// 연속된 부분 수열의 합

function solution(sequence, k) {
  let left = 0;
  let sum = 0;

  let bestL = 0;
  let bestR = sequence.length - 1;
  let bestLen = Infinity;

  for (let right = 0; right < sequence.length; right++) {
    sum += sequence[right];

    while (sum > k && left <= right) {
      sum -= sequence[left];
      left++;
    }

    if (sum === k) {
      const len = right - left;

      if (len < bestLen || (len === bestLen && left < bestL)) {
        bestLen = len;
        bestL = left;
        bestR = right;
      }
    }
  }

  return [bestL, bestR];
}