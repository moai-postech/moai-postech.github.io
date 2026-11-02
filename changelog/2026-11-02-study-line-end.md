# 2026-11-02 AI Study 단계 연결선을 마지막 카드 끝까지
작성자: Sangwoo Mo(sangwoomo) | 대상: `_themes/wide/includes/course/course.css`, `_themes/wide/includes/course/STUDY.md` | 도구: Claude Code

> **한줄 결론: Schedule 학습 흐름과 Home 학기 타임라인에서 마지막 칸의 선이 끊기던 것을 카드 오른쪽 끝까지 잇고, Home 이 2열로 접힐 때 줄 끝 선이 카드 밖으로 나가던 것을 고쳤다.**

## 요청
교수: 학부 스터디 단계(01 02 03) 마지막에 선이 잘리는 게 이상하다. 오른쪽 끝까지 쭉 이어지는 디자인이 낫다.

## 반영 내역
- `.study-learning-path li:last-child .study-step-mark::before`: `display: none` 대신 `right: 0`. 03 뒤 선이 카드 오른쪽 끝에서 끝난다.
- `.study-term-card:last-child .study-term-step::before`: 같은 처리. 현재 학기(Now) 선은 강조색이다.
- 1024px 이하 2열 배치: 짝수 번째 카드 선이 다음 칸 간격(24px)만큼 카드 밖으로 나가던 것을 `right: 0` 으로 막았다.
- `STUDY.md`: 실제로 없던 "화살표" 표현을 지우고 선 끝 처리를 적었다.

## 기각한 안과 이유
- 마지막 선 끝에 화살표: 03 다음에 올 단계가 없어 화살표가 다음 내용을 암시한다.

## 확인
- 로컬 빌드(scratchpad)에서 Schedule 1280px·모바일, Home 2열 배치를 화면으로 봤다. 휴대폰 1열에서는 기존대로 가로선을 숨긴다.
- 읽은 규칙: 저장소 `AGENTS.md`, `STUDY.md`. 검사: `check_changelog.py`.
