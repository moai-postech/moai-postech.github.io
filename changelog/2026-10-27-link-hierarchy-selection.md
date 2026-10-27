# 2026-10-27 링크 강조·안내 문구·텍스트 선택을 전체 통일
작성자: Sangwoo Mo(sangwoomo) | 대상: Home, Teaching, Research, Contact, Media, 강의 페이지, 공통 테마·선택 스크립트·검사 | 도구: Codex

> **한줄 결론: 본문 링크의 화살표·굵기 중복 강조를 없애고 문장 안 링크로 정리했으며, 모든 텍스트의 드래그 선택과 링크 클릭을 구분했다.**

POSTECH 요구사항: P1~P9 유지. 강의 footer에는 공통 텍스트 선택 스크립트만 추가. 로고·링크·비례·공식 고지는 유지.

## 요청과 결정
교수가 사이트 전체 디자인을 맡기면서 화살표와 크림슨·굵기 반복을 지적. Home의 Our work 링크를 더 자연스럽게, Media의 제목·매체를 분리하고 Contact의 중복 연락처를 빼도록 요청. 단순 개별 예외 대신 본문 링크는 색 하나로 표시한다는 공통 규칙을 적용.

## 반영 내역
- Home: `Our publications appear at venues such as NeurIPS, ICML, and ICLR.`와 `Interested in joining MOAI Lab? Learn how to apply.` 두 문장. publications와 how to apply를 문장 안 링크로 연결하고 화살표·굵기 제거.
- Teaching: 뜬금없는 Learn more 대신 `A weekly paper study for POSTECH undergraduates.`의 paper study를 링크.
- Research, Seminar, News와 강의 사이트의 탐색 링크에서도 화살표 제거. 안내 줄·목록 소개·추가 일정 링크는 400 굵기와 강조색 하나로 통일. 선택 탭, 제목, 성과·실제 버튼의 굵기는 역할에 맞게 유지.
- Media: 기사 제목 뒤의 쉼표를 가운데점과 양쪽 12px 여백으로 교체. 매체 이름은 15px 보조색. 기사와 같은 줄에 이어지는 구조 유지.
- Contact: 이메일을 다시 쓰던 Contact 줄 삭제. 교수 이름 링크로 Faculty의 연락처 안내.
- 드래그 문제: 안내 띠와 동일했던 연분홍 선택색을 크림슨 바탕·흰 글자로 변경. 전역 `user-select: text` 적용. 기본 링크 드래그를 끄는 것만으로 일부 링크가 여전히 이동하는 것을 실제 마우스 검사에서 재현해, 링크에서 시작한 마우스 드래그만 caret 좌표로 선택 범위를 갱신. 일반 클릭과 키보드 활성화는 링크 이동 유지. touch는 브라우저의 기본 선택 사용.
- 선택 처리를 `text-selection.html`로 공통화해 연구실 페이지와 강의·스터디 페이지 모두 적용. 기존 공통 scripts의 링크 처리는 이 파일로 이동.
- `tools/check_selection.js`: 1280·390px에서 안내 문구·링크·탭 글자·기사 매체·Teaching·Research·Contact·스터디 문단의 실제 드래그 16건과 일반 링크 클릭 검사. format Actions에 추가.
- `AGENTS.md`에 본문 링크·기사 매체·선택 규칙과 Contact의 연락처 정본 반영.

## 검증
Jekyll 빌드, 사이트 전체 형식 검사, POSTECH 필수 요소 검사, 실제 드래그 16건·일반 클릭 검사 통과. 선택색이 안내 띠와 구분되는 화면 확인. 참고로 대학 연구실의 내용 구분은 [Stanford AI Lab](https://ai.stanford.edu/)의 사람·연구·소식 안내를 확인했으며, 이 사이트의 기존 넓은 레이아웃·POSTECH 팔레트는 유지.

## 기각한 안과 이유
- Our work 링크나 두 개의 굵은 화살표 안내 유지: 링크 목적이 모호하고 강조 반복.
- Learn more만 가늘게: 문장과 분리된 불필요한 안내가 남으므로 명사 자체를 링크.
- CSS의 기본 선택 동작만 믿기: 실제 링크 안에서 시작한 드래그가 이동하는 경우 재현.
- 기사 매체를 오른쪽 끝으로: 기존 교수 결정대로 제목에 이어 두되 간격·크기로 구분.

## 남은 것
없음. 원본 복구 경로: Git `e49cd98`.
