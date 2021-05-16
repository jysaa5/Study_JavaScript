// Prime Number: 소수

// solution 1
function isPrime1(n) {
    for (var i = 2; i < n; i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true
}


// solution 2
function isPrime2(n) {
    let i = 2
    while (i * i <= n) {
        if (n % i === 0) {
            return false
        }
        i += 1
    }
    return true
}



// main 입출력
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let input = []
rl.on("line", function (line) {
    input.push(parseInt(line))
    rl.close();
}).on("close", function () {
    let number = input[0]
    console.log('isPrime1: ', isPrime1(number))
    console.log('isPrime2: ', isPrime2(number))
    process.exit();
});