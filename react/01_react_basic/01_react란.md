# React
React는 사용자 화면을 만들기 위한 Javascript 라이브러리다
```jsx
function App(){
  return <h1>Hello React</h1>;
}
```
- `React` : 화면을 컴포넌트 단위로 만들 수 있게 도와준다.
- `UI` : 사용자가 보는 화면.
- `Component` : 화면을 나눈 작은 조각.

---

# React를 쓰는 이유
HTML을 직접 계속 수정하는 대신, 데이터가 바뀌면 화면도 같이 바뀌게 만들 수 있다.
```jsx
function App(){
  const name = "React"
  return <h1>Hello {name}</h1>;
}
// Hello React
```

---

# 컴포넌트 방식
화면을 작은 단위로 나눠서 만든다.
```jsx
function Header() {
  return <header>Header</header>;
}

function App() {
  return ( <> <Header /> <main>Content</main> </> );
}
```
- `Header`도 하나의 컴포넌트
- 컴포넌트를 조합해서 화면을 만든다.

---

# 핵심
React → UI를 만드는 JavaScript 라이브러리
Component → 화면을 나눈 작은 단위
React의 특징 → 컴포넌트 조합 → 데이터 변화에 따라 화면 갱신 → 재사용 가능한 UI 작성
