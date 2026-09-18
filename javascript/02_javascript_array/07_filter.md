# filter()
조건에 맞는 값만 골라서 새 배열을 만든다.
```js
const numbers = [1,2,3,4,5];
const result = numbers.filter(number=>number>=3);
// console.log(result); [3,4,5]
```
- 조건이 `true`인 값만 남는다.
- 원본 배열은 바뀌지 않는다.

---

# 짝수만 골라내기
```js
const numbers = [1,2,3,4,5,6];
const evens = numbers.filter(number =>{
	return number % 2 === 0;
})
```

---

# index 사용하기
```js
const numbers = [10,20,30,40];
const result = numbers.filter((number,index)=>{
	return index % 2 === 0;
});
// console.log(result); [10,30]
```

---
- `index`가 0,2인 값만 남긴다.

---

# 문자열 길이로 걸러내기
```js
const words = ["a","apple","hi","banana"];
const result = words.filter(word => word.length >= 3);
// console.log(result); ["apple","banana"]
```

---

# 핵심
- filter()
-> 조건에 맞는 값만 남김
-> 새 배열 반환
-> 원본 배열은 유지

- true
-> 남김

- false
-> 제외
