# 2026-10-26 강의 슬라이드와 프로포절 발표 자료를 사이트에 직접 올림
작성자: Sangwoo Mo(moai-postech) | 대상: `_data/courses/26f-data-engineering.yml`, `teaching/26f-data-engineering/`, `_themes/wide/includes/course/README.md` | 도구: Claude Code

> **한줄 결론: 26F Data Engineering 의 강의 슬라이드(1~14강 PDF·HTML)와 프로포절 발표 17팀 PDF 를 이 저장소에 올리고, 링크를 Google Drive 대신 사이트 파일로 바꿨다.**

## 요청
교수: 슬라이드를 Google Drive 를 거치지 않고 사이트에서 바로 열 수 있게(self-contained) 한다. Drive 는 같은 파일을 둔 백업으로 남기고, 새 파일이 생기면 Drive 와 GitHub 에 각각 복사한다.

## 반영 내역
- `teaching/26f-data-engineering/slides/`: 1~14강 `<n>_<slug>.{pdf,html}` 28개. Drive `slides/` 의 배포본을 그대로 복사했다(학생이 받은 판과 같다).
- `teaching/26f-data-engineering/project/proposal/`: `proposal_team01.pdf` ~ `proposal_team17.pdf`. 교수 Drive `term-project/proposal/` 의 사본(10/26 메일 판 반영)이다. 전에는 1·6·14·15·17팀 등이 학생 Drive 파일을 가리켰다.
- yml 의 `pdf`·`html`·`slides` 45개를 사이트 루트 기준 경로로 바꾸고 머리 주석을 고쳤다.
- 강의 사이트 README 에 "슬라이드와 발표 자료는 이 저장소에 둔다" 절을 더했다.
- 합계 약 74 MB, 가장 큰 파일 4 MB.

## 기각한 안과 이유
- Drive 링크 유지: 방문자가 Drive 미리보기를 거쳐야 하고 HTML 덱은 Drive 에서 실행되지 않는다.
- 별도 저장소나 Git LFS: 파일이 작고(합계 74 MB) Pages 가 LFS 를 서빙하지 않는다.

## 남은 것
- 지난 시험(`exams`), 25F·26S 강의의 Drive 링크는 그대로다.
- 15~18강, Midterm & Proposal Review, Final 발표 자료는 배포할 때 같은 방식으로 올린다.
