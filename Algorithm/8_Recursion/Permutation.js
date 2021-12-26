// 순열

const getPermutations = function (arr, selectNumber) {
  const results = [];

  // n개중에서 1개 선택할 때 (nP1), 바로 모든 배열의 원소를 반환. -> 1개 선택이므로 순서가 의미가 없음.
  if (selectNumber === 1) {
    return arr.map((el) => [el]);
  }
  arr.forEach((fixed, index, origin) => {
    // 해당 하는 fixed를 제외한 나머지 배열
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    // 나머지에 대해서 순열을 구한다.
    const permutations = getPermutations(rest, selectNumber - 1);
    // 돌아온 순열에 떼 놓은 (fixed) 값 붙이기
    const attached = permutations.map((el) => [fixed, ...el]);
    // 배열 sparead syntax로 모두 다 push
    results.push(...attached);
  });
  return results; // 결과 담긴 results return
};

let numberArr = [1, 2, 3, 4];
let number = 2;
console.log(getPermutations(numberArr, number));
