function findMedian(arr) {
  arr.sort((a, b) => {
    return a - b;
  });
  console.log(arr);
  console.log(arr[Number.parseInt(arr.length / 2)]);
}

console.log(findMedian([0, 1, 2, 4, 6, 5, 3]));
