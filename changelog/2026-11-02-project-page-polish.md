# 2026-11-02 강의 Project 페이지 다듬기
작성자: Sangwoo Mo(sangwoomo) | 대상: `_themes/wide/includes/course/project.html`, `_themes/wide/includes/course/course.css`, `_data/courses/26f-data-engineering.yml`, `_data/courses/26s-programming-for-data-science.yml`, `teaching/26s-programming-for-data-science/project/highlights/` | 도구: Claude Code

> **한줄 결론: 넘친 한 단어를 없애고, 평가 머리를 한 줄로, 팀 표의 PDF를 날짜 아래로, 하이라이트 사진을 가로형으로 맞추고 AX 하이라이트를 점수 상승 그래프로 바꿨다.**

POSTECH 요구사항: 영향 없음

## 요청
교수: Data Engineering 2026 Timeline 의 Final Presentation 설명에서 한 단어가 셋째 줄로 넘친 것을 다듬기. `Team Evaluation` 과 `Instructor + other teams` 를 한 줄로. Highlights 점검(Data Engineering 사진이 세로로 길고 글자가 넘침, Programming for AX 는 슬라이드 그림 대신 성능이 오르는 그림). 팀 표의 PDF 를 오른쪽 대신 날짜 아래로.

## 반영 내역
- Data Engineering 2026 Final 설명을 `..., from pipeline to results.` 로 줄여 데스크톱에서 두 줄에 들어가게 했다.
- Timeline·평가 기준·하이라이트 문단에 `text-wrap: pretty` 를 걸어 마지막 줄에 한 단어만 남지 않게 했다(Data Engineering 2025 하이라이트의 `teams.` 가 해당).
- 평가 머리를 `Team Evaluation (Instructor + other teams)`, `Individual (Teammates)` 한 줄로 바꿨다. 좁으면 줄바꿈된다.
- 팀 표: 데스크톱에서 PDF 링크를 날짜·순서 아래 줄로 옮겼다. 휴대폰은 회차마다 한 줄이 낫다고 보고 기존처럼 같은 줄에 둔다.
- 하이라이트 사진은 16:9 틀(`object-fit: cover`, 위쪽 35% 기준)로 맞췄다. SVG 그림은 제 비율을 유지한다.
- Programming for AX 하이라이트 그림을 1팀 최종 발표 14쪽(Trial Journey on Private Score Progression)의 수치로 다시 그린 `2026-kaggle-score-progression.svg` 로 바꿨다(0.6537 → 0.7202, 6단계). 원 슬라이드 그림은 451px 폭에서 글자가 읽히지 않아 그대로 자르지 않았다. 옛 `2026-kaggle-research-agent.jpg` 는 지웠다(Git 이력에 남음). 설명문에 점수 변화를 넣었다.

## 검증
- 읽은 규칙: 상위·저장소 AGENTS.md.
- 로컬 Jekyll 빌드에서 1440px·375px 두 폭으로 세 Project 페이지를 보고, 문단별 줄 수와 마지막 줄 폭을 쟀다.

## 기각한 안과 이유
- 슬라이드 14쪽 그래프를 그대로 잘라 넣기: 카드 폭에서 축 숫자와 단계 이름이 4~5px 로 줄어 읽히지 않는다.
- 휴대폰에서도 PDF 를 아래 줄로: 회차마다 세 줄이 되어 표가 두 배로 길어진다.

## 남은 것
없음.

## 후속: Highlights 16:9 통일과 최종 점검
- 교수: Highlights 그림은 슬라이드 비율로 통일하고 모든 그림의 규격을 맞추자.
- 사진 파일을 1200x675(16:9)로 잘라 두었다(위쪽 35% 기준). 그래프 SVG 는 viewBox 를 800x450(16:9)으로 바꿨다. CSS 의 SVG 예외를 빼서 모든 그림이 같은 16:9 틀이다. 규격은 `project.html` 머리 주석에 적었다.
- 26S 일정 04/29 교수 IME 세미나에 발표 제목을 넣었다(`_data/talks.yml` 과 같은 제목). 04/23 윤송이, 05/29 전영환, 25F 11/27 신기영 세미나는 MS365 캘린더에도 제목이 없어 비워 두었다.
- 저장소 안 iCloud 충돌 사본(`… 2`, 파일 99개와 폴더 5개)은 원본과 같거나 원본의 부분집합이라 지웠다. 사본은 세션 scratchpad 에 옮겨 두었다.
- 점검: 세 강의 9개 페이지 내부 링크 365개 깨짐 없음, 외부 링크는 LinkedIn 3개(봇 차단 999)를 빼고 200. 로컬 Chromium 이 실행되지 않아 전수 검사는 GitHub Actions `audit` 로 돌렸다.

## 후속: 줄바꿈과 표 정렬
- 강의·스터디 사이트 본문 전체에 `text-wrap: pretty` 를 걸었다(`.course-site main`). 앞서 세 곳에 따로 건 규칙은 지웠다. 25F Home 의 `streams.`, 휴대폰의 `KST` 처럼 마지막 줄에 한 단어만 남던 곳이 사라졌다. 1440·1024·768·375px 에서 9개 강의 페이지와 스터디 Home 을 재 보니 가로 넘침은 없었다. 남은 것은 768px 에서 25F 평가 기준 한 칸의 `class` 하나다.
- 교수: Materials 의 PDF 를 가운데 정렬로, 표의 왼쪽·가운데 정렬도 검토. 기준을 이렇게 정했다. 길이와 모양이 같은 짧은 표시(PDF·Lab 링크, 발표 날짜·순서)는 가운데, 길이가 들쭉날쭉한 글(주제, Reading, 스터디 자료 묶음, 발표자)은 왼쪽, 번호는 오른쪽.
  - 강의 일정 Materials 열 제목과 칸을 가운데로. Lab 이 있는 강의(26S)는 PDF 만 있는 줄에 보이지 않는 Lab 자리를 두어 모든 PDF 가 한 세로줄에 선다. 휴대폰에서는 왼쪽 그대로, 빈 자리는 숨긴다.
  - 스터디 일정의 `#` 을 왼쪽에서 오른쪽으로 바꿔 강의 일정과 맞췄다. 스터디 Materials 는 링크 묶음 길이가 달라 왼쪽에 둔다.
  - 그대로 둔 것: Date(왼쪽, 같은 꼴), Topic·Reading(왼쪽), 팀 표의 발표 칸(이미 가운데).
- 전수 검사(GitHub Actions `audit`)의 `check_design` 이 이번 수정 전부터 있던 위반 14건을 잡았다. Highlights 제목(`strong.project-highlight-title`)이 700 이었는데 계약은 문장 안 강조 600 이다. Timeline 카드 제목과 같은 600 으로 맞췄다. 나머지 검사(format, typography, selection, interaction, study members, POSTECH)는 통과.
