# 2026-11-02 AI Study 머리글 POSTECH | MOAI Lab | AI Study, 중복 부제 제거, 마감 다듬기
작성자: Sangwoo Mo(sangwoomo) | 대상: AI Study Home·Schedule·Members, `_themes/wide/includes/header-brand.html`, `layouts/course.html`, `theme.css`, `course.css` | 도구: Claude Code

> **한줄 결론: AI Study 머리글을 `POSTECH | MOAI Lab | AI Study` 로 바꾸고(AI Study 는 스터디 Home 링크), Schedule·Members 의 중복 부제를 빼고, 꼬리말 앞 여백·모바일 머리글·모바일 명단 카드·Home 카드를 다듬었다.**

POSTECH 요구사항: P1, P2 확인(POSTECH 워드마크가 첫 요소·대표홈 링크, 가는 세로선 뒤 연구실 로고·이름·연구실 홈 링크는 그대로이고 그 뒤에 세로선과 AI Study 를 더했다)

## 요청
교수: 좌상단 머리글을 POSTECH | MOAI Lab | AI Study 로, AI Study 를 누르면 스터디 Home 으로. 그러면 Schedule·Members 아래의 "Undergraduate AI Study" 부제는 필요 없다(강의 사이트는 학기를 밝히려고 두지만 스터디는 빼도 됨). Members 마지막 학생 바로 아래 꼬리말이 붙어 있으니 여백을. AI Study 전체 디자인 마감을 다듬기.

## 반영 내역
- `header-brand.html`: `sub`·`sub_url` 인자로 세 번째 칸(세로선 + AI Study)을 더한다. `layouts/course.html` 의 AI Study 만 쓴다. `theme.css` `.brand-sub`: 연구실 이름과 같은 글꼴·크기, 같은 세로선. 480px 이하에서는 세 칸이 한 줄에 들어가게 글자 16px·간격 12px·로고 26px.
- Schedule·Members 머리의 `Undergraduate AI Study` 부제(`course-meta`) 삭제.
- 꼬리말 앞 여백: Schedule·Members 는 본문 끝에 절 간격(64px)을 두고 꼬리말 윗줄을 다시 그린다(Home 은 참여 안내 절이 이미 간격을 가짐).
- 휴대폰 메뉴: 강의·스터디 메뉴는 링크 셋이 한 줄인데 연구실 메뉴용 최소 높이 88px 이 남아 빈 줄이 생겼다. `.course-nav` 의 최소 높이를 풀었다(강의 사이트도 같이 좋아짐).
- 휴대폰 Members 카드: 칸마다 이름표를 단 긴 카드 대신 "번호 이름 / 기수 · 입학연도 · 학과 · 메일 / 참여" 세 줄.
- Home 학기 카드: 회차 칩(줄마다 들쭉날쭉) 대신 앞 세 주제를 회색 한 줄로, 나머지는 `+N more`. 기수 막대 그래프 높이를 학과 그래프와 같게(320px, 휴대폰 240px).

## 기각한 안과 이유
- 휴대폰에서 AI Study 칸을 숨기는 안: 교수가 머리글에서 스터디 Home 으로 가길 원해 글자 크기와 간격을 줄여 한 줄에 넣었다.
- 강의 사이트 머리 부제까지 빼는 안: 교수 말대로 강의는 학기를 밝히는 역할이 있어 그대로 둔다.

## 남은 것
- Schedule 학기 탭은 최신 학기가 왼쪽(내림차순)이고 Home 타임라인·Members 탭은 1기부터(오름차순)다. 맞출지 교수에게 확인.
