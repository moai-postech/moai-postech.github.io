# 2026-11-03 학교 약칭 통일
작성자: Sangwoo Mo(sangwoomo) | 대상: `_data/seminar.yml`, `_data/members.yml`, 랩 세미나 구글시트 | 도구: Claude Code

> **한줄 결론: University of Michigan 약칭을 교수 프로필과 같은 `U Michigan` 으로 통일.**

POSTECH 요구사항: 영향 없음

## 요청
교수: 세미나 소속 표기를 교수 프로필(Faculty 이력의 `U Michigan`)과 같은 방식으로 통일.

## 반영 내역
- 세미나 시트 `affiliation_en`: `UMich` 두 칸을 `U Michigan` 으로, `Brown univ.` 를 `Brown` 으로. 시트가 정본이라 시트를 먼저 고쳤고, `_data/seminar.yml` 도 같은 값으로 맞춰 다음 동기화에서 바뀌는 것이 없다.
- Other Mentees 의 `PhD @ UMich` 세 줄을 `PhD @ U Michigan` 으로.
- `Georgia Tech`, `UC Berkeley`, `Stanford`, `KAIST`, `CAU` 는 학교가 쓰는 약칭 그대로 둔다.

## 기각한 안과 이유
`UMich`: 학계에서 흔하지만 교수 프로필 표기와 달라 한 사이트에 두 표기가 생긴다. `GeorgiaTech`: 학교 공식 약칭은 띄어 쓴다.

## 남은 것
`Korea univ.`, `Kyunghee univ.`(talks.yml, members.yml 학력)는 이번 범위 밖이라 그대로 둔다.

## 정리
iCloud 충돌 사본 `2026-11-03-physical-ai-two-parts 2.md` 를 지웠다. 원본이 사본 내용을 모두 담고 2–4차 기록이 더 있다.
