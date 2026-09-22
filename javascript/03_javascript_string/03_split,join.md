# split()
문자열을 기준에 따라 잘라서 배열을 만든다.
```js
const text = "a,b,c";
const result = text.split(",");

console.log(result)
// ["a","b","c"]
```
- `인자`: 어떤 문자를 기준으로 자를지 정한다.

---

# 한 글자씩 자르기
```js
const text = "hello";
const result = text.split("");
console.log(result)
// ["h","e","l","l","o"]
```
- `""`: 한 글자씩 자른다.

---

# 아무것도 안 넣으면
```js
const text = "hello";
const result = text.split();
console.log(result);
// ["hello"]
```
- 문자열 전체가 배열 한 칸에 들어간다.

---

# join()
배열의 값을 하나의 문자열로 합친다.
```js
const letters = ["h","e","l","l","o"];
const result = letters.join("");
console.log(result)
// "hello"
```
- 인자: 값 사이에 무엇을 넣을지 정한다.

---

# 구분자 넣어서 합치기
```js
const words = ["apple","banana","orange"];
const result = words.join("-");
console.log(result);
// "apple-banana-orange"
```

---

# 아무것도 안 넣으면
```js
const numbers = [1,2,3];
const result = numbers.join();
console.log(result);
// "1,2,3"
```
- 기본 구분자는 ,

---

# 핵심
`split(구분자)` -> 문자열을 배열로 자름
`split("")` -> 한 글자씩 자름
`join(구분자)` -> 배열을 문자열로 합침
`join("")` -> 구분자 없이 함침
