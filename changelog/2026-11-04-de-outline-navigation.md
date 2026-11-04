# 2026-11-04 강의 목차에서 섹션으로 이동
작성자: Sangwoo Mo(moai-postech) | 대상: teaching/26f-data-engineering/slides/1~10강 HTML, tools/check_study_terms.js, TODO.md | 도구: Codex

> **한줄 결론: 1~10강 HTML의 목차·섹션 지도에 클릭·탭·키보드 이동을 추가하고 사이트에만 반영했다.**

POSTECH 요구사항: 영향 없음

## 요청

교수가 HTML의 장점을 활용해 목차 항목을 누르면 해당 구간 시작점으로 이동하도록 모든 강의 HTML에 기능을 추가하라고 요청했다. 1~10강 변경은 사이트에만 push하고 시트·PLMS는 그대로 두도록 지정했다.

## 반영 내역

- 강의 작업 폴더의 공유 theme.js·theme.css에서 공통 구현하고 로컬 현재 덱 19개에 적용.
- 사이트에는 1~10강 HTML 10개만 복사. 11~17강·Review Session·Midterm Review의 사이트 파일은 이번 반영에서 제외.
- 목록형·SVG형 목차와 갈래 지도를 실제 로컬 목적지 제목에 정확히 연결. 4·5강에서 다른 회차에 속한 항목은 비활성.
- 마우스 클릭, 모바일 탭, Tab 포커스와 Enter·Space 지원. 목차 이동이 기존 다음 장 넘김을 중복 실행하지 않게 처리.
- 본문·노트·장수·쌓기 단계·화면 배치 유지. PDF는 정적 내용이 같아 기존 파일 유지. Drive·시트·PLMS 수정 없음.

## 검증

- 로컬 19개 덱 링크 461개에 click·Enter·Space·모바일 탭 1,844회 검사 통과. 목적지 인덱스·접근성 속성·기존 쪽 번호 유지.
- 각 덱 deck-check 통과. 기존 모바일 탐색 회귀 검사도 19개 통과, JS 오류 0.
- 1~10강은 반영 전 사이트 파일이 로컬과 같은 판임을 확인. 반영 후 사이트 사본과 로컬 HTML 바이트 대조.
- PDF 원본 해시, 슬라이드 제목·본문·노트 동일 확인. 복구 경로는 Git 직전 커밋.
- 읽은 규칙: code/academic-profile·사이트 AGENTS.md, course README.md, 과목 AGENTS.md·POSTECH-STYLE.md·SLIDE-PLAYBOOK.md, 전역 presentation.md·workflow.md·secrets.md.

## 기각한 안과 이유

- 카드 순번으로 목적지 추측: 분할 강의와 Review Session에서 잘못된 장으로 이동하므로 실제 제목·명시적 별칭만 사용.
- 모든 클릭을 다음 장으로 처리: 목차·실습 조작과 충돌하므로 목차 링크 이벤트를 별도 처리.
- Drive 사본에서 1~10강을 다시 복사: 사용자 지정 사이트 전용 갱신과 충돌하고 기능을 되돌릴 수 있어 로컬 완성본에서 직접 반영.
- PDF·시트·PLMS까지 갱신: 이번 요청 범위 밖이고 정적 내용 변화 없음.

## 남은 것

배포 결과는 강의 폴더 DEPLOYED.md와 changelog에 기록. 사이트에 올리지 않은 11강 이후의 목차 탐색 기능은 로컬 완성본에 포함돼 있다.


## CI에서 발견한 별도 검사 오류 보완

- 사이트 배포는 성공했으나 check_study_terms가 앞선 AI Study 문구의 `reason, remember, and act`를 학습 단계 세 개로 잘못 분리했다. 실제 단계는 Training LLMs / From LLMs to Agents 두 개다.
- 문구와 학습 단계는 그대로 두고, 검사기가 다음에 선언된 단계의 시작 단어 앞 쉼표에서만 구절을 나누도록 수정. Home/Schedule 일치, 단계 순서·시작 단어, 회차 범위·개수 검사는 유지.
- 기각: 사용자 확정 문구에서 쉼표를 없애거나 검사를 warning으로 낮추기. 문구의 의미를 바꾸거나 실제 원인을 남기므로 채택하지 않음.
- GitHub Actions의 Node.js 20 deprecation 및 runner 이미지 전환 알림은 강의 기능과 별개인 인프라 이관 사항으로 TODO에 기록.
- 검사 보완은 현재 4개 학기의 실제 빌드 결과와 구절 내부 쉼표·정상 단계 나열·누락된 단계의 회귀 사례 3개로 확인. 사이트 콘텐츠는 수정하지 않음.
