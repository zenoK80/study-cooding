# 기본 sort()
배열을 정렬한다.
```js
const numbers = [3,1,2];
numbers.sort();
// console.log(numbers); [1,2,3]
```
- 숫자 정렬은 주의해야 한다.

---

# 숫자 오름차순
```js
const numbers = [10,2,30];
numbers.sort((a,b)=>a-b);
// console.log(numbers); [2,10,30];
```
- `a - b`
- 작은 숫자 -> 큰 숫자

---

# 숫자 내림차
```js
const numbers = [10,2,30];
numbers.sort((a,b)=>b-a);
// console.log(numbers); [30,10,2]
```
- `b-a`
- 큰 숫자 -> 작은 숫자

---

# 왜 비교 함수를 쓰는가
```js
const numbers = [1,10,2];
numbers.sort();
// console.log(numbers); [1,10,2]
```
- 기본 `sort`는 숫자를 문자열처럼 비교할 수 있다.
- 그래서 숫자는 보통 이렇게 쓴다.
- `numbers.sort((a,b)=>a-b)`

---

# 문자열 정렬
```js
const words = ["banana","apple","orange"];
words.sort();
// console.log(words); ["apple,"banana","orange"]
```

---

# 문자열 오름차순
```js

const words = ["banana", "apple", "orange"];

words.sort((a, b) => a.localeCompare(b));

// console.log(words);
// ["apple", "banana", "orange"]
a.localeCompare(b) → 오름차순
```
- `localeCompare()`는 문자열 두 개의 순서를 비교하는 함수
- 음수 → a가 b보다 앞
- 0 → 둘이 같음
- 양수 → a가 b보다 뒤
- a가 b보다 앞이면 → 음수 → a를 앞으로
- a가 b보다 뒤면   → 양수 → b를 앞으로
---


# 문자열 내림차순
```js
const words = ["banana", "apple", "orange"];

words.sort((a, b) => b.localeCompare(a));

// console.log(words);
// ["orange", "banana", "apple"]
b.localeCompare(a) → 내림차순
```

---

# 배열 안 객체 정렬
```js
const users = [
	{name:"A",score:70},
	{name:"B",score:90},
	{name:"C",score:80}
];

users.sort((a,b)=>b.score - a.score);
// B 90
// C 80
// A 70
```
- `score`기준 내림차순 정렬.

---

# 원본 배열 변경
```js
const numbers = [3,1,2];
numbers.sort((a,b)=>a-b);
// console.log(numbers;) [1,2,3]
```
- `sort()`는 원본 배열 자체를 바꾼다.

## 원본을 유지하려면?
```js
const numbers = [3,1,2];
const sorted = [...numbers].sort((a,b)=>a-b);
// console.log(numbers); [3,1,2]
// console.log(sorted); [1,2,3]
```

---

# 핵심
- `sort()` -> 배열 정렬 -> 원본 배열 변경
- `(a,b) => a - b` -> 오름차순
- `(a,b) => b - a` -> 내림차순


