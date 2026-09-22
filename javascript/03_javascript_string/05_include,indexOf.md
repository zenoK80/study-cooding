# includes()
문자열 안에 특정 문자열이 있는지 확인한다.
```js
const text = "javascript"
const result = text.includes("script");
console.log(result)
// true
```
- 있으면 `true`
- 없으면 `false`

---

# indexOf()
특정 문자열이 시작되는 위치를 찾는다.
```js
const text = "javascript";
const index = text.indexOf("script");
// console.log(index); 4
```
- 찾으면 시작 index 반환
- 없으면 -1

---

# 없는 값
```js
const text = "javascript";
console.log(text.includes("react"));
// false
console.log(text.indexOf("react"));
// -1
```

---

# 특정 위치부터 찾기
```js
const text = "banana";
const index = text.indexOf("a",2);
console.log(index);
// 3

```
- 인자1: 찾을 문자열
- 인자2: 검색을 시작할 index

---

# 핵심
includes("문자열")
→ 포함 여부 확인
→ true / false

indexOf("문자열")
→ 시작 위치 확인
→ index / -1
