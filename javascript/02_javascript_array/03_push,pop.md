## 03. push / pop

## push()

배열의 **맨 뒤에 값 추가**.

```js
const numbers = [1, 2];

numbers.push(3);

// console.log(numbers); [1, 2, 3]
```

---

## 여러 값 추가

```js
const numbers = [1];

numbers.push(2, 3, 4);

// console.log(numbers); [1, 2, 3, 4]
```

---

## push()의 반환값

`push()`는 추가된 값이 아니라 **배열의 새로운 길이**를 반환한다.

```js
const numbers = [1, 2];

const length = numbers.push(3);

// console.log(length); 3
// console.log(numbers); [1, 2, 3]
```

---

## pop()

배열의 **맨 뒤 값을 제거**한다.

```js
const numbers = [10, 20, 30];

numbers.pop();

// console.log(numbers); [10, 20]
```

---

## pop()의 반환값

삭제한 값을 돌려준다.

```js
const numbers = [10, 20, 30];

const removed = numbers.pop();

// console.log(removed); 30
// console.log(numbers); [10, 20]
```

---

## Stack처럼 사용하기

```js
const stack = [];

stack.push(10);
stack.push(20);
stack.push(30);

const number = stack.pop();

// console.log(number); 30
// console.log(stack); [10, 20]
```

마지막에 넣은 값이 먼저 나온다.

```text
push → 뒤에 추가
pop  → 뒤에서 제거
```

---

## 핵심

```text
push(value)
→ 배열 맨 뒤에 추가

pop()
→ 배열 맨 뒤 값 제거

push() 반환값
→ 배열 길이

pop() 반환값
→ 제거된 값
```
