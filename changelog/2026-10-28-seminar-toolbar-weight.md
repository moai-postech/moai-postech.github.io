# 2026-10-28 세미나 도구 모음 굵기 통일
작성자: Sangwoo Mo(sangwoomo) | 대상: `_themes/wide/includes/theme.css`, `AGENTS.md` | 도구: Codex

> **한줄 결론: Full schedule을 같은 줄의 필터 버튼과 같은 굵기 600으로 통일.**

## 요청과 결정
- 교수는 디자인 통일 후에도 Full schedule만 plain으로 남아 있음을 지적.
- 필터 도구 모음의 버튼과 이동 링크에 공통 글자 크기와 굵기 선언 적용. 개수는 기존 400 유지.

## 반영 내역
- `.filter-btn, .filter-link` 공통 스타일로 굵기 600 적용.
- 역할 표에 필터 도구 모음 규칙 명시.
- POSTECH 필수 요소 영향 없음.

## 기각한 안과 이유
- Full schedule에만 별도 inline bold 적용: 같은 역할의 스타일이 다시 갈라질 수 있어 공통 선언 사용.
- 일반 본문 링크까지 모두 굵게 변경: 요청 범위 밖이며 역할이 다름.

## 검증
- Jekyll 빌드 성공(Ruby 3.3, 기존 호환 패치 사용).
- 형식 13페이지×5폭, 타이포그래피 26페이지·177상태, POSTECH 26페이지×2폭 통과.
- 1440·390·320px에서 All·Lab·Invited·Full schedule의 실제 굵기 600 확인. 모바일 렌더 확인.

## 복구와 남은 것
- 원본은 Git HEAD 32ad58d에서 복구 가능.
- 진행 중인 스터디 명단·강의 수정은 이번 커밋에 포함하지 않음.
