# reverse()
배열의 순서를 반대로 뒤집는다.
```js
const numbers = [1,2,3,4];
numbers.reverse();
// console.log(numbers); [4,3,2,1]
```
- 첫 번째 값과 마지막 값의 위치가 뒤집힌다.
- 원본 배열 자체가 바뀐다.

---

# 문자열 뒤집기
문자열은 바로 reverse()를 사용할 수 없다.
```js
const text = "hello";
const reversed = text.split("").reverse().join("");
// console.log(reversed); "olleh"
```
흐름:

1. "hello"
2. ↓ split("")
3. ["h", "e", "l", "l", "o"]
4. ↓ reverse()
5. ["o", "l", "l", "e", "h"]
6. ↓ join("")
7. "olleh"

---

# 원본 유지하기
```js
const numbers = [1, 2, 3];

const reversed = [...numbers].reverse();

// console.log(numbers); [1, 2, 3]
// console.log(reversed); [3, 2, 1]
```

1. `[...numbers]`로 먼저 복사한다.
2. 복사본에 reverse()를 사용한다.

---

# 핵심
`reverse()` → 배열 순서를 반대로 뒤집음 → 원본 배열 변경

## 문자열 뒤집기
→ split("") : 문자열을 한 글자씩 잘라 배열로 만든다.
→ reverse() : 배열의 순서를 반대로 뒤집는다.
→ join("") : 배열의 글자들을 구분자 없이 다시 문자열로 합친다.

`split(구분자)` → 무엇을 기준으로 자를지
`join(구분자)` → 무엇을 사이에 넣고 합칠지
