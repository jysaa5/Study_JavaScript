let a = [10, 11, 12, 13, 14, 15];

// v: a의 요소값, i: a의 인덱스값, x: a배열
let answer1 = a.map(
  function (v, i, x) {
    console.log(v, i, x, this);
    return v * v;
  },
  [1, 2]
);
console.log("answer1 >>>>", answer1);

// undefined가 배열에 들어감.
let answer2 = a.map(
  function (v, i) {
    if (v % 2 === 0) {
      return v;
    }
  },
  [1, 2]
);
console.log("answer2 >>>>", answer2);
