# 022. Python 개발자 찾기

[프로그래머스 원문](https://school.programmers.co.kr/learn/courses/30/lessons/276013?language=mysql)

- 분류: SELECT
- 문제 번호: 276013

## 문제 안내

> DEVELOPER_INFOS 테이블은 개발자들의 프로그래밍 스킬 정보를 담은 테이블입니다. DEVELOPER_INFOS 테이블 …

문제 조건·제한사항·상세 설명은 위 공식 원문에서 확인합니다. 아래는 풀이를 기록할 학습 노트입니다.

## 입력·출력 / 데이터 표

| NAME | TYPE | UNIQUE | NULLABLE |
| --- | --- | --- | --- |
| ID | VARCHAR(N) | Y | N |
| FIRST_NAME | VARCHAR(N) | N | Y |
| LAST_NAME | VARCHAR(N) | N | Y |
| EMAIL | VARCHAR(N) | Y | N |
| SKILL_1 | VARCHAR(N) | N | Y |
| SKILL_2 | VARCHAR(N) | N | Y |
| SKILL_3 | VARCHAR(N) | N | Y |

| ID | FIRST_NAME | LAST_NAME | EMAIL | SKILL_1 | SKILL_2 | SKILL_3 |
| --- | --- | --- | --- | --- | --- | --- |
| D165 | Jerami | Edwards | jerami_edwards@grepp.co | Java | JavaScript | Python |
| D161 | Carsen | Garza | carsen_garza@grepp.co | React |  |  |
| D164 | Kelly | Grant | kelly_grant@grepp.co | C# |  |  |
| D163 | Luka | Cory | luka_cory@grepp.co | Node.js |  |  |
| D162 | Cade | Cunningham | cade_cunningham@grepp.co | Vue | C++ | Python |

| ID | EMAIL | FIRST_NAME | LAST_NAME |
| --- | --- | --- | --- |
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
