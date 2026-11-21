# 2026-11-21 IME 소개 발표를 Invited Talks 에
작성자: Sangwoo Mo(sangwoomo) | 대상: `_data/talks.yml`, `assets/talks/`, `changelog/index.md` | 도구: Claude Code

> **한줄 결론: 2026-10-06 IMEN100 소개 발표 "AX Revolution with IME" 를 Invited Talks 의 Education 탭에 POSTECH IME Seminar 로 올렸다.**

POSTECH 요구사항: 영향 없음

## 요청
교수가 `3_seminar/archive/261006_intro-ime` 를 Invited Talks 에 올리고 장소는 POSTECH IME Seminar 로 두자고 함.
## 반영 내역
- `assets/talks/2026-ax-revolution-with-ime.pdf`: 로컬 정본 PDF 를 `tools/compress_pdf.py` 로 줄여 올림(16.7 → 15.1 MB)
- `_data/talks.yml`: 2026 묶음에서 발표일 순서대로 Household Robots(10-22)와 Time-Series(07-03) 사이에 `kind: education` 으로 추가. 장소 링크는 같은 이름의 기존 항목(Opportunities in IME)과 같게 `ime.postech.ac.kr`
- `changelog/index.md`: 75a21ce 에 커밋된 stash 충돌 표시(`<<<<<<<`, `=======`, `>>>>>>>`)를 지우고 세 줄을 모두 살림
## 기각한 안과 이유
- 기존 "Opportunities in IME as an AI Researcher" 항목의 PDF 를 바꾸는 안: 표지와 생성일을 대조하니 2026-04-29 의 다른 발표라 새 항목으로 둠
## 되돌림 (같은 날)
교수가 다시 보고 빼자고 함. 근거: 초청 발표가 아니라 IMEN100 수업 안의 학과 소개 회차이고, 같은 수업 2025 판(251104)도 올리지 않았고, 같은 장소의 "Opportunities in IME as an AI Researcher" 와 주제가 겹침. `_data/talks.yml` 항목과 `assets/talks/2026-ax-revolution-with-ime.pdf` 를 지움. index 충돌 표시 정리는 그대로 둠.
기각한 안: Education 탭에 남기는 안(위 근거로 기각). 앞으로 IMEN100 같은 학내 수업 회차는 Invited Talks 에 올리지 않는다.
## Opportunities in IME 를 Research 탭으로 (같은 날)
교수 지시로 "Opportunities in IME as an AI Researcher (and Vice Versa)"(260429)의 `kind: education` 을 지워 Research 탭으로 옮김. 교수 본인의 연구 방향을 소개하는 발표라 Education(튜토리얼, 학과·교육 행사)이 아님.
## 남은 것
없음
