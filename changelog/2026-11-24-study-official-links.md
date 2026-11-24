# 2026-11-24 학부생 AI 스터디 논문 링크를 공식 주소로

작성자: Sangwoo Mo(sangwoomo) | 대상: 스터디 시트 `schedule!D4:D12`, `_data/ai_study.yml`(동기화), `AGENTS.md` | 도구: Claude Code

> **한줄 결론: Spring 2027 논문 링크를 Nature·Science 본지는 공식 페이지, 그 밖은 arXiv, arXiv 가 없으면 공식 venue 로 맞췄다(11편 변경).**

POSTECH 요구사항: 영향 없음

## 요청
교수: 학부생 AI 스터디에서 Semantic Scholar 말고 공식 링크로. Science·Nature 본지는 그것을, 아닌 것은 arXiv, arXiv 가 없으면 공식 venue. MuZero 는 `nature.com/articles/s41586-020-03051-4`.

## 반영 내역
- 모든 학기 링크를 점검. Fall 2025, Spring 2026, Summer 2026, Fall 2026 에는 Nature·Science 본지 논문이 없다(Science Robotics 는 자매지라 arXiv 유지). 바꿀 것은 Spring 2027 뿐이었다.
- 스터디 시트 `schedule` 탭 D4·D5·D6·D8·D9·D10·D11·D12 를 하이퍼링크로 다시 씀(외부 주소라 칩 아님). Crossref 로 DOI·제목·학술지를 모두 확인.
  - arXiv → 본지: MuZero(Nature 2020), Go-Explore(Nature 2021), DeepNash(Science 2022), DeepStack(Science 2017).
  - doi.org → 본지 페이지 주소: AlphaGo, DQN, AlphaStar(Nature), AlphaZero, Pluribus, Cicero(Science). 가리키는 곳은 같고 주소 꼴만 MuZero 예시와 맞춤.
  - Semantic Scholar → 공식 venue: DeepBlue(Artificial Intelligence 2002, arXiv 없음) `sciencedirect.com/science/article/pii/S0004370201001291`.
  - 그대로: A3C, ICM, RND, Agent57, Hide-and-Seek, QMIX, Voyager, Argon agents(arXiv), CFR(NeurIPS 2007 초록 페이지).
- `tools/ai_study_sync.py` 로 동기화. 같은 실행이 Fall 2026 9회에 학생이 올린 슬라이드를 함께 받았다(`09-spatial-reasoning-slides.pdf`, 둘째 파일은 받을 수 없어 Drive 링크로 남음, 원본 짝 `tools/drive_sources.json`).
- 규칙: `AGENTS.md` 의 `ai_study.yml` 줄. 학기 계획의 링크 표는 `2_lecture/27S_MOAI_AIStudy/syllabus/plan.md`.

## 기각한 안과 이유
- doi.org 주소 유지: 같은 곳을 가리키지만 교수가 준 예시(`nature.com/articles/…`)와 꼴을 맞춤.
- Science Robotics 논문도 공식 페이지로: 교수 규칙은 본지만이다.

## 남은 것
- DeepBlue: 2026-11-23 에 교수가 "ScienceDirect 로 가는 것은 다른 곳으로" 해서 Semantic Scholar 로 바꿨던 링크다(`2026-11-23-study-spring-2027-papers.md`). 오늘 규칙(arXiv 없으면 공식 venue)대로 ScienceDirect 로 되돌렸으니 교수 확인.
