# 9. rny_string

[프로그래머스 원문](https://school.programmers.co.kr/learn/courses/30/lessons/181863?language=javascript)

- 분류: 코딩 기초 트레이닝 · 문자열 · Lv. 0
- 상태: [x] 풀이 완료

## 문제 설명

'm'과 "rn"이 모양이 비슷하게 생긴 점을 활용해 문자열에 장난을 하려고 합니다. 문자열 `rny_string`이 주어질 때, `rny_string`의 모든 'm'을 "rn"으로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.

## 제한사항

- 1 ≤ `rny_string`의 길이 ≤ 100
- `rny_string`은 영소문자로만 이루어져 있습니다.

## 입출력 예

| rny_string | result |
| --- | --- |
| `"masterpiece"` | `"rnasterpiece"` |
| `"programmers"` | `"prograrnrners"` |
| `"jerry"` | `"jerry"` |
| `"burn"` | `"burn"` |

## 입출력 예 설명

- 예제 #1: masterpiece의 첫 글자 m을 rn으로 바꾸면 rnasterpiece입니다.
- 예제 #2: programmers의 m 두 개를 각각 rn으로 바꾸면 prograrnrners입니다.
- 예제 #3, #4: m이 없으므로 원래 문자열과 같은 내용이 반환됩니다. 이미 있는 rn을 바꾸는 문제는 아닙니다.

## 문제 코드

```javascript
function solution(rny_string) {
  var answer = '';
  return answer;
}
```

## 나의 풀이

```javascript
function solution(rny_string) {
  return rny_string.replaceAll('m', 'rn');
}
```

정답입니다. 모든 m을 찾아 rn으로 바꾼 결과를 바로 반환합니다. 별도 반복문이나 m이 있는지 확인하는 조건문은 필요 없습니다.

## 다른 방법

### (1) split + join — 나누고 다시 연결

```javascript
function solution(rny_string) {
  return rny_string.split('m').join('rn');
}
```

`'ama'.split('m')` → `['a', 'a']`, 여기에 `join('rn')`을 하면 원소 사이에 rn이 들어가 `'arna'`가 됩니다.

### (2) 정규식 + replace — 전체 치환

```javascript
function solution(rny_string) {
  return rny_string.replace(/m/g, 'rn');
}
```

`/m/g`는 m을 전체에서 찾는 정규식입니다. g가 없으면 첫 번째 m만 바뀝니다.

### (3) for...of + push + join — 한 글자씩 처리

```javascript
function solution(rny_string) {
  const result = [];
  for (const char of rny_string) {result.push(char === 'm' ? 'rn' : char);}
  return result.join('');
}
```

m이면 rn, 아니면 원래 글자를 배열에 담습니다. 마지막에 배열을 문자열로 합칩니다.

## 배울 것들

- `문자열.replaceAll(찾을문자열, 바꿀문자열)`: 일치하는 모든 부분을 바꾼 새 문자열을 반환하는 문자열 메서드입니다. 원본 문자열은 바뀌지 않습니다.
- `'mm'.replaceAll('m', 'rn')` → `'rnrn'`. 한 글자를 두 글자로 바꿔도 됩니다.
- `'mm'.replace('m', 'rn')` → `'rnm'`. replace에 일반 문자열을 넣으면 첫 번째 일치만 바꿉니다.
- `/m/g`: m은 찾을 패턴, g는 전체 일치를 처리하는 global 플래그입니다. `replace(/m/g, 'rn')`은 모든 m을 바꿉니다.
- `split('m')`: m을 기준으로 문자열을 나눈 배열을 반환합니다. `'mm'.split('m')` → `['', '', '']`.
- `join('rn')`: 배열 원소 **사이마다** rn을 넣어 문자열로 합칩니다. `['', '', ''].join('rn')` → `'rnrn'`.
- `join('')`: 빈 문자열을 구분자로 사용하므로 아무것도 끼워 넣지 않고 합칩니다.
- `for...of`: 문자열도 한 글자씩 꺼낼 수 있습니다. 이 문제는 영소문자만 있어 글자 단위로 생각하면 됩니다.
- `push(값)`: 배열 끝에 값을 추가합니다. `push('rn')`은 r과 n 두 칸이 아니라 문자열 'rn' 한 칸을 추가합니다.
- 문제 이름 rny_string은 my_string의 m을 rn으로 바꿔 쓴 모양입니다. 변수명 자체에 특별한 JavaScript 기능은 없습니다.

## 시간·공간 복잡도 쉽게 보기

- n은 입력 문자열의 글자 수입니다. `'mm'`이면 n = 2입니다.
- **시간 O(n)**: 이 문제처럼 고정된 한 글자 m을 찾는 일반적인 구현에서는 문자열 길이에 비례해 확인·치환하는 일이 늘어납니다. 코드가 한 줄이어도 문자열 전체를 처리합니다.
- m이 한 번 나오면 결과가 한 글자 길어집니다. `'mm'` 2글자 → `'rnrn'` 4글자처럼 결과 길이는 최대 2n입니다.
- **결과를 포함한 추가 공간 O(n)**: 새로 만든 결과 문자열을 저장해야 합니다. 최대 2n글자지만 고정 배수 2는 생략해 O(n)이라고 씁니다.
- (1)은 중간 조각 배열, (3)은 글자를 담는 배열도 만듭니다. 둘 다 시간·추가 공간은 O(n)이지만, 네 풀이에 비해 명시적인 중간 배열이 더 생깁니다.
- (2)도 단순한 /m/g 패턴에서는 시간 O(n), 결과 포함 추가 공간 O(n)으로 설명합니다. 모든 정규식이 항상 O(n)이라는 뜻은 아닙니다.
- 이 표기는 입력이 커질 때의 증가 정도입니다. 같은 O(n)이라도 실제 속도·메모리 사용량이 완전히 같지는 않습니다.

**가장 추천하는 풀이: 네 replaceAll 풀이 — ‘모든 m을 rn으로 변경’이라는 문제의 요구가 그대로 드러나고, 직접 배열이나 반복문을 만들 필요가 없습니다.**
