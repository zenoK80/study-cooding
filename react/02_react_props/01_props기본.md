# Props
`Props`는 부모 컴포넌트가 자식 컴포넌트에게 값을 전달할 때 사용한다.
```jsx
function User(props){
  return <h1>{props.name}</h1>;
}

function App(){
  return <User name="kim"/>;
}
```
- `name="Kim"` : 부모가 전달한 값
- `props`: 자식이 받은 값
- `props.name`: 전달받은 `name`

---

# 숫자 전달
문자열이 아닌 JavaScript 값은 {} 안에 넣는다.
```jsx
function User(props){
  return <p>{props.age}</p>;
}

function App(){
  return <User age={20}/>;
}
```
- `"20"` -> 문자열
- `{20}` -> 숫자

---

# 여러 값 전달
```jsx
function User(props){
  return(
    <div>
      <p>{props.name}</p>
      <p>{props.age}</p>
    </div>
  )
}

function App(){
  return <User name="Kim" age={20}>;
}
```

---

# 핵심
- `Props` → 부모가 자식에게 값을 전달
- `props.name` → 전달받은 값 사용
- 문자열 → `name="Kim"`
- 숫자 / 변수 / 배열 / 객체 → `value={값}`
