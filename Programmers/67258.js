// 보석 쇼핑

function solution(gems) {
  const gemsTypeSize = new Set(gems).size;
  let countMap = new Map();

  let bestL = 0;
  let bestR = gems.length - 1;

  let left = 0;

  for (let right = 0; right < gems.length; right++) {
    countMap.set(gems[right], (countMap.get(gems[right]) || 0) + 1);

    while (countMap.size === gemsTypeSize) {
      if (right - left < bestR - bestL || (right - left === bestR - bestL && left < bestL)) {
        bestL = left;
        bestR = right;
      }

      const gem = gems[left];
      countMap.set(gem, countMap.get(gem) - 1);
      if (countMap.get(gem) === 0) {
        countMap.delete(gem);
      }
      left++;
    }
  }

  return [bestL + 1, bestR + 1];
}