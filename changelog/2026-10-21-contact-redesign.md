# 2026-10-21 Contact 페이지 디자인
작성자: Sangwoo Mo(moai-postech) | 대상: `contact.md`, wide 테마 Contact 규칙 | 도구: Claude Code(서브에이전트가 고치고 메인 세션이 확인)

> **한줄 결론: Contact 를 Join us 전체 폭 패널 + Before you apply·Visit us 반반 두 칸으로 다시 배치했다. 문장, 이메일 가림 표기, 링크는 그대로다.**

## 요청

교수: Contact 페이지가 매우 못생겼으니 알아서 개선, 서브에이전트로 돌려라.

## 반영 내역

- Join us: 왼쪽 파란 막대가 달린 좁은 상자를 없애고, 컨테이너 전체 폭의 연한 패널로(Home 연구 방향 패널과 같은 `--surface`, `--radius-2`). 절 제목만 강조색, 첫 문장은 `--text-lead`.
- Before you apply 와 Visit us: 대등한 정보라 12칸 격자에서 6칸씩 나란히. 960px 이하에서 한 칸으로 접힌다.
- 글자 위계: 본문 문장은 본문색, 딸린 정보(스터디 연락처)만 작은 회색으로 그 문단 바로 아래. Visit us 주소는 본문색.
- 새 include `_themes/wide/includes/sections/contact-block.html`(일반 절 + `contact-<id>` 클래스), `contact.md` 의 세 절에 `type: contact-block`, Before you apply 에 `id: apply`. 크기·간격은 기존 토큰만.
- 확인(메인 세션): 로컬 빌드, 1440px·375px 화면, 375px 가로 넘침 없음, 바뀐 파일이 Contact 범위뿐인지 git diff.

## 기각한 안과 이유

- 7:5 배분: 5칸에서 학과명과 주소가 꺾인다. 대등한 두 절이라 6:6.
- Join us 문장을 760px 로 묶기: 이메일이 중간에 꺾인다.
- Home 처럼 화면 끝까지 닿는 그라데이션 띠로 시작: 다른 하위 페이지와 통일감이 깨진다.
- 연구 주제 카드·아이콘 추가: 같은 내용은 한 곳에만(연구 방향은 Home).
- 휴대폰에서 가린 이메일이 `{first_name}.` 뒤에서 꺾이는 것은 표기를 바꿔야 막을 수 있어 그대로 두었다.

## 남은 것

없음.
