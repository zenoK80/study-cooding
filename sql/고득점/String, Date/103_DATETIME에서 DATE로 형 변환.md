# 103. DATETIME에서 DATE로 형 변환

[프로그래머스 원문](https://school.programmers.co.kr/learn/courses/30/lessons/59414?language=mysql)

- 분류: String, Date
- 문제 번호: 59414

## 문제 안내

> ANIMAL_INS 테이블은 동물 보호소에 들어온 동물의 정보를 담은 테이블입니다. ANIMAL_INS …

문제 조건·제한사항·상세 설명은 위 공식 원문에서 확인합니다. 아래는 풀이를 기록할 학습 노트입니다.

## 입력·출력 / 데이터 표

| NAME | TYPE | NULLABLE |
| --- | --- | --- |
| ANIMAL_ID | VARCHAR(N) | FALSE |
| ANIMAL_TYPE | VARCHAR(N) | FALSE |
| DATETIME | DATETIME | FALSE |
| INTAKE_CONDITION | VARCHAR(N) | FALSE |
| NAME | VARCHAR(N) | TRUE |
| SEX_UPON_INTAKE | VARCHAR(N) | FALSE |

| ANIMAL_ID | ANIMAL_TYPE | DATETIME | INTAKE_CONDITION | NAME | SEX_UPON_INTAKE |
| --- | --- | --- | --- | --- | --- |
| A349996 | Cat | 2018-01-22 14:32:00 | Normal | Sugar | Neutered Male |
| A350276 | Cat | 2017-08-13 13:50:00 | Normal | Jewel | Spayed Female |
| A350375 | Cat | 2017-03-06 15:01:00 | Normal | Meo | Neutered Male |
| A352555 | Dog | 2014-08-08 04:20:00 | Normal | Harley | Spayed Female |
| A352713 | Cat | 2017-04-13 16:29:00 | Normal | Gia | Spayed Female |

| ANIMAL_ID | NAME | 날짜 |
| --- | --- | --- |
| A349996 | Sugar | 2018-01-22 |
| A350276 | Jewel | 2017-08-13 |
| A350375 | Meo | 2017-03-06 |
| A352555 | Harley | 2014-08-08 |
| A352713 | Gia | 2017-04-13 |

## 문제 코드

```sql
-- 코드를 입력하세요
SELECT
```

사용 DBMS: MySQL. Oracle 지원 여부는 원문 언어 선택 목록에서 확인합니다.

## 내가 푼 답

<!-- 직접 푼 코드를 기록합니다. -->

## 정리

<!-- 배운 문법, 실수, 복잡도 또는 SQL 실행 결과를 기록합니다. -->
