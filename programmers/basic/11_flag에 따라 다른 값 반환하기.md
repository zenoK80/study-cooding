# 11. flag에 따라 다른 값 반환하기

[프로그래머스 원문](https://school.programmers.co.kr/learn/courses/30/lessons/181933?language=javascript)

- 분류: 코딩 기초 트레이닝 · 조건문 · Lv. 0
- 상태: [x] 풀이 완료 (`2026-09-18`)

## 문제 설명

두 정수 `a`, `b`와 boolean 변수 `flag`가 매개변수로 주어질 때,
`flag`가 `true`이면 `a + b`를, `false`이면 `a - b`를 반환한다.

## 제한사항

- `-1,000 ≤ a, b ≤ 1,000`

## 입출력 예

| a | b | flag | result |
|---:|---:|:---:|---:|
| -4 | 7 | true | 3 |
| -4 | 7 | false | -11 |

## 입출력 예 설명

### 예제 1

`flag`가 `true`이므로 `a + b`를 계산한다.

```text
(-4) + 7 = 3
```

### 예제 2

`flag`가 `false`이므로 `a - b`를 계산한다.

```text
(-4) - 7 = -11
```

## 문제 코드

```javascript
function solution(a, b, flag) {
  var answer = 0;
  return answer;
}
```

## 나의 풀이

```javascript
function solution(a, b, flag) {
  return flag ? a + b : a - b;
}
```

## 풀이 설명

삼항 연산자로 `flag`를 검사한다.

```javascript
조건 ? 참일 때 값 : 거짓일 때 값
```

현재 코드에 대입하면 다음과 같다.

```javascript
flag ? a + b : a - b
```

- `flag`가 `true`이면 `a + b`를 반환한다.
- `flag`가 `false`이면 `a - b`를 반환한다.

## 실행 흐름

```javascript
solution(-4, 7, true);
```

```text
1. a에는 -4가 들어간다.
2. b에는 7이 들어간다.
3. flag에는 true가 들어간다.
4. 삼항 연산자의 참 부분인 a + b를 실행한다.
5. (-4) + 7의 결과인 3을 반환한다.
```

```javascript
solution(-4, 7, false);
```

```text
1. flag가 false인지 확인한다.
2. 삼항 연산자의 거짓 부분인 a - b를 실행한다.
3. (-4) - 7의 결과인 -11을 반환한다.
```

## 다른 방법

### `if` 문 사용

```javascript
function solution(a, b, flag) {
  if (flag) {
    return a + b;
  }

  return a - b;
}
```

조건에 따라 실행할 코드가 길거나 여러 줄이라면 삼항 연산자보다 `if` 문이 읽기 쉽다.

## 배울 것들

### boolean

boolean은 참과 거짓을 나타내는 자료형이다.

```javascript
const isOpen = true;
const isFinished = false;
```

boolean 값은 `true`와 `false` 두 가지뿐이다.

### `flag`

`flag`는 특정 상태를 구분하기 위해 사용하는 boolean 변수 이름이다.

```javascript
if (flag) {
  // flag가 true일 때 실행
}
```

`flag` 자체가 이미 boolean이므로 다음처럼 비교할 필요가 없다.

```javascript
if (flag === true) {
  // 동작하지만 === true는 생략할 수 있다.
}
```

### 삼항 연산자

조건에 따라 두 값 중 하나를 선택하는 연산자다.

```javascript
조건 ? 참일 때 값 : 거짓일 때 값
```

```javascript
const result = age >= 20 ? "성인" : "미성년자";
```

삼항 연산자는 결과를 반환하므로 변수에 저장하거나 `return` 뒤에 바로 사용할 수 있다.

### 산술 연산자

```javascript
a + b // 덧셈
a - b // 뺄셈
```

## 시간·공간 복잡도 쉽게 보기

- 시간 복잡도: 조건을 한 번 확인하고 계산을 한 번 하므로 `O(1)`이다.
- 공간 복잡도: 입력 크기와 관계없이 별도의 큰 저장 공간을 만들지 않으므로 `O(1)`이다.

## 추천 풀이

```javascript
function solution(a, b, flag) {
  return flag ? a + b : a - b;
}
```

조건이 하나이고 반환할 값도 간단하므로 삼항 연산자를 사용하는 풀이가 가장 짧고 명확하다.
