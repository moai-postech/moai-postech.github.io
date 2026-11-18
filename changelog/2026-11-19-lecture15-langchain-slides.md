# 2026-11-19 Data Engineering 15강 슬라이드 갱신 (LangChain 복원)
작성자: Sangwoo Mo(sangwoomo) | 대상: `teaching/26f-data-engineering/slides/15_llm-systems.html`, `teaching/26f-data-engineering/slides/15_llm-systems.pdf` | 도구: Claude Code

> **한줄 결론: 15강(LLM Systems) LangChain 설명을 복원하고 RAG 중복 장을 정리한 최신 슬라이드로 교체했다(69→77→91장).**

POSTECH 요구사항: 영향 없음 (슬라이드 파일만 교체, 머리글·꼬리말·`_config.yml` 변경 없음)

## 요청
교수가 과목 저장소(`2_lecture/26F_IMEN891K_DataEngineering/`)에서 15강 LangChain 설명이 빈약해 이해가 안 된다며 복원을, RAG는 추가로 줄여 달라고 요청했다.

## 반영 내역
과목 저장소의 `tools/publish-site.py --lectures 15`로 재빌드한 `15_llm-systems.html`·`.pdf` 사본을 복사했다. 내용 변경(LangChain 용어 표 9장 복원, RAG 중복 extra 1장 삭제)의 경위와 검사는 과목 저장소 `2_lecture/26F_IMEN891K_DataEngineering/changelog/2026-11-19-lecture15-langchain-restore.md`에 있다.

## 기각한 안과 이유
없음(과목 저장소 changelog 참조).

## 남은 것
PLMS·Drive 교체는 아직. 교수 확인 뒤 처리.

## 이어서: 용어 표를 실제 2025 코드로 교체(같은 날)
교수가 처음 복원한 9장짜리 용어 표를 "구리다"고 반려하고 작년 실제 강의 플로우를 그대로 쓰라고 지시했다. 과목 저장소에서 그 용어 표를 다시 빼고 실제 2025 LangChain 코드·출력 화면 24장으로 교체한 재빌드본(77→91장)을 같은 경로에 다시 복사했다. 경위는 과목 저장소 changelog 같은 파일에 이어서 기록했다.
