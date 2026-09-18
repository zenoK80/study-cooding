# find()
조건에 맞는 첫 번째 값을 찾는다.
```js
const numbers = [3,8,2,10];
const result = numbers.find(number=>number>5);
// console.log(result); // 8
```
- 조건이 `true`가 되는 첫 번재 값 반환
- 못 찾으면 `undefined`

---

# findIndex()
조건에 맞는 첫 번째 위치(index)를 찾는다.
```js
const numbers = [3, 8, 2, 10];
const index = numbers.findIndex(number => number > 5);
// console.log(index); 1
```
- 값 8의 위치는 1
- 못 찾으면 -1

---

# 객체에서 찾기
```js
const users = [
	{ id: 1, name: "A"},
	{ id: 2, name: "B"}
];

const user = users.find(item => item.id === 2);
// console.log(user); { id: 2, name: "B"}
```


---

# 차이

`find()` → 값 반환

`findIndex()` → 위치 반환

예:
```js
const numbers = [5, 10, 15];

numbers.find(number => number >= 10);
// 10

numbers.findIndex(number => number >= 10);
// 1
```

---

# 핵심
`find()`
→ 조건에 맞는 첫 번째 값
→ 없으면 undefined

`findIndex()`
→ 조건에 맞는 첫 번째 index
→ 없으면 -1
