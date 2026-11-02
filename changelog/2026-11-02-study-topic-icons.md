# 2026-11-02 학부 스터디 주제 아이콘 두 개 수정
작성자: Sangwoo Mo(sangwoomo) | 대상: `assets/img/icons/study-foundation-models.svg`, `assets/img/icons/study-llm.svg` | 도구: Codex(작성), Claude Code(검토·커밋)

> **한줄 결론: Foundation Models는 여러 양식을 받치는 공통 기반으로, LLM은 말풍선 안의 큰 원 세 개가 강조색 답변으로 이어지는 추론 흐름으로 다시 그렸다.**

POSTECH 요구사항: 영향 없음

## 요청
교수 피드백에 따라 컴퓨터·조직도처럼 보이는 Foundation Models와 고객 지원·설정처럼 보이는 LLM 아이콘을 교체. 후속 56px 검토에서 작은 단계 상자가 읽히지 않아, LLM 내부를 큰 노드 세 개로 바꾸도록 요청받음. Foundation Models 승인본은 유지.

## 반영 내역
- Foundation Models: 이미지·텍스트·동영상 타일 셋을 하나의 두꺼운 입체 기반에 연결해 공유 pretrained model을 표현.
- LLM: 말풍선 외곽을 유지하고 내부에 반지름 8인 원 세 개를 대각선으로 연결. 연결선은 #BAC4CF, 마지막 원만 #A61955로 채워 추론 단계에서 답변으로 이어지는 흐름을 표현. 클릭 커서는 제거.
- Deep Learning과 Physical AI 파일은 변경하지 않음. 기존 파일명, 120×120 viewBox, 팔레트, 둥근 선, 5~6 외곽선과 작은 강조 요소 하나 유지.
- 읽은 규칙: 프로젝트 `AGENTS.md`, 공용 `rules/memory-location.md`, `rules/workflow.md`. 수정 전 두 파일의 `check_changelog.py --who`와 관련 회차·열린 안건 확인.
- 검증: Quick Look으로 각각 56px·112px를 직접 렌더한 비교판에서 네 아이콘을 나란히 육안 확인. LLM의 XML·팔레트·강조 요소 수·노드 반지름 검사. 후속 수정 전 백업과 비교해 나머지 세 아이콘의 바이트 일치 확인. `git diff --check` 통과.
- 원본 복구: Git HEAD의 같은 경로. 후속 수정 직전 LLM·회차 파일은 세션 임시 폴더 `study-llm-review-pyqzg9bw/`에 백업. 비교 렌더도 같은 임시 폴더에 보관.

## 기각한 안과 이유
- 모니터·조직도 표현: 여러 양식이 공유하는 기반이라는 의미가 약함.
- 렌치·기어: reasoning과 agent보다 설정·고객 지원으로 읽힘.
- 작은 단계 상자와 클릭 커서: 56px에서 추론 흐름이 약하고 채팅창과 클릭으로 읽혀, 큰 원 세 개로 교체하고 커서 제거.

## 남은 것
없음. Claude Code 가 56px·112px 비교판으로 다시 확인하고 커밋했다.
