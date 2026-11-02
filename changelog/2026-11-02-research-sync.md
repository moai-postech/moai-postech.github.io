# 2026-11-02 Seminar: Monthly Sync → Research Sync, Sharing Session 연도 빼기
작성자: Sangwoo Mo(sangwoomo) | 대상: 랩 세미나 시트, `tools/seminar_sync.py`, `_themes/wide/includes/sections/seminar.html`, `AGENTS.md` | 도구: Claude Code

> **한줄 결론: 매달 열리지 않는 Monthly Sync 를 Research Sync 로 바꾸고(시트 4행), Sharing Session 제목의 연도를 빼 `NeurIPS Sharing Session` 처럼 맞췄다(시트 2행). 동기화의 routine 판정 패턴도 Research Sync 로 바꿨다.**

## 요청
교수: Monthly Sync 를 매월 못 하고 있으니 Research Sync 로. 시트와 사이트 모두. 연도는 붙이지 않는다(안 붙여도 분명하다).

## 반영 내역
- 시트 `2026` 탭 topic: C25·C34·C40·C60 `Monthly Sync` → `Research Sync`, C54 `EMNLP 2026 Sharing Session` → `EMNLP Sharing Session`, C59 `NeurIPS 2026 Sharing Session` → `NeurIPS Sharing Session`. ICML·ALIN Workshop·AI Workflow 는 원래 연도가 없다.
- `seminar_sync.py` `ROUTINE_TITLE`: `Monthly Sync` → `Research Sync`. 머리 주석, 템플릿 주석, 저장소 `AGENTS.md` 시트 안내의 예도 바꿨다.
- `_data/seminar.yml` 의 제목은 이 커밋 뒤 세미나 동기화 실행이 시트에서 다시 쓴다(손으로 고치지 않음).

## 기각한 안과 이유
- Lab Sync: 무엇을 맞추는 자리인지가 덜 드러난다. Research Sync 는 주기와 무관하게 연구 진행 공유라는 내용을 말한다.
- ICML 에 연도를 붙여 맞추는 안: 교수가 연도 없이도 분명하다고 해서 반대로 연도를 뺐다.

## 남은 것
- 캘린더의 랩 세미나 일정 제목과 전역 규칙의 캘린더 양식 예(`| Monthly Sync`)는 이 저장소 밖이라 바꾸지 않았다.
