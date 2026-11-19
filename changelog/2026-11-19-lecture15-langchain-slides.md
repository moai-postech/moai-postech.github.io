# 2026-11-19 Data Engineering 15강 슬라이드 갱신 (LangChain 복원)
작성자: Sangwoo Mo(sangwoomo) | 대상: `teaching/26f-data-engineering/slides/15_llm-systems.html`, `teaching/26f-data-engineering/slides/15_llm-systems.pdf` | 도구: Claude Code

> **한줄 결론: 15강(LLM Systems) LangChain 설명을 복원하고 RAG 중복 장을 정리한 최신 슬라이드로 교체했다(69→77→91→90장).**

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

## 이어서: 전체 검토 후 중복 장 삭제(같은 날)
교수 요청으로 91장 전체를 PDF로 훑어 검토했다. 2026년에 추가한 `Locating an Answer Failure`가 두 장 뒤의 실제 2025 원본 `RAG Evaluation Boundaries`와 같은 교훈을 반복하는 중복이라 뺐다(91→90장). 코드 화면 일부의 텍스트가 스크롤바에 가려 끝까지 안 보이는 것은 원본 2025 PDF 자체가 그렇게 캡처돼 있던 것이라 그대로 둔다. 재빌드본을 같은 경로에 다시 복사했다.

## 68장 판(같은 날 4차)

- `teaching/26f-data-engineering/slides/15_llm-systems.{html,pdf}` 교체. Models and Prompts → Chains → Memory → RAG 네 파트로 쌓아 가는 LangChain 지도 복원, RAG는 동기 3장과 큰 그림만 남겨 90장 → 68장. 경위는 과목 폴더 `changelog/2026-11-19-lecture15-langchain-restore.md`.
- 16강(`16_agents.{html,pdf}`): 첫 본문 장의 2025 Agents 지도를 15강과 같은 양식의 마지막 단계 지도(앞 네 요소 + Agents & Tools 강조)로 교체. 59장 그대로.
- 17강(`17_data-agents.{html,pdf}`): Outline 뒤에 완성된 쌓기 지도 한 장(`The Full Stack in a Data Agent`, 각 요소의 데이터 에이전트 역할 표시)을 넣어 46장 → 47장. 같은 커밋에서 15·16강 지도의 LangChain 상자 위 작은 빨간 자국을 지운 판으로 다시 올렸다.
- 14강(`14_ml-systems.{html,pdf}`): 11-17에 한 장만 남겼던 2025 파이프라인 단계 지도(데이터 소스 → feature → feature store → 학습 → 추론)를 각 단계 앞에 되살려 52장 → 56장.
