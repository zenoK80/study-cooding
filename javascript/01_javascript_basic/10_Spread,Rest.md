# 10. Spread / Rest

## Spread

배열이나 객체의 값을 펼친다.

```js
const numbers = [1, 2, 3];

const copied = [...numbers];

// console.log(copied); [1, 2, 3]
```

* `...numbers`: 배열의 값을 하나씩 펼친다.

---

## 배열 합치기

```js
const first = [1, 2];
const second = [3, 4];

const numbers = [...first, ...second];

// console.log(numbers); [1, 2, 3, 4]
```

---

## 배열에 값 추가하기

```js
const numbers = [2, 3];

const result = [1, ...numbers, 4];

// console.log(result); [1, 2, 3, 4]
```

---

## 객체 Spread

```js
const user = {
  name: "Kim",
  age: 20
};

const copiedUser = {
  ...user
};

// console.log(copiedUser); { name: "Kim", age: 20 }
```

객체 값을 덮어쓸 수도 있다.

```js
const user = {
  name: "Kim",
  age: 20
};

const result = {
  ...user,
  age: 30
};

// console.log(result.age); 30
```

---

## 함수에 배열 펼쳐 전달하기

```js
const numbers = [3, 7];

function add(a, b) {
  return a + b;
}

const answer = add(...numbers);

// console.log(answer); 10
```

---

## Rest

여러 값을 하나의 배열로 모은다.

```js
function printNumbers(...numbers) {
  console.log(numbers);
}

printNumbers(1, 2, 3);

// [1, 2, 3]
```

* Spread: 값을 펼친다.
* Rest: 값을 모은다.

---

## 일부 값과 나머지 값

```js
const numbers = [10, 20, 30, 40];

const [first, ...rest] = numbers;

// console.log(first); 10
// console.log(rest); [20, 30, 40]
```

---

## 함수에서 Rest 사용하기

```js
function sum(...numbers) {
  let total = 0;

  for (const number of numbers) {
    total += number;
  }

  return total;
}

// console.log(sum(1, 2, 3, 4)); 10
```

---

## 핵심

```text
Spread
→ ...값
→ 펼치기

Rest
→ ...변수
→ 여러 값을 모으기
```
