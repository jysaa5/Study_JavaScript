// 7. 10 부제
/*
서울시는 6월 1일부터 교통 혼잡을 막기 위해서 자동차 10 부제를 시행한다.
자동차 10부제는 자동차 번호의 일의 자리 숫자와 날짜의 일의 자리 숫자가 일치하면 해당 자동차의 운행을 금지하는 것이다.
예를 들어, 자동차 번호의 일의 자리 숫자가 7 이면 7 일, 17 일, 27 일에 운행하지 못한다.
또한, 자동차 번호의 일의 자리 숫자가 0 이면 10 일, 20 일, 30 일에 운행하지 못한다.
여러분들은 일일 경찰관이 되어 10 부제를 위반하는 자동차의 대수를 세는 봉사활동을 하려고 한다.
날짜의 일의 자리 숫자가 주어지고 7 대의 자동차 번호의 끝 두 자리 수가 주어졌을 때 위반하는 자동차의 대수를 출력하는 프로그램을 작성하세요.
*/

function solution(dateNum, car1, car2, car3, car4, car5, car6, car7) {
    let num = dateNum;
    let cars = [car1, car2, car3, car4, car5, car6, car7];
    let result = [];
    for (let c of cars) {
        if (Math.floor(c % 10) === num) {
            result.push(c);
        }
    }
    return result.length;
}

console.log(solution(3, 25, 23, 11, 47, 53, 17, 33));