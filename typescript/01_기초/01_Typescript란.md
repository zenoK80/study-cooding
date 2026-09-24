# TypeScript란
Typescript는 JavaScript에 타입 기능을 추가한 언어다.
```typescript
const name: string = "Kim";
const age: number = 20;
```
- string: 문자열 타입
- number: 숫자 타입

---

# Javascript와 차이
JavasScript는 타입을 따로 적지 않는다.
```javascript
let age = 02;
age = "twenty";
```
TypeScript는 타입을 지정하면 다른 타입을 넣을 때 에러가 난다.
```typescript
let age: number = 20;
// age = "twenty";
// Error
```

---

# 왜 사용하는가
```typescript
코드를 실행하기 전에 잘못된 타입을 미리 찾을 수 있다.
function add(firstNumber:number, secondNumber:number){
  return firstNumber + SecondNumber
}
add(10, 20);\
// add("10", 20); // Error
```
- 숫자를 받아야 하는 함수에 문자열을 넣으면 미리 알려준다.

---

# 타입 추론
Typescript는 타입을 직접 적지 않아도 값을 보고 추측할 수 있다.
```typescript
const name = "Kim";
const age = 20;
```
TypeScript는 내부적으로
name -> string
age -> number 라고 판단한다.
이걸 타입 추론(Type Inference)이라고 한다.

---

# TypeScript는 그대로 실행되지 않음
브라우저는 TypeScript를 직접 실행하지 않는다.

TypeScript
↓
JavaScript로 변환
↓
브라우저 실행

이 변환 과정을 보통 컴파일(Compile) 이라고 한다.

---

# 파일 확장자
.js -> Javascript

.ts -> Typescript

.tsx -> JSX를 사용하는 TypeScript
React + TypeScript에서는 .tsx를 많이 사용한다.

---

# 핵심
TypeScript
→ JavaScript + Type

타입
→ 값의 종류를 미리 정함

장점
→ 타입 오류를 실행 전에 확인 가능
→ 코드 이해와 유지보수에 도움

타입 추론
→ 값을 보고 TypeScript가 타입을 자동 판단

.ts
→ TypeScript 파일

.tsx
→ JSX를 사용하는 TypeScript 파일
