# 2026-10-28 시트 링크·프로젝트 일정 정리
작성자: Sangwoo Mo(sangwoomo) | 대상: 강의·스터디 시트 링크, 26F Project | 도구: Codex

> **한줄 결론: 시트 링크는 제목 우측 ↗로 통일하고 Project는 팀 구성과 발표 일정을 중심으로 정리.**

POSTECH 요구사항: 영향 없음. 머리·꼬리의 학교 링크 유지.

## 요청과 결정
- 교수는 Schedule·Project 시트 링크를 Study처럼 우측 끝에 두고 ↗ 표시하도록 요청.
- 발표 날짜·순서 아래 Slides를 표시하고 Final 팀별 날짜·순서는 placeholder로 요청.
- 반복 Overview 대신 팀 구성 마감·Up to 5·시트 입력 안내와 Timeline 중심으로 정리하도록 요청.
- 마감일은 첫 수업이 있는 주를 1주차로 센 4주차 금요일로 교수 결정. 26F 첫 수업 9/8 기준 10/2. 시각은 미지정.

## 반영 내역
- 외부 시트 링크 공통 컴포넌트와 스타일로 제목 우측 ↗ 정렬. 모바일 줄바꿈 후에도 우측 유지. 링크는 각 페이지 하나.
- Project의 반복 Overview를 Timeline으로 교체. 26F는 팀 구성 마감 Oct 2, Up to 5, 시트에 팀원 입력 안내, Proposal·Final 예정일을 순서대로 표시.
- 장문 소개의 반복 과정 설명은 Home과 겹쳐 화면에서 생략. 원래 summary 데이터는 보존. 제품·현실 문제·대규모 DB·허용된 데이터 소스 조건은 Final 단계 설명에 합쳐 보존. 평가 조건은 Evaluation에 보존. 선택적 LLM 언급은 불필요한 예시로 제거.
- 발표 날짜·순서를 블록으로 두고 Slides는 다음 줄. 26F Final의 팀별 배정은 Date TBD · #TBD. 기존 확정 Proposal 날짜·순서는 유지.
- 팀 구성 시트의 상단 A1:H8과 1강 자료에는 마감일이 없어 교수에게 확인 후 적용. 시트 자체는 수정하지 않음.
- 원본 복구 경로: Git `8ad0d24`. 동시 작업과 겹치지 않도록 별도 체크아웃에서 수정.

## 기각한 안과 이유
- 시트 링크를 본문 왼쪽에 두기: 외부 화면을 펼치는 역할이 스터디와 달라짐.
- Overview·Team size·편집 안내·단계 카드를 반복: 학생이 해야 할 일과 날짜를 찾기 어려움.
- Final의 개별 날짜·순서 추정: 팀별 배정은 아직 미정.
- 새 진한 배경 카드로 Timeline 강조: 색 부담 검토 중이므로 간결한 텍스트 목록 사용.

## 검증
- Jekyll 빌드, 전체 형식·typography·POSTECH 검사 통과.
- 1280·768·390·320px의 강의 Schedule·Project와 스터디 4개 학기, 40조합에서 시트 링크 한 곳·우측 정렬·↗·가로 넘침 없음 확인.
- 26F Project에서 Oct 2·Up to 5·Proposal 날짜와 순서 보존·Slides 아랫줄·모든 Final 칸의 Date TBD · #TBD를 확인.
- PC Project 상단·발표 표, 모바일 Project 상단을 눈으로 확인.

## 남은 것
없음.

## 함께 확정한 팔레트
- 교수는 실제 Home의 전후 비교를 본 뒤 같은 네 계열의 저채도 안 적용을 선택. 상세 값과 검토는 [팔레트 기록](2026-10-28-course-pastel-palette.md#4차-채도-재검토와-저채도-안-적용).
- 최종 저채도 적용 후 전체 검사 재통과. 세 강의 Home·Schedule·Project 27조합에서 가로 넘침 없음, 역할 글자 대비 최소 4.87:1.
- 동시 반영된 Study Home·Schedule·Members 분리를 보존하고, 시트 공통 컴포넌트는 새 `study-schedule.html`에 적용.
- 동시 변경 병합 후 최종 재검증: typography 26페이지·177상태, POSTECH 연구실14·강의12페이지, 형식 13페이지×5폭 모두 통과. 시트·Timeline 검사 40조합 재통과.

## 후속 조정: 세 블록 타임라인과 공통 팀 구성 마감
- 교수 요청으로 Timeline을 왼쪽에서 오른쪽의 세 블록으로 변경. 공통 중립 바탕·카드 여백 사용, 모바일 한 열. 기존 단계 내용은 보존.
- 모든 수업에 첫 수업 주 기준 3주차 일요일 팀 구성 마감 적용. 25F Data Engineering 2025-09-21, 26S Programming for Data Science 2026-03-15, 26F Data Engineering 2026-09-27. 기존 4주차 금요일 규칙 대체.
- 모든 Project 팀 표의 발표 열 제목·날짜·순서·Slides 가운데 정렬.
- 기각한 안: 기존 세로 Timeline은 교수의 가로 세 블록 요청에 맞지 않아 대체. 예전 학기만 팀 구성 마감을 생략하는 안도 모든 수업에 적용하라는 요청에 따라 제외.
- 원본 복구 경로: Git `e8db7b4`.
- 추가 교수 요청: Final placeholder는 `Date TBD`만 유지. `#TBD`와 순서 placeholder 렌더링 제거. 확정 순서는 계속 표시.
- 추가 교수 요청: 공통 Project 순서를 Timeline → Evaluation → Teams로 변경. 기존 Teams 우선 결정은 이번 요청으로 대체.
- 기각한 안: 순서까지 TBD로 반복 표기하는 안은 불필요한 정보여서 제거. Evaluation을 Teams 뒤에 두는 안은 교수 요청에 따라 대체.
- 검증: Jekyll 빌드, 디자인 계약 26페이지·616상태, 형식·typography·POSTECH 검사 통과. 세 수업×1280·768·390·320px의 12조합에서 3블록·마감일·가로 넘침 없음·발표 칸 가운데 정렬 확인. 모든 수업의 Timeline→Evaluation→Teams와 26F Final 17칸의 Date TBD 단독 표시 확인. PC·모바일 실제 렌더 확인.
