# includes()
배열에 값이 있는지 확인한다.
```js
const numbers = [10,20,30];
const result = numbers.includes(20);
// console.log(result); true
```
- 있으면 `true`
- 없으면 `false`

---

# indexOf()
값이 있는 위치를 찾는다.
```js
const numbers = [10,20,30];
const index = numbers.indexOf(20);
// console.log(index); 1
```
- 배열의 index는 `0`부터 시작한다.
- 없으면 `-1`

---

# 없는 값
```js
const numbers = [10,20,30];
// console.log(numbers.includes(100)); false
// console.log(numbers.indexOf(100)); -1
```

---

# 문자열 배열에서도 사용
```js
const fruits = ["apple","banana","orange"];
// console.log(fruits.includes("banana")); true
// console.log(fruits.indexOf("orange")) 2
```

---

# 차이
`includes()`
→ 값이 있는지 확인
→ true / false

`indexOf()`
→ 값의 위치 확인
→ index / -1

---

# 핵심
`includes(value)`
→ 존재 여부

`indexOf(value)`
→ 위치 찾기
