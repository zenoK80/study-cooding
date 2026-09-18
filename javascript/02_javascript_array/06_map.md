# map()
배열의 각 값을 바꿔서 새 배열을 만든다.
```js
const numbers = [1,2,3];
const doubled = numbers.map(number => number * 2);
// console.log(doubled); [2,4,6]
```
- 원본 배열은 바뀌지 않는다.
- 각 값을 하나씩 받아서 새로운 값으로 바꾼다.

---

# 일반 함수처럼 보기
```js
const numbers = [1,2,3];
const result = numbers.map(number =>{
	return number + 10;
});
// console.log(result); [11, 12, 13]
```

---

# index 사용하기
```js
const numbers = [10,20,30];
const result = numbers.map((number,index)=>{
	return number + index;
});

// console.log(result); [10,21,32]
```
- 첫 번째 값: 10 + 0
- 두 번째 값: 20 + 1
- 세 번째 값: 30 + 2

---

# 문자열 배열을 숫자로 바꾸기
```js
const input = ["1","2","3"];
const numbers = input.map(Number);
// console.log(numbers); [1,2,3]

```
이건 아래와 비슷하다.
`const numbers = input.map(value => Number(value));``

---

# 핵심
- map()
→ 배열의 각 값을 변환
→ 새 배열 반환
→ 원본 배열은 유지

- number
→ 현재 값

- index
→ 현재 위치

