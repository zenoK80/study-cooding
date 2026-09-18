# some()
배열에서 하나라도 조건을 만족하면 true를 반환한다.
```js
const numbers = [1,3,5,8];
const result = numbers.some(number=>number%2===0);numbers
// console.log(result); // true
```
- 8이 짝수라서 `true`

---

# every()
배열의 모든 값이 조건을 만족해야 true
```js
const numbers = [2,4,6];
const result = numbers.every(number => number % 2 === 0);
// console.log(result); true
```

---

# some()예시
```js
const scores = [50, 70, 100];
const hasPerfectScore = scores.some(score => score === 100);
// console.log(hasPerfectScore); true
```

---

# every()예시
```js
const scores = [80, 90, 70];
const allPassed = scores.every(score => score >= 60);
// console.log(allPassed); true
```

---

# 차이
`some()` → 하나라도 true면 true

`every()` → 전부 true여야 true

---

# 핵심
`some()`
→ 하나라도 조건 만족?
→ true / false

`every()`
→ 모두 조건 만족?
→ true / false
