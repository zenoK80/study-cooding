# concat()
배열과 배열을 합쳐서 새 배열을 만든다.
```js
const first = [1,2];
const second = [3,4];

const result = first.concat(second);
console.log(result);
// [1,2,3,4]
```
- 원본 배열은 바뀌지 않는다.

---

# 여러 배열 합치기
```js
const first = [1,2];
const second = [3,4];
const third = [5,6];

const result = first.concat(second,third);
console.log(result);
// [1, 2, 3, 4, 5, 6]
```

---

# 값도 추가 가능
```js
const numbers = [1, 2];
const result = numbers.concat(3, 4);
// console.log(result); [1, 2, 3, 4]
```

---

# Spread와 비교
```js
const first = [1,2];
const second = [3,4];

const result1 = first.concat(secnd);
const result2 = [...first,...second];
// 둘 다 [1, 2, 3, 4]
```

---

# 핵심
`concat()`
→ 배열 합치기
→ 새 배열 반환
→ 원본 배열 유지

`first.concat(second)` → first + second

`[...first, ...second]` → concat과 비슷하게 사용 가능

