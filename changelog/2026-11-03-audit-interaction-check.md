# 2026-11-03 전수 검사의 check_interaction 을 바뀐 디자인에 맞춤
작성자: Sangwoo Mo(moai-postech) | 대상: `tools/check_interaction.js` | 도구: Claude Code

> **한줄 결론: 교수 요청 전수 검사(audit 41591236888)에서 check_interaction 만 실패했다. 원인은 사이트가 아니라 옛 디자인을 기준으로 남은 검사 두 줄이라 그 두 줄을 고쳤다.**

POSTECH 요구사항: 영향 없음

## 요청
교수: 오늘 바꾼 것(스터디 Home, 머리글) 최종 검수, 이대로 문제 없는지 꼼꼼하게.

## 반영 내역
- audit 결과: test_visual_review, test_font_evidence, test_design, check_design, check_format, check_typography, check_selection, check_study_members, check_guest_titles, check_postech 통과, check_interaction 실패.
- 원인 1: Schedule 학습 단계 라벨을 `/^\d{2}$/` 로 검사했다. 라벨은 2026-11-02 `study-path-trim` 결정으로 `01 · Sessions 1–6` 이다. 정규식을 `^\d{2}( · Sessions? n(–m)?)?$` 로 바꿨다. 옛 `Topics n–m` 꼴은 여전히 실패한다.
- 원인 2: 새 탭 열기(수정키 클릭) 검사가 Home 첫 `.section-next a` 를 눌러 Publications 를 기다렸다. 2026-11-03 `home-paper-stella-mini` 로 그 자리가 Join us(`contact.html#join`)가 됐다. `check_selection` 과 같이 Paper Stella 띠의 `.mini-text a`(See our publications)를 누르게 했다.
- 검사가 첫 실패에서 멈추므로 뒤 항목을 라이브에서 따로 재현했다: Home·Schedule 탭의 End·Home·화살표 순환, Schedule 단계 hover(6행 강조, 떠나면 해제), 옛 `?part=7-8` 주소, 20페이지 건너뛰기 링크가 첫 Tab, 680/681·960/961px Home 높이 변화(0·1px). 모두 통과.

## 기각한 안과 이유
- 라벨 검사를 지우는 안: 옛 `Topics n–m` 꼴이 돌아오는 것을 막는 역할이 남아 있다.
- audit 를 다시 돌려 확인하는 안: 전수 검사는 요청한 한 번만 돌린다(AGENTS.md, 교수 2026-11-02). 이 맥은 Chromium 과 Jekyll 빌드가 안 돼 로컬에서도 못 돌린다. 다음 audit 에서 확인된다.

## 남은 것
- 다음 audit 에서 check_interaction 통과 확인.
