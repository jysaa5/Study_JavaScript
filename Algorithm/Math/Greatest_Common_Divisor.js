// GCD: Greatest Common Divisor

// solution 1

function gcd1(a, b) {
    let ret = 0
    for (var i = 1; i < Math.min(a, b) + 1; i++) {
        if (a % i === 0 && b % i === 0) {
            ret = i
        }
    }
    return ret
}

// solution 2
function gcd2(a, b) {
    for (var i = Math.min(a, b); i >= 0; i--) {
        if (a % i === 0 && b % i === 0) {
            return i
        }
    }
}

// solution 3: 유클리드 호제법
function gcd3(a, b) {
    if (a % b === 0) {
        return b
    } else {
        return gcd2(b, a % b)
    }
}


// main 입출력
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let input = []
rl.on("line", function (line) {
    input = line.split(' ').map((i) => parseInt(i))
    rl.close();
}).on("close", function () {
    let a = input[0]
    let b = input[1]

    console.log('GCD1: ', gcd1(a, b))
    console.log('-----------------')
    console.log('GCD2: ', gcd2(a, b))
    console.log('-----------------')
    console.log('GCD3: ', gcd3(a, b))

    process.exit();
});