let a = [10, 11, 12, 13, 14, 15];

let answer = a.filter(
  function (v, i) {
    return v % 2 === 0;
  },
  [1, 2]
);

console.log(answer);
