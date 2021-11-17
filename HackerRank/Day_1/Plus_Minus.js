function plusMins(arr) {
  let positiveNumber = 0;
  let negativeNumber = 0;
  let zeroNumber = 0;

  arr.map((number) => {
    if (number > 0) {
      positiveNumber++;
    } else if (number < 0) {
      negativeNumber++;
    } else {
      zeroNumber++;
    }
  });
  console.log((positiveNumber / arr.length).toFixed(6));
  console.log((negativeNumber / arr.length).toFixed(6));
  console.log((zeroNumber / arr.length).toFixed(6));
}

plusMins([1, 1, 0, -1, -1]);
plusMins([-4, 3, -9, 0, 4, 1]);
