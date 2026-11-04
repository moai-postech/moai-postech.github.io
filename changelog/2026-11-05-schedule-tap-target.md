# 2026-11-05 휴대폰 스케줄 PDF·Lab 터치 영역
작성자: Sangwoo Mo(sangwoomo) | 대상: `_themes/wide/includes/course/course.css` | 도구: Claude Code

> **한줄 결론: 680px 이하 강의 스케줄의 PDF·Lab 링크 터치 영역을 26x17px 에서 38x48px 로 키웠다. 화면에 보이는 모양은 그대로다.**

## 요청
휴대폰 점검(2026-11-04)에서 PDF·Lab 링크가 손가락으로 누르기 작다고 짚었고, 교수가 키우라고 했다.

## 반영 내역
- `course.css` 680px 이하: `.cs-mat a` 에 위아래 13px, 좌우 6px 안쪽 여백을 주고 같은 크기의 음수 바깥 여백으로 상쇄했다. 글자와 행 위치는 바뀌지 않고 누르는 영역만 커진다.
- 확인: 로컬 빌드를 375px 에서 열어 Data Engineering(링크 20개)과 Programming for AX(링크 28개, PDF·Lab 이 같이 있는 행 6개)를 쟀다. 규칙을 켜고 끈 두 상태에서 모든 행 높이와 링크 글자 위치가 같다. 같은 행의 PDF·Lab 영역은 6px 떨어져 겹치지 않고, 가로 넘침이 없다. 링크 글자 아래 끝을 눌러도 링크가 잡힌다.
- 읽은 규칙: `AGENTS.md`, `_themes/wide/includes/course/COURSE.md`. 검사: `tools/jekyll.sh build`, push 전 훅.

## 기각한 안과 이유
- 글자를 키우거나 버튼 모양으로 바꾸기: 디자인이 바뀐다. 요청은 누르기 쉽게 하는 것뿐이다.
- 컴퓨터 화면에도 적용: 마우스는 작은 링크도 정확히 누르므로 필요 없다.

## 남은 것
없음.
