# 2026-11-23 Spring 2027 스터디 논문 이름과 링크
작성자: Sangwoo Mo(sangwoomo) | 대상: 스터디 구글시트 schedule 탭 D4·D13, `_data/ai_study.yml` | 도구: Claude Code

> **한줄 결론: 1회 Deep Blue 를 DeepBlue 로 붙이고 ScienceDirect 대신 Semantic Scholar 로 잇고, 10회 Gemini team 을 Argon agents 로 바꿨다.**

POSTECH 요구사항: 영향 없음

## 요청
교수: 다음 봄학기 커리큘럼에서 Deep Blue 를 DeepBlue 로. arXiv 가 아닌 링크 중 Nature·Science 본지는 그대로 두고 ScienceDirect 로 가는 것은 다른 곳으로. Gemini Team 은 Argon agents 로.

## 반영 내역
- 정본인 스터디 시트(schedule 탭)를 고친 뒤 `tools/ai_study_sync.py` 로 `_data/ai_study.yml` 을 다시 만들었다. 바뀐 줄은 두 개뿐이다.
- D4 `DeepBlue, AlphaGo`: DeepBlue(Campbell, Hoane, Hsu, Artificial Intelligence 2002)는 arXiv 판이 없고 DOI 가 ScienceDirect 로 간다. Semantic Scholar 논문 페이지로 바꿨다(초록과 PDF 링크가 있는 출판사 밖 안정된 주소).
- D13 `Voyager, Argon agents`: arXiv 2610.22319 의 제목이 "A team of Gemini 4 Argon agents beats Minecraft" 라 그 이름을 쓴다. 링크는 같다. 사이트는 링크 이름 Title Case 규칙(교수 2026-11-17)으로 `Argon Agents` 로 보인다.
- 다른 비 arXiv 링크 점검: AlphaGo·DQN·AlphaStar 는 Nature, AlphaZero·Pluribus·Cicero 는 Science 본지라 그대로. CFR 은 NeurIPS 2007 proceedings 라 ScienceDirect 가 아니어서 그대로.

## 기각한 안과 이유
- 대학 강의 사이트의 PDF 사본(Oswego, NAU 예비판): 남의 강의 자료라 언제 없어질지 모르고, NAU 것은 출판 전 판이다.
- dblp: 서지 정보만 있고 읽을 곳으로 다시 ScienceDirect 를 가리킨다.

## 남은 것
없음
