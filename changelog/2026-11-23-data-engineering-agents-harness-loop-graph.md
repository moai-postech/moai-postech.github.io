# 2026-11-23 Data Engineering 16·17강 파트 순서 변경
작성자: Sangwoo Mo(sangwoomo) | 대상: `teaching/26f-data-engineering/slides/{16_agents,17_data-agents}.{html,pdf}` | 도구: Claude Code

> **한줄 결론: 16강 Agents를 What an Agent Is → Harness, Loop, Graph → LangChain and LangGraph 순서의 64장 판으로 교체했다.**

POSTECH 요구사항: 영향 없음 (슬라이드 파일만 교체, 머리글·꼬리말·`_config.yml` 변경 없음)

## 요청
교수가 16강에서 harness·loop·graph를 파트 2로 당기고 LangChain을 파트 3으로 미루며, 파트 2 제목을 Karpathy 강의를 따라 Harness, Loop, Graph로 바꾸라고 요청했다.

## 반영 내역
- 과목 저장소 `tools/publish-site.py --lectures 16`으로 복사하고 PDF는 `tools/compress_pdf.py`로 줄였다. 경위는 과목 폴더 `changelog/2026-11-23-lecture16-harness-loop-graph.md`.

## 기각한 안과 이유
없음(과목 저장소 changelog 참조).

## 17강 후속(같은 날)
- 17강 Data Agents도 What a Data Agent Does → Harness, Loop, Graph → One Request, End to End 순서의 48장 판으로 교체했다. 같은 방식으로 복사하고 압축했다(1.3 MB → 0.5 MB).

## 16강 2차(같은 날)
- 01 끝에 남아 있던 chain·통제 수준 그림 다섯 장을 03의 LangGraph 앞으로 옮기고 01·02에서 LangChain 언급을 뺀 64장 판으로 다시 교체했다. 같은 방식으로 복사하고 압축했다(2.9 MB → 1.9 MB).

## 17강 2차(같은 날)
- 01에 있던 LangChain 구성도 장(The Full Stack in a Data Agent)을 03 첫 장으로 옮긴 48장 판으로 다시 교체했다. 같은 방식으로 복사하고 압축했다.

## 16·17강 3차: 검토 반영(같은 날)
- 16강 66장, 17강 50장 판으로 교체했다. 2025 그림 장 부제, 노트 정정, P-17 예제 소개 장, prompt injection 장(16강 lethal trifecta, 17강 DB 값 속 지시), 17강 § Graph 첫 장(요청 하나를 그래프로), 캡션의 파트 번호 정정. 같은 방식으로 복사하고 압축했다.

## 16·17강 4차: 독립 검토 반영(같은 날)
- 16강 68장, 17강 50장 판으로 교체했다. 연도 정정(2023년식 LangChain 코드), 부제와 그림이 어긋난 두 장, 다음 회차 예고 삭제, 옛 API 캡션(tools, tool_calls), 16강 도구 설계·agent 측정 장 추가, 17강 02가 03의 숫자에 기대지 않게 두 run을 앞에 보이고 golden query 숫자를 합성 DB와 맞췄다. 같은 방식으로 복사하고 압축했다.

## 16·17강 5차: 반복 검토 완성판(같은 날)
- 저자 재검토와 별도 검토자의 독립 검토를 9회 돌려 "완성" 판정이 난 판(16강 68장, 17강 50장)으로 교체했다. 이번부터 강의 자료는 검토 완성 뒤에만 올린다(과목 규칙). 같은 방식으로 복사하고 압축했다.

## 남은 것
없음
