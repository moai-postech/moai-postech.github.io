# 2026-11-21 Data Engineering 16강 슬라이드 갱신 (세 파트 재구성)
작성자: Sangwoo Mo(sangwoomo) | 대상: `teaching/26f-data-engineering/slides/16_agents.html`, `teaching/26f-data-engineering/slides/16_agents.pdf` | 도구: Claude Code

> **한줄 결론: 16강(Agents)을 Agent 개념, LangChain·LangGraph, 실무(loop, graph engineering, 운영) 세 파트로 다시 짠 60장 슬라이드로 교체했다.**

POSTECH 요구사항: 영향 없음 (슬라이드 파일만 교체, 머리글·꼬리말·`_config.yml` 변경 없음)

## 요청
교수가 16강이 LangChain에 너무 쏠려 있다며 agent 개념, LangChain, 실무 팁 세 파트로 바꾸자고 했고 배포를 승인했다.

## 반영 내역
과목 저장소의 `tools/publish-site.py --lectures 16`으로 재빌드한 `16_agents.html`·`.pdf`를 복사하고, PDF는 `tools/compress_pdf.py`로 줄였다(2.4MB → 1.8MB). 내용 변경의 경위와 검사는 과목 저장소 `2_lecture/26F_IMEN891K_DataEngineering/changelog/2026-11-21-lecture16-three-parts.md`에 있다.

## 기각한 안과 이유
없음(슬라이드 교체만).
