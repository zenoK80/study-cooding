# 073. ROOT 아이템 구하기

[프로그래머스 원문](https://school.programmers.co.kr/learn/courses/30/lessons/273710?language=mysql)

- 분류: IS NULL
- 문제 번호: 273710

## 문제 안내

> 어느 한 게임에서 사용되는 아이템들은 업그레이드가 가능합니다. 'ITEM_A'->'ITEM_B'와 같이 업그레이드가 …

문제 조건·제한사항·상세 설명은 위 공식 원문에서 확인합니다. 아래는 풀이를 기록할 학습 노트입니다.

## 입력·출력 / 데이터 표

| Column name | Type | Nullable |
| --- | --- | --- |
| ITEM_ID | INTEGER | FALSE |
| ITEM_NAME | VARCHAR(N) | FALSE |
| RARITY | INTEGER | FALSE |
| PRICE | INTEGER | FALSE |

| Column name | Type | Nullable |
| --- | --- | --- |
| ITEM_ID | INTEGER | FALSE |
| PARENT_ITEM_ID | INTEGER | TRUE |

| ITEM_ID | ITEM_NAME | RARITY | PRICE |
| --- | --- | --- | --- |
| 0 | ITEM_A | COMMON | 10000 |
| 1 | ITEM_B | LEGEND | 9000 |
| 2 | ITEM_C | LEGEND | 11000 |
| 3 | ITEM_D | UNIQUE | 10000 |
| 4 | ITEM_E | LEGEND | 12000 |

| ITEM_ID | PARENT_ITEM_ID |
| --- | --- |
| 0 | NULL |
| 1 | 0 |
| 2 | 0 |
| 3 | NULL |
| 4 | 3 |

| ITEM_ID | ITEM_NAME |
| --- | --- |
| 0 | ITEM_A |
| 3 | ITEM_D |

## 문제 코드

```sql
-- 코드를 작성해주세요
```

사용 DBMS: MySQL. Oracle 지원 여부는 원문 언어 선택 목록에서 확인합니다.

## 내가 푼 답

<!-- 직접 푼 코드를 기록합니다. -->

## 정리

<!-- 배운 문법, 실수, 복잡도 또는 SQL 실행 결과를 기록합니다. -->
