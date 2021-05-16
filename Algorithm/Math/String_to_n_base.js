// 숫자로 구성된 문자열을 N진법에 맞게 변횐

// str: 문자열
// n: n진법
// 이론적으로 각 자리수 *N의 거듭제곱의 합으로 구할 수 있다.
// 예시) 123 = 1*10^2 + 2*10^1 + 3*10^0
function stoi1(str, n) {
    var ret = 0;
    var len = str.length;
    for (var i = 0; i < len; i++) {
        ret += (parseInt(str[i]) * (n ** (len - i - 1)))
    }
    return ret
}

console.log(stoi1('10000', 3))


// 거듭제곱 연산의 반복 최소화
function stoi2(str, n) {
    var ret = 0
    for (var i = 0; i < str.length; i++) {
        ret = ((ret * n) + parseInt(str[i]))
    }
    return ret
}

console.log(stoi2('10000', 3))