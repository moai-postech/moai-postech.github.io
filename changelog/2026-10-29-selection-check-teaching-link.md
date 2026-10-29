# 2026-10-29 텍스트 드래그 검사가 Teaching 스터디 홈 링크를 막던 것
작성자: Sangwoo Mo(sangwoomo) | 대상: `tools/check_selection.js` | 도구: Claude Code

> **한줄 결론: Teaching 소개 문장의 링크를 금지하던 검사 규칙을 빼고, 그 링크의 텍스트 드래그 선택을 검사하도록 바꿨다.**

POSTECH 요구사항: 영향 없음

## 요청
교수 요청: PR #27 의 format 검사 실패(`check_selection`) 원인을 찾아 고친다.

## 원인
- 2026-10-28 `c17c792` 가 Teaching 소개 문장의 AI study group 링크를 지우면서 `check_selection.js` 에 "Teaching 소개 문장에 링크가 있으면 실패" 규칙을 넣었다.
- 2026-10-29 `81f3330`(교수 요청, [teaching-study-home-link](2026-10-29-teaching-study-home-link.md))이 같은 자리에 스터디 홈 링크를 다시 넣었다. 이 커밋은 `changelog`·`teaching.md` 만 바꿔 main push 때 무거운 검사가 이 조합을 잡지 못했다.
- PR #27 이 최신 main 을 병합하면서 두 변경이 만나 `check_selection` 이 실패했다. CI 로그에는 검사 이름만 찍혀 이유가 보이지 않았다.

## 반영 내역
- `tools/check_selection.js`: Teaching 링크 금지 규칙 삭제. 최신 교수 요청이 링크를 원한다.
- 같은 파일의 검사 목록에 `teaching` `.list-intro a` 를 더해, 링크 안에서 드래그하면 이동하지 않고 글자가 선택되는지 1280px·390px 에서 확인한다.

## 기각한 안과 이유
- 링크를 다시 지워 검사에 맞추기: 하루 전 교수 요청을 되돌린다.

## 적용 범위
- main 의 format 도 같은 이유로 실패하고 있었다(`81f3330` push, "Teaching 소개 문장에 불필요한 링크가 남아 있다"). 같은 두 커밋을 main 과 PR #27 브랜치에 모두 넣어, PR 이 병합될 때 충돌 없이 합쳐지게 했다.

## 남은 것
없음.
