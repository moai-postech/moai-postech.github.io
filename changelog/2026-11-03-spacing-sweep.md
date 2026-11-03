# 2026-11-03 전 페이지 여백 점검
작성자: Sangwoo Mo(sangwoomo) | 대상: `_themes/wide/includes/theme.css`, `_themes/wide/includes/course/course.css`, `_themes/wide/design-contract.json` | 도구: Claude Code

> **한줄 결론: 연구실·강의·스터디의 모든 탭을 1440·390px 로 돌며 찾은 여백 불균형 일곱 가지를 공통 규칙에서 고쳤다.**

POSTECH 요구사항: 꼬리말 위치와 경계선만 바뀌었다. 꼬리말 내용(P7 링크·로고·주소)은 그대로다.

## 요청
교수: 랩 사이트와 하위 강의·스터디 사이트의 모든 탭을 돌며 여백 등 디자인이 이상한 곳을 지적받기 전에 찾아 고치라고 요청.

## 반영 내역
- 꼬리말 앞 여백: `main > :last-child` 에 주던 64px 를 `main` 에 준다. main 끝이 `<script>` 인 강의 Schedule 은 이 규칙이 빗나가 표가 꼬리말에 붙어 있었다(여백 0, 표 마감선이 꼬리말 선 역할). 이제 모든 페이지가 마지막 내용에서 꼬리말까지 64px 이고 꼬리말 선이 있다. 2026-11-02 스터디만 고친 예외(`section-gap` 과 선 되살리기)와 강의 표 페이지의 `border-top: 0` 은 지웠다. 그 예외 때문에 스터디는 휴대폰에서 48px 로 다른 페이지(64px)와 달랐다. Contact 패널의 `margin-bottom`, course.css 의 중복 `main > :last-child` 도 지웠다.
- 휴대폰 강의·스터디 머리글: 링크 셋이 한 줄인데 연구실 메뉴용 최소 높이 88px 이 남아 메뉴와 구분선 사이에 53px 빈 띠가 있었다. `.course-nav` 는 최소 44px. 디자인 계약 `shared-header-navigation` 을 연구실(`.site-nav`, 88px)과 강의·스터디(`course-header-navigation`, 44px)로 나눴다.
- Research Overview: 소개 뒤 첫 단계가 다른 페이지의 "소개 → 첫 절 = `--page-start`" 를 따르지 않고 절 간격을 썼다(데스크톱 64 vs 48, 휴대폰 48 vs 16). 첫 단계만 `--page-start` 로, 세로 레일은 그만큼 위에서 시작해 2번 마디까지 닿게 했다.
- 휴대폰 People 하위 탭: 세 탭 폭이 362px 라 390px 화면에서 Other Mentees 만 둘째 줄로 떨어졌다. 휴대폰 탭 좌우 안쪽 여백 16 → 12px.
- 휴대폰 Seminar 필터 줄: `Full schedule ↗` 가 혼자 다음 줄 오른쪽에 떨어져 빈 줄이 생겼다. 휴대폰 간격 24 → 12px 로 364px 이상 화면에서 한 줄.
- 휴대폰 강의·스터디 일정 카드: 번호 열이 줄마다 글자 폭이라 9와 10에서 제목 시작이 10px 어긋났다. 번호 열 최소 1.4em. 스터디 카드의 `PDF 1, 2  Lab` 이 데스크톱 열 정렬(가운데)을 따라 카드 가운데 떠 있었다. 카드에서는 논문 줄처럼 왼쪽.
- 읽은 규칙: 저장소 `AGENTS.md`, `_themes/wide/README.md`, 2026-10-28 teaching-template-rules·publications-type-hierarchy, 2026-11-02 ai-study-header-polish·final-design-review, 2026-11-03 schedule-grid·tab-names. 확인: 로컬 빌드, 고친 페이지 1440·390·375px 캡처와 꼬리말 앞 여백 실측(전 페이지 64px).

## 기각한 안과 이유
- 휴대폰 `--page-start` 를 16px 에서 키우기: 소개 → 첫 절 16px 가 절 간격 48px 보다 좁지만, 2026-10-28 교수 요청으로 줄인 값이다.
- 강의 표 오른쪽 끝 64px 를 줄이기: 왼쪽 14px 과 달라 보이지만 2026-11-03 schedule-grid 에서 교수와 정한 끝 여백이다.
- Home Paper Stella 띠 그림 위치, Research Overview 마지막 문장(마지막 단계 아래 24px): 같은 날 다른 회차의 결정이라 두었다.
- 스터디 Home 학과 treemap 의 좁은 칸 `IT융…` 말줄임: 칸 폭(약 40px)에 글자가 들어갈 자리가 없다. 줄바꿈하면 `IT융 / 합` 으로 갈라져 더 어색하다.

## 이어서: 360px 휴대폰
- 360px(갤럭시 다수) 전 페이지를 캡처하고 가로 넘침·탭 줄바꿈을 검사했다.
- People 하위 탭과 Seminar 필터가 360px 에서 두 줄이 되던 것: 380px 이하에서 탭 안쪽 여백 8px, 필터 간격 8px 로 한 줄.
- 한국어 과제명·세미나 제목이 단어 가운데서 끊겼다("계층형 기 / 억·추론", "최적 / 화", "경영 / 자로의"). `body` 에 `word-break: keep-all`. Home Media 에만 있던 같은 규칙은 지웠다.
- Faculty 이력 등 연구실 페이지의 마지막 줄 외톨이 단어("Jong-Chyi / Su)"): 강의·스터디에만 있던 `text-wrap: pretty` 를 모든 페이지 `main` 으로 옮겼다.
- 확인: 360·375·1440px 전 페이지 가로 넘침 없음, 하위 탭·필터·메뉴 한 줄.

- Publications > Map View 의 Paper Stella 삽입 화면이 360px 에서 범례와 `도움말`이 겹치고 `Last updated` 가 아래쪽 별 이름을 덮었다. 삽입된 앱 쪽(paper-stella `styles/app.css`, 그 저장소 changelog `2026-11-03-phone-bottom-line`)에서 고쳐 공개·비공개판을 배포했다. 이 저장소 파일은 바뀌지 않았다.

## 남은 것
없음.
