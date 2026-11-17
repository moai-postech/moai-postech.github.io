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

## 후속: 내용 판단 세 가지
- 묶음 제목 대소문자(교수: 알아서): `_data/members.yml` 의 "PhD students"·"Master students"·"During faculty"·"During postdoc" 을 "PhD Students"·"Master Students"·"During Faculty"·"During Postdoc" 으로. 같은 페이지의 "Honors & Awards", 사이트의 "단어마다 대문자로 시작하는 라벨(절 제목)" 규칙에 맞춘 것. Faculty 의 작은 소제목(`h3.sub`)은 화면에서 모두 대문자로 보여 그대로 둔다.
- Honors & Awards 순서(교수: 중요도순이라 그대로): 바꾸지 않고, 같은 지적이 반복되지 않게 데이터에 주석만 남겼다.
- 빈 Alumni 절(교수: 둬도 괜찮다): 그대로 두고 데이터에 주석만 남겼다.

## 후속: During 묶음은 소문자로 되돌림
교수: During XXX 는 뒷글자 소문자가 더 예쁘지 않나. 각 페이지 안에서는 통일성보다 예쁜 것을 우선하자. 판단: 동의. "During faculty" 는 이름표가 아니라 시기를 말하는 문장 조각이라 소문자가 자연스럽고, 그 페이지의 묶음 제목이 모두 During 이라 어긋남도 없다. "During Faculty"·"During Postdoc" 을 "During faculty"·"During postdoc" 으로 되돌렸다. Lab Members 의 "PhD Students"·"Master Students" 는 "Postdocs"·"Alumni" 같은 명사 이름표 옆이라 대문자로 둔다. 규칙은 `AGENTS.md` 콘텐츠 표기 규칙에 한 줄로 남겼다.

## 남은 것
없음
