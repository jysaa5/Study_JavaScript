## 01 데이터 타입

### 1. 데이터 타입 종류
- 기본형(원시형): Primitive type
  - 숫자(number), 문자열(string), 불리언(boolean), null, undefined, Symbol 등
- 참조형: Reference type
  - 객체(object)
    - 배열(Array), 함수(Function), 날짜(Date), 정규표현식(RegExp), Map, WeakMap, Set, WeakSet 등   



### 2. 기본형, 참조형의 복제
- 기본형: 값이 담긴 주솟값을 바로 복재한다.
- 참조형: 값이 담긴 주솟값들로 이루어진 묶음을 가리키는 주솟값을 복제한다는 점이 다르다.



### 3. 기본형 특징
- 불변성(immutability)



### 4. 메모리와 데이터
- 컴퓨터: 모든 데이터를 0 또는 1로 바꿔 기억한다.
- 비트(bit): 0 또는 1만 표현할 수 있는 하나의 메모리 조각이다.
- 메모리: 매우 많은 비트로 구성되어 있다. 각 비트는 고유한 식별자(unique identifier)를 통해 위치를 확인할 수 있다.
- 바이트(byte): 1바이트는 8개의 비트로 구성되어 있다. (1 byte = 8 bits) ➡️ 256(2^8)개의 값을 표현
