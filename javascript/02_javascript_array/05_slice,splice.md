# slice()
배열의 일부를 잘라서 새 배열로 만든다.

```js
const numbers = [10,20,30,40];
const result = numbers.slice(1,3);
// console.log(result); [20,30];
// console.log(numbers); [10,20,30,40];
```
- 시작 위치 포함
- 끝 위치 제외
- 원본 배열은 바뀌지 않는다.

---

# 끝까지 자르기
```js
const numbers = [10,20,30,40];
const result = numbers.slice(2)
// console.log(result); [30, 40]
```
- 두 번째 인자(어디까지 자를지)를 생략하면 배열의 맨 마지막 요소까지 전부 가져오도록 자바스크립트 규칙이 정해져 있음

---

# 음수 인덱스
```js
const numbers = [10,20,30,40];
const result = numbers.slice(-2);
// console.log(result); [30,40]
```
- `-1`은 마지막 값
- `-2`는 뒤에서 두 번째 값

---

# splice()
원본 배열에서 값을 삭제하거나 추가한다.
```js
const numbers = [10,20,30,40];
const removed = numbers.splice(1,2);

// console.log(removed); [20,30]
// console.log(numbers); [10,40]
```
- 형태: array.splice(시작위치,삭제개수);

---

# splice()로 값 추가
```js
const numbers = [10,40];
numbers.splice(1,0,20,30);
// console.log(numbers); [10, 20, 30, 40]
```
- 삭제 개수를 0으로 하면 삭제하지 않고 추가한다.

---

# 값 교체
```js
const numbers = [10, 20, 30]; numbers.splice(1, 1, 100);
// console.log(numbers); [10, 100, 30]
````
- 20 하나를 삭제하고 100을 넣었다.

---

# 핵심
- slice()
→ 일부를 잘라 새 배열 반환
→ 원본 유지

- splice()
→ 원본 배열 직접 변경
→ 삭제된 값들을 배열로 반환

