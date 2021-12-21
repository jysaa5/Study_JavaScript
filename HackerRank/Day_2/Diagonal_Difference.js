function diagonalDifference(arr) {
  const matrix = arr.slice();
  let left = 0;
  let right = 0;
  // 왼쪽 대각선
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (i === j) {
        letf += arr[i][j];
      }

      if (matrix.length * j >= i) {
        right += arr[i][j];
      }
    }
  }
  console.log(left, right);
}
