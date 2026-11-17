# 2026-11-18 People 세 탭 디자인 점검, 휴대폰 Other Mentees 첫 제목 간격
작성자: Sangwoo Mo(sangwoomo) | 대상: `_themes/wide/includes/theme.css` | 도구: Claude Code

> **한줄 결론: People 세 탭을 PC·휴대폰에서 실측했고, 휴대폰 Other Mentees 의 소개→첫 묶음 제목 간격만 16px 에서 32px 로 넓혔다.**

POSTECH 요구사항: 영향 없음

## 요청
교수: People 탭도 Teaching 처럼 꼼꼼하게 봐 달라.

## 점검(공개 사이트, 1440px·375px)
- 세 탭 모두 본문 시작 208px(PC), 절 사이 64px, 묶음 제목→내용 16px, 가로 넘침 없음. Lab Members 휴대폰 두 칸 카드는 주제가 두 줄로 접혀도 같은 줄 카드의 학위 줄 높이가 맞는다.
- 휴대폰 Other Mentees: 소개 문단 아래 16px 에 "During faculty", 그 아래 16px 에 목록이라 제목이 어느 쪽에 속하는지 흐렸다(PC 는 48px).

## 반영 내역
- `theme.css` 휴대폰(680px 이하) `.page-other-mentees .page-intro + .content-section { padding-top: var(--space-6) }`. 결과 375px: 소개 아래 32px → 제목 → 16px → 목록. PC 그대로.

## 기각한 안과 이유
- 모든 `page-intro` 다음 절에 적용: Seminar 등 다른 페이지까지 바뀐다(요청 범위 밖).

## 남은 것
내용 판단이 필요한 점 셋을 교수에게 물었다(Honors 순서, 빈 Alumni 절, 묶음 제목 대소문자).
