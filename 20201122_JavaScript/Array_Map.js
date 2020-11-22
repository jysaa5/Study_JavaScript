const arr = [0, 1, 2, 3];

let squaredArr = arr.map(function (element) {
    return element * element;
});

squaredArr = arr.map(element => element * element);

console.log(squaredArr);