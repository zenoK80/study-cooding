# 13. Number와 BigInt

## Number

일반적인 정수와 소수를 나타내는 숫자 자료형이다. `Number()`는 값을 Number로 변환하는 데도 사용한다.

```javascript
console.log(typeof 10);       // 'number'
console.log(typeof 3.5);      // 'number'
console.log(Number('123'));   // 123
console.log(Number('hello')); // NaN
```

## 정수인지 확인하기

```javascript
console.log(Number.isInteger(3));   // true
console.log(Number.isInteger(3.5)); // false
console.log(Number.isInteger('3')); // false
console.log(Number.isNaN(NaN));     // true
console.log(Number.isNaN('hello')); // false
```

- `Number.isInteger(값)`: 숫자 자료형의 정수인지 확인한다. 문자열을 숫자로 바꾸지는 않는다.
- `Number.isNaN(값)`: 값 자체가 `NaN`인지 확인한다. 숫자 여부를 모두 검사하는 함수는 아니다.

## Number가 안전하게 다룰 수 있는 정수

안전한 정수 범위는 `-(2 ** 53 - 1)`부터 `2 ** 53 - 1`까지다. 이 범위를 넘으면 서로 다른 정수가 같은 값으로 저장될 수 있다.

```javascript
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.isSafeInteger(100)); // true
console.log(9007199254740992 === 9007199254740993); // true: 정밀도 손실
```

## BigInt

Number의 안전한 정수 범위를 넘는 큰 정수도 정확하게 계산할 수 있는 자료형이다. 소수는 저장하지 못한다.

```javascript
const a = 9007199254740993n;
const b = BigInt('9007199254740993');

console.log(typeof a); // 'bigint'
console.log(a === b);  // true
console.log(a + 1n);   // 9007199254740994n
```

- 정수 뒤에 `n`을 붙이거나 `BigInt('정수 문자열')`로 만든다.
- 큰 정수는 처음부터 문자열이나 `n`으로 작성한다. 이미 부정확해진 Number를 BigInt로 바꿔도 복구되지 않는다.

## BigInt 계산과 변환

```javascript
console.log(7n / 2n);  // 3n: 소수 부분 버림
console.log(-7n / 2n); // -3n: 0 방향으로 버림
console.log(7n % 2n);  // 1n

// console.log(10n + 1); // TypeError: 두 자료형을 섞어 더할 수 없음
console.log(10n + BigInt(1)); // 11n
console.log(String(10n));    // '10'
console.log(Number(10n));    // 10
```

- 산술 연산에서는 두 값을 같은 숫자 자료형으로 맞춘다.
- 큰 BigInt를 Number로 바꾸면 정밀도를 잃을 수 있다.
- `Math.floor()` 같은 Math 메서드는 BigInt를 받지 않는다.

## 정리

- 일반적인 숫자 계산: `Number`.
- 안전한 정수 범위를 넘는 정수 계산: `BigInt`.
- `Number.isInteger()`는 정수 검사, `Number.isSafeInteger()`는 안전한 정수 범위까지 검사한다.
- Number의 소수 계산도 오차가 있을 수 있다. `0.1 + 0.2 === 0.3`은 `false`다.

## 직접 해보기

1. `'42'`를 Number와 BigInt로 각각 바꾸고 `typeof`를 출력한다.
2. `9007199254740993n`에 `7n`을 더한다.
3. `9n / 2n`과 `9 / 2`의 결과를 비교한다.
