//  변수 선언과 할당
const a = "abc";

// 불변성
a = a + "def";

const b = 5;
const c = 5;
b = 7;

// 참조형 데이터의 할당 & 재할당
const obj1 = {
  a: 1,
  b: "bbb",
};

obj1.a = 2;

// 중첩 객체
const obj = {
  x: 3,
  arr: [3, 4, 5],
};

// 재할당
obj.arr = "str";
