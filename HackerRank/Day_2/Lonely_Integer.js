function lonelyinteger(a) {
  const integerSet = new Set(a);
  const arr = [...integerSet];
  for (const n of arr) {
    let temp = a.filter((num) => num == n);
    if (temp.length === 1) {
      return n;
    }
  }
  return integerSet.size;
}

console.log(lonelyinteger([1, 2, 3, 4, 3, 2, 1]));
console.log(lonelyinteger([0, 0, 1, 2, 1]));
