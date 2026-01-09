let a = [10, 11, 12, 13, 14, 15];

// v: a의 요소값, i: a의 인덱스값, x: a배열
a.forEach(
  function (v, i, x) {
    console.log(v, i, this, x);
  },
  [1, 2]
);
