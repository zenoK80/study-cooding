# SPA
`spa`는 Single Page Application의 줄임말이다.
페이지를 이동할 때 HTML 전체를 새로 받는 대신, 필요한 화면만 바꾼다.

SPA -> 하나의 페이지에서 화면을 바꿔가며 사용

ex: /home, /users, /settings
주소는 바뀌어도 전체 페이지를 매번 새로 불러오지 않는다.

---

# CSR
CSR은 Client Side Rendering의 줄임말이다.
브라우저가 JavaScript를 실행해서 화면을 만든다.

서버 → JavaScript 전달
브라우저 → JavaScript 실행 → 화면 생성

---

# 일반적인 흐름
```
브라우저 접속
↓
HTML / JavaScript 받음
↓
React 실행
↓
화면 생성
↓
상태가 바뀌면 필요한 부분만 다시 렌더링
```

---

# SPA와 CSR 차이
SPA : 애플리케이션 구조
CSR : 화면을 만드는 방식

React 앱은 SPA 구조로 만들 수 있고, CSR 방식으로 화면을 렌더링할 수 있다.

---

핵심
SPA
→ 한 페이지에서 화면 전환

CSR
→ 브라우저에서 JavaScript로 화면 생성
