# 2026-11-20 Data Engineering 16·17강 리팩토링과 2025 출처 표시 삭제
작성자: Sangwoo Mo(sangwoomo) | 대상: `teaching/26f-data-engineering/slides/{11_big-data-I,12_big-data-II,15_llm-systems,16_agents,17_data-agents}.{html,pdf}` | 도구: Claude Code

> **한줄 결론: 16·17강을 겹치지 않게 다시 나눈 판(55장·41장)과, 화면의 "2025 강의에서 가져옴" 표시를 지운 11·12·15강 판으로 교체했다.**

POSTECH 요구사항: 영향 없음 (슬라이드 파일만 교체, 머리글·꼬리말·`_config.yml` 변경 없음)

## 요청
교수가 과목 저장소에서 "Historical 2025 example" 같은 2025 출처 표시를 지우고, 16·17강을 리팩토링하라고 요청했다. 외부 출처 표기는 그대로 둔다.

## 반영 내역
- 16강 59→55장, 17강 47→41장. 승인 일반론·trace는 16강, 요청 identity·SQL 검사는 17강에 한 번만 둔다.
- 11·12·15강은 화면의 2025 출처 표시만 지운 재빌드본.
- 과목 저장소 `tools/publish-site.py --lectures 11 12 15 16 17`로 복사. 경위는 과목 폴더 `changelog/2026-11-20-remove-2025-provenance.md`.

## 기각한 안과 이유
없음(과목 저장소 changelog 참조).

## 남은 것
2·13·14강도 같은 표시를 지웠지만 iCloud 에서 그림 파일이 내려오지 않아 재빌드 전이다. 내려오면 같은 방식으로 올린다.
- PDF 5개는 다른 세션의 PDF 압축 커밋(6e1f24c)과 겹쳐 새 판을 채택한 뒤 `tools/compress_pdf.py`로 같은 기준 압축(16 MB → 13 MB, 쪽 수 유지).
