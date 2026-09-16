# 14. Math 객체

## Math란?

숫자 계산에 쓰는 메서드와 상수를 모아 둔 JavaScript 내장 객체다. `new Math()`가 아니라 `Math.메서드(값)`으로 사용한다.

## 내림·올림·반올림·소수 부분 버리기

```javascript
console.log(Math.floor(3.7)); // 3: 내림
console.log(Math.ceil(3.2));  // 4: 올림
console.log(Math.round(3.5)); // 4: 반올림
console.log(Math.trunc(3.7)); // 3: 소수 부분 버림
```

음수에서는 `floor()`와 `trunc()`의 결과가 다르다.

```javascript
console.log(Math.floor(-3.7)); // -4: 더 작은 정수 쪽
console.log(Math.ceil(-3.7));  // -3: 더 큰 정수 쪽
console.log(Math.trunc(-3.7)); // -3: 소수 부분만 제거
console.log(Math.round(-3.5)); // -3: 정확히 중간이면 더 큰 정수 쪽
```

## 소수 자릿수 반올림

소수 첫째 자리까지 남기려면 10을 곱해 반올림한 뒤 10으로 나눈다.

```javascript
console.log(Math.round(12.36 * 10) / 10); // 12.4
console.log(Math.round(12.36));           // 12: 소수 첫째 자리에서 반올림
```

- `Math.round(12.36, 1)`처럼 두 번째 인자로 자릿수를 지정할 수 없다.
- 이 방식도 Number의 부동소수점 오차 영향을 받을 수 있다.

## 절댓값

```javascript
console.log(Math.abs(-7)); // 7
console.log(Math.abs(7));  // 7
console.log(Math.abs(3 - 10)); // 7: 두 수의 차이 크기
```

## 최솟값·최댓값

```javascript
console.log(Math.min(3, 1, 7)); // 1
console.log(Math.max(3, 1, 7)); // 7

const numbers = [3, 1, 7];
console.log(Math.min(...numbers)); // 1
console.log(Math.max(...numbers)); // 7
```

- `...numbers`는 배열을 `3, 1, 7`처럼 각각의 인자로 펼친다.
- 매우 큰 배열은 펼쳐 전달할 때 인자 개수 한도에 걸릴 수 있어 반복문으로 찾는 편이 안전하다.

## 거듭제곱·제곱근

```javascript
console.log(Math.pow(2, 3)); // 8: 2 × 2 × 2
console.log(2 ** 3);        // 8: 같은 계산
console.log(Math.sqrt(25)); // 5: 제곱하면 25가 되는 음이 아닌 수
```

## 정리

- `Math.floor(n)`: n 이하의 가장 큰 정수.
- `Math.ceil(n)`: n 이상의 가장 작은 정수.
- `Math.round(n)`: 가장 가까운 정수. 중간이면 더 큰 정수 선택.
- `Math.trunc(n)`: 소수 부분 제거.
- `Math.abs(n)`: 절댓값.
- `Math.min(a, b)` / `Math.max(a, b)`: 최솟값 / 최댓값.
- `Math.pow(a, b)` / `a ** b`: 거듭제곱. `Math.sqrt(n)`: 제곱근.

## 직접 해보기

1. `-4.8`에 `floor`, `ceil`, `round`, `trunc`를 각각 사용한다.
2. `[8, 3, 12, 5]`의 최솟값과 최댓값을 구한다.
3. `7 / 3 * 1000`의 소수 부분을 버린다.
