# shift()
배열의 맨 앞 값을 제거한다.
```js
const numbers = [10,20,30];
const removed = numbers.shift();
// console.log(removed); 10
// console.log(numbers); [20, 30]
```
- shift() 반환값 → 제거된 값

---

# unshift()
배열의 맨 앞에 값을 추가한다.
```js
const numbers = [20,30];
const length = numbers.unshift(10)
// console.log(length); 3
// console.log(numbers); [10, 20, 30]
```
- unshift() 반환값 → 새로운 배열 길이

---

# 여러 값 추가
```js
const numbers = [30];

numbers.unshift(10, 20);

// console.log(numbers); [10, 20, 30]
```
---

# push / pop과 비교
- push()
→ 뒤에 추가

- pop()
→ 뒤에서 제거

- unshift()
→ 앞에 추가

- shift()
→ 앞에서 제거

---

# 핵심
- shift()
→ 맨 앞 제거
→ 제거된 값 반환

- unshift(value)
→ 맨 앞 추가
→ 새 배열 길이 반환
