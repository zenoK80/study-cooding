# reduce()
배열의 값을 하나씩 합쳐서 하나의 결과값을 만든다.
```js
const numbers = [1,2,3,4];
const sum = numbers.reduce((total,number)=>{
	return total + number;
},0);
// console.log(sum); 10
```
- total : 지금까지 누적된 값
- number : 현재 배열 값
- 0 : 처음 시작값

---

# 동작 순서
처음 total = 0

0 + 1 = 1
1 + 2 = 3
3 + 3 = 6
6 + 4 = 10

결과:

10

---

# 한 줄로 줄이기
```js
const numbers = [1,2,3,4];
const sum = numbers.reduce((total,number)=>total+number,0);
// console.log(sum); 10
```

---

# 곱하기
```js
const numbers = [1,2,3,4];
const result = numbers.reduce((total,number)=>total * number,1);
// console.log(result); 24
```
- 곱셈은 시작값을 1로 잡는다.

---

# 최댓값 구하기
```js
const numbers = [3,8,2,10,5];
const maxValue = numbers.reduce((max,number)=>{
	return number > max ? number : max;
},numbers[0]);
// console.log(maxValue); 10
```

---

# 핵심
- reduce()
→ 배열의 값을 누적해서 하나의 값으로 만듦

- (total, number)
→ 누적값, 현재값

- 마지막 값
→ 초기값

- 합계
→ 초기값 0

- 곱
→ 초기값 1

