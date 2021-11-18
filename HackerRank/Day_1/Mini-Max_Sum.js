function miniMaxSum(arr) {
  arr.sort((a, b) => {
    return a - b;
  });
  let minimum = 0;
  let maximum = 0;
  arr.map((number, i, numbers) => {
    if (i < arr.length - 1) {
      minimum += numbers[i];
    }

    if (i > 0) {
      maximum += numbers[i];
    }
  });
  console.log(minimum + " " + maximum);
}

miniMaxSum([1, 3, 5, 7, 9]);
