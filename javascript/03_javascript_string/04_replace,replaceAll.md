# replace()
문자열에서 처음 찾은 값 하나만 바꾼다.

```js
const text = "apple apple";
const result = text.replace("apple","banana");
console.log(result);
// "banana apple"
```
- `인자1`: 찾을 값
- `인자2`: 바꿀 값

---

# replaceAll()
찾은 값을 전부 바꾼다.
```js
const text = "apple apple";
const result = text.replaceAll("apple","banana");
console.log(result);
// "banana banana"
```

---

# 문자 하나 바꾸기
```js
const text = "banana";
const result = text.replace("a","o");
console.log(result);
// bonana
```

---

# 전부 바꾸기
```js
const text = "banana";

const result = text.replaceAll("a", "o");

// console.log(result); "bonono"
```

---

# 핵심
- `replace(찾을값, 바꿀값)`
→ 처음 찾은 값 하나만 변경

- `replaceAll(찾을값, 바꿀값)`
 → 찾은 값 전부 변경 둘 다
 → 원본 문자열은 바뀌지 않고 새 문자열 반환
