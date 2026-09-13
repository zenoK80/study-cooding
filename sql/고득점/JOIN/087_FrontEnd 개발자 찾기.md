# 087. FrontEnd 개발자 찾기

[프로그래머스 원문](https://school.programmers.co.kr/learn/courses/30/lessons/276035?language=mysql)

- 분류: JOIN
- 문제 번호: 276035

## 문제 안내

> SKILLCODES 테이블은 개발자들이 사용하는 프로그래밍 언어에 대한 정보를 담은 테이블입니다. …

문제 조건·제한사항·상세 설명은 위 공식 원문에서 확인합니다. 아래는 풀이를 기록할 학습 노트입니다.

## 입력·출력 / 데이터 표

| NAME | TYPE | UNIQUE | NULLABLE |
| --- | --- | --- | --- |
| NAME | VARCHAR(N) | Y | N |
| CATEGORY | VARCHAR(N) | N | N |
| CODE | INTEGER | Y | N |

| NAME | TYPE | UNIQUE | NULLABLE |
| --- | --- | --- | --- |
| ID | VARCHAR(N) | Y | N |
| FIRST_NAME | VARCHAR(N) | N | Y |
| LAST_NAME | VARCHAR(N) | N | Y |
| EMAIL | VARCHAR(N) | Y | N |
| SKILL_CODE | INTEGER | N | N |

| NAME | CATEGORY | CODE |
| --- | --- | --- |
| C++ | Back End | 4 |
| JavaScript | Front End | 16 |
| Java | Back End | 128 |
| Python | Back End | 256 |
| C# | Back End | 1024 |
| React | Front End | 2048 |
| Vue | Front End | 8192 |
| Node.js | Back End | 16384 |

| ID | FIRST_NAME | LAST_NAME | EMAIL | SKILL_CODE |
| --- | --- | --- | --- | --- |
| D165 | Jerami | Edwards | jerami_edwards@grepp.co | 400 |
| D161 | Carsen | Garza | carsen_garza@grepp.co | 2048 |
| D164 | Kelly | Grant | kelly_grant@grepp.co | 1024 |
| D163 | Luka | Cory | luka_cory@grepp.co | 16384 |
| D162 | Cade | Cunningham | cade_cunningham@grepp.co | 8452 |

| ID | EMAIL | FIRST_NAME | LAST_NAME |
| --- | --- | --- | --- |
| D161 | carsen_garza@grepp.co | Carsen | Garza |
| D162 | cade_cunningham@grepp.co | Cade | Cunningham |
| D165 | jerami_edwards@grepp.co | Jerami | Edwards |

## 문제 코드

```sql
-- 코드를 작성해주세요
```

사용 DBMS: MySQL. Oracle 지원 여부는 원문 언어 선택 목록에서 확인합니다.

## 내가 푼 답

<!-- 직접 푼 코드를 기록합니다. -->

## 정리

<!-- 배운 문법, 실수, 복잡도 또는 SQL 실행 결과를 기록합니다. -->
