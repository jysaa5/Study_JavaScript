// 문제: 10699, 오늘 날짜

let today = new Date();

// 년도
let year = today.getFullYear();
let month = today.getMonth() + 1;
let date = today.getDate();
month = month.length > 1 ? month : 0 + String(month)
console.log(`${year}-${month}-${date}`)