# 2026-11-02 머리글 글자 크기를 역할 토큰으로
작성자: Sangwoo Mo(sangwoomo) | 대상: `_themes/wide/includes/theme.css`, `tools/check_design.js` | 도구: Claude Code

> **한줄 결론: `.brand-word`·`.brand-code` 의 23px 를 `--text-brand` 토큰으로 바꿔 `format` 의 `checks` 실패를 고쳤다.**

POSTECH 요구사항: 영향 없음

## 요청
[course-header-code](2026-11-02-course-header-code.md) 커밋(9b3c9b6) 뒤 `format` 의 `checks`(run 41409588269)가 `test_design` 에서 실패했고 GitHub 실패 메일이 왔다. 새 `.brand-code` 가 `font-size: 23px` 를 직접 썼고, 줄 끝 주석이 다음 규칙 선택자에 붙어 `.brand-word` 예외도 깨졌다.

## 반영 내역
- `:root` 에 `--text-brand: 23px` 를 두고 두 규칙이 이 토큰을 쓴다. 화면은 그대로다.
- 주석을 규칙 앞줄로 옮겼다.
- `check_design.js` 의 `.brand-word` 23px 예외를 지웠다. 이제 토큰을 쓰므로 필요 없다.

## 기각한 안과 이유
- 예외 목록에 `.brand-code` 추가: 숫자 크기 예외가 늘어날수록 역할 토큰 규칙이 약해진다.

## 남은 것
없음
