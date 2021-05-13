// 문제: 2675, 문자열 반복

// solution 1
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let input = []
rl.on("line", function (line) {
    input.push(line)
}).on("close", function () {
    var t = parseInt(input[0])
    for (var i = 0; i < t; i++) {
        var r = parseInt(input[i + 1].split(" ")[0])
        var str = input[i + 1].split(" ")[1]
        let result = '';
        for (var j = 0; j < str.length; j++) {
            var strArray = str.split("")[j]
            for (var k = 0; k < r; k++) {
                result += strArray
            }
        }
        console.log(result)
    }
    process.exit();
});