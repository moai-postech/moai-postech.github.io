# 2026-11-21 Data Engineering 16·17강 슬라이드 갱신 (세 파트 재구성)
작성자: Sangwoo Mo(sangwoomo) | 대상: `teaching/26f-data-engineering/slides/16_agents.{html,pdf}`, `teaching/26f-data-engineering/slides/17_data-agents.{html,pdf}` | 도구: Claude Code

> **한줄 결론: 16강(Agents)을 Agent 개념, LangChain·LangGraph, 실무(loop, graph engineering, 운영) 세 파트로 다시 짠 60장 슬라이드로 교체했다.**

POSTECH 요구사항: 영향 없음 (슬라이드 파일만 교체, 머리글·꼬리말·`_config.yml` 변경 없음)

## 요청
교수가 16강이 LangChain에 너무 쏠려 있다며 agent 개념, LangChain, 실무 팁 세 파트로 바꾸자고 했고 배포를 승인했다.

## 반영 내역
과목 저장소의 `tools/publish-site.py --lectures 16`으로 재빌드한 `16_agents.html`·`.pdf`를 복사하고, PDF는 `tools/compress_pdf.py`로 줄였다(2.4MB → 1.8MB). 내용 변경의 경위와 검사는 과목 저장소 `2_lecture/26F_IMEN891K_DataEngineering/changelog/2026-11-21-lecture16-three-parts.md`에 있다.

## 기각한 안과 이유
없음(슬라이드 교체만).

## 2차 반영 (같은 날)
교수가 16강 3파트에 Karpathy 강연과 코딩 에이전트 실무를 더 담고 쓸모없는 데모를 빼 달라고 했고, 17강도 같은 방식으로 세 파트로 다시 짜 달라고 한 뒤 둘 다 배포를 승인했다. 과목 저장소의 `tools/publish-site.py --lectures 16 17`로 16강(65장)·17강(48장) HTML·PDF를 복사하고 PDF는 `tools/compress_pdf.py`로 줄였다(16강 2.5→1.9MB, 17강 0.7→0.5MB). 경위와 검사는 과목 저장소 `changelog/2026-11-21-lecture16-three-parts.md`.

## 3차 반영 (같은 날)
교수 요청으로 마무리 검수한 판을 다시 올렸다. 17강 표만 있던 4장을 그림으로 바꾸고, 전 장 검수에서 찾은 상자 정렬·표 머리글 잘림 등을 고쳤다. `publish-site.py --lectures 16 17` 후 `compress_pdf.py`로 압축했다. 경위는 과목 저장소 `changelog/2026-11-21-lecture16-three-parts.md`의 3차 절.
