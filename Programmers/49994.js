// 방문 길이

function solution(dirs) {
  let answer = 0;
  const way = new Map();

  const getPoint = (point, d) => {
    let [a, b] = point;
    if (d === "U") {
      if (b === 5) return point;
      b += 1;
    } else if (d === "D") {
      if (b === -5) return point;
      b += -1;
    } else if (d === "L") {
      if (a === -5) return point;
      a += -1;
    } else {
      if (a === 5) return point;
      a += 1;
    }
    return [a, b];
  };
  let original = [0, 0];

  for (let i = 0; i < dirs.length; i++) {
    let [x1, y1] = original;
    let [x2, y2] = getPoint(original, dirs[i]);

    if (!(x1 === x2 && y1 === y2) && !way.get(`${x1},${y1}_${x2},${y2}`) && !way.get(`${x2},${y2}_${x1},${y1}`)) {
      way.set(`${x1},${y1}_${x2},${y2}`, 1);
    }
    original = [x2, y2];
  }

  return way.size;
}