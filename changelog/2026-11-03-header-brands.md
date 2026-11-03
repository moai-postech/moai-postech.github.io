# 2026-11-03 강의·스터디 머리글을 연구실 머리글 문법에 맞춤
작성자: Sangwoo Mo(sangwoomo) | 대상: `_themes/wide/includes/header-brand.html`, `_themes/wide/includes/theme.css`, `tools/check_design.js`, `POSTECH.md`, `AGENTS.md`, `_themes/wide/README.md`, `_themes/wide/includes/course/README.md` | 도구: Claude Code

> **한줄 결론: 스터디 머리글을 `MOAI Lab | AI Study` 로 바꿨다. 강의 머리글은 `Data Engineering | POSTECH IMEN891K` 로 바꿨다가 교수 지적으로 원래 `IMEN891K Data Engineering | POSTECH` 으로 되돌렸고, 연구실 `MOAI Lab | POSTECH` 은 그대로다.**

POSTECH 요구사항: P1 확인(연구실 머리글의 POSTECH 대표홈 링크는 그대로. 강의 머리글도 POSTECH 글자 링크 유지. 스터디 머리글은 학교 칸을 뺐고, 바닥 한 줄 P7 의 대표홈 링크가 남는다. `check_postech.js` 의 P1 은 원래 연구실 페이지만 본다)

## 요청
교수: 연구실 머리글 `MOAI Lab | POSTECH` 은 좋다. 강의·스터디 사이트도 일관되게. 스터디는 `| POSTECH` 을 빼고 `MOAI Lab Study` 만. 강의는 POSTECH 이 들어가면 좋겠으니 디자인을 고민해서 고칠 것.

## 반영 내역
- 디자인 검토(design-critique): 세 머리글의 공통 문법을 "진한 이름 | 회색 학교"로 정했다. 기존 강의 머리글 `IMEN891K Data Engineering | POSTECH` 은 회색 칸이 과목명 앞뒤로 둘이라 이름이 가운데 끼여 보였고, 연구실 머리글과 짜임이 달랐다.
- 강의: 학수번호를 과목명 앞에서 학교 칸 뒤로 옮겼다(`Data Engineering | POSTECH IMEN891K`). Stanford CS231n, MIT 6.S191 처럼 학교 이름 뒤에 학수번호를 붙이는 관행과 같아 "POSTECH IMEN891K" 가 한 단위로 읽히고, 과목명이 연구실 이름 자리에 선다. 링크는 POSTECH 글자만(대표홈), 학수번호는 같은 회색 보통 굵기 글자다. 480px 이하는 학수번호를 숨겨 `Data Engineering | POSTECH`.
- 스터디: 학교 칸을 뺐다(`MOAI Lab AI Study`). 연구실 이름이 이미 소속을 말하고, 세 칸이 되면 머리글이 길어진다.
- `header-brand.html`: `sub` 가 있으면 학교 칸 없음, `code` 가 있으면 학교 칸 안에 POSTECH 링크와 학수번호. `theme.css`: `.brand-code` 를 학교 칸 안 글자로(간격 .3em, 색·글꼴은 학교 칸을 물려받음), 학교 칸 hover 규칙을 링크에만.
- `check_design.js`: 공통 머리글 위치 비교가 `.brand-school` 을 쟀는데 스터디에는 이제 없어서 `.brand`(이름 시작점, 높이)로 바꿨다. 폭은 이름마다 달라 비교에서 뺐다.
- 확인: 이 맥은 로컬 빌드가 안 돼서 라이브 강의(26F Data Engineering)·스터디 페이지에 같은 DOM·CSS 를 입혀 1280px·390px 로 봤다. 넘침 없음.

## 기각한 안과 이유
- 강의 머리글에서 학수번호를 아예 빼기(`Data Engineering | POSTECH`): 가장 단순하지만 2026-11-02 교수가 머리글에 원 학수번호를 넣기로 한 결정을 되돌린다.
- 기존 짜임 유지(`IMEN891K Data Engineering | POSTECH`): 회색이 과목명 양쪽에 있어 위계가 흐리고 연구실 머리글과 짜임이 다르다.
- `POSTECH IMEN891K | Data Engineering`(학교를 앞에): 연구실·스터디는 이름이 앞이라 순서가 뒤집힌다.
- 강의 머리글에 연구실 로고를 붙이기: 로고는 연구실 홈 링크라는 약속인데 강의 머리글의 첫 링크는 강의 Home 이다. 연구실 링크는 바닥 줄에 있다.
- 스터디 이름을 요청 문구대로 `MOAI Lab Study` 로: 공식 이름이 Undergraduate AI Study 이고 Home 제목과 같아야 해 `AI Study` 를 유지했다. 교수가 확인했다(같은 날: AI Study 유지).

## 2차 (같은 날): 강의 학수번호를 과목명 앞으로 되돌림
교수: `Data Engineering | POSTECH IMEN891K` 는 아니다. 학수번호는 과목명보다 왼쪽에 가야 한다.

- `header-brand.html`·`theme.css`: 학수번호를 다시 과목명 앞 회색 굵은 글자(`.brand-code`)로, 그 뒤 `| POSTECH`. 1차 이전과 같은 모양이다. 학수번호는 연구실 머리글의 로고 자리에 서는 셈이라 세 머리글이 "앞 표지 + 이름 | 학교"로 맞는다. 휴대폰은 학수번호를 숨긴다(그대로).
- `AGENTS.md`, `POSTECH.md`, `_themes/wide/README.md`, `course/README.md` 의 강의 머리글 설명을 되돌렸다. 스터디 변경과 `check_design.js` 는 그대로.
- 기각한 안: `Data Engineering | POSTECH IMEN891K`(1차). 학교 칸 뒤 학수번호는 과목명보다 뒤에 읽혀 교수가 받지 않았다. `POSTECH IMEN891K | Data Engineering` 도 학교가 앞에 와서 연구실·스터디와 순서가 뒤집혀 쓰지 않았다.
- 확인: 1차 이전 라이브 화면과 같은 마크업·CSS 로 돌아간 것을 diff 로 확인했다.

## 3차 (같은 날): 머리말 회색 글자를 실제 보통 굵기로
교수: 지금 머리말이 최선인지 물어 검토. 짜임은 그대로 두고 글꼴 굵기 하나를 고치기로 했다.

- 원인: `.brand-school`(POSTECH)·`.brand-sub`(AI Study)는 CSS 로 보통 굵기(400)인데, 두 문서 틀이 Outfit 을 600·700 만 불러와서 브라우저가 600 으로 대신 그렸다(라이브 `document.fonts` 로 확인). 진한 이름(700)과 굵기가 거의 같아 이름과 보조 정보의 차이가 흐렸다.
- `_themes/wide/layouts/default.html`, `course.html`: Outfit 요청을 `wght@400;600;700` 로. 세 머리말의 회색 글자가 가늘어져 진한 이름이 앞에 선다. 다른 Outfit 글자(이름, 학수번호, 꼬리말 연구실 이름)는 600·700 이라 그대로다.
- 강의 학수번호는 굵은 회색 그대로 뒀다. 세로선 왼쪽(이름 묶음)은 굵게, 오른쪽(학교)은 가늘게로 읽힌다.
- 확인: 라이브 연구실·강의·스터디 페이지에 같은 글꼴 요청을 더해 1280px, 스터디 390px 로 봤다.
- 기각한 안: 학수번호도 보통 굵기로(회색은 모두 가늘게). 과목명과 한 묶음인데 가늘면 따로 떨어진 꼬리표처럼 보인다.

## 4차 (같은 날): 스터디 `AI Study` 를 회색 굵은 글씨로
교수: AI Study 는 굵은 글자가 낫지 않을까.

- 3차로 회색 글자가 실제로 가늘어지면서 `AI Study` 가 학교 칸처럼 약해 보였다. `theme.css` `.brand-sub` 굵기를 보통(400)에서 `--weight-heading`(700)으로, 색은 회색 그대로. 강의 `IMEN891K Data Engineering` 과 같은 "회색 굵게 + 진한 굵게" 이름 묶음이 되고, 세 머리말 모두 세로선 앞 이름은 굵게, 뒤의 학교만 가늘게가 된다.
- 확인: 라이브 스터디 페이지에 같은 굵기를 입혀 1280px 로 봤다.
- 기각한 안: 진한 굵게(`MOAI Lab AI Study` 를 모두 본문색). 긴 이름 하나로 읽혀 연구실과 스터디의 구분이 사라진다.

## 5차 (같은 날): 머리말 좌우 간격을 두 단계 규칙으로
교수: 학수번호·강의명·POSTECH 사이 좌우 간격이 지금이 최선인지. 머리말 세 개를 계속 고치고 검수해서 최선으로.

- 실측(1280px, 글자 23px): 이름 안 낱말 사이 4px, 로고→이름 10px, 학수번호→과목명 10px, MOAI Lab→AI Study 8px, 이름→세로선 12px, 세로선→POSTECH 12px. 같은 관계(회색 굵게 + 진한 굵게)인 강의와 스터디가 10px·8px 로 달랐고, 휴대폰은 글자가 16px 로 줄어도 간격이 px 그대로라 상대적으로 벌어졌다.
- 규칙: 간격은 두 단계다. 한 이름의 두 부분 사이 `--brand-pair`(.43em, 23px 에서 10px)는 낱말 사이(4px)보다 넓어 두 부분이 구분되고, 세로선 양옆 `--brand-divide`(.52em, 12px)는 그보다 넓어 학교가 따로 선다. 글자 크기 기준(em)이라 휴대폰에서도 비율이 같다(16px 에서 7px·8px).
- `theme.css`: `:root` 에 두 토큰, `.brand-sub` 왼쪽 여백, `.brand-school` 양옆, `.brand-code` 오른쪽(브랜드 링크의 10px 간격을 빼서 맞춤). 컴퓨터 화면 값은 MOAI Lab→AI Study 가 8px→10px 로 바뀐 것뿐이다. 로고→이름 10px 는 그림과 글자 사이라 그대로.
- 확인: 라이브 연구실·강의·스터디에 같은 CSS 를 입혀 1280px·600px·390px 로 봤다(스터디 390px 에서 오른쪽 끝 374px, 넘침 없음).
- 기각한 안: 모든 간격을 8px 토큰(`--space-2`)으로. 이름 안 간격과 세로선 간격이 같아져 단계가 없어진다. 세로선 간격을 휴대폰에서도 12px 로 두기: 16px 글자 옆에서 이름보다 세로선이 더 눈에 띈다.

- 후속: 5차 push 의 `theme.css` 에서 `.brand-code` 줄 끝 주석을 닫지 않아(`*/` 누락) 그 뒤 규칙(로고 글자 `.brand-word`, 메뉴 등)이 다음 주석 끝까지 무시됐다. `checks` 의 `test_design` 이 메뉴 굵기·글꼴 역할 위반으로 잡아 바로 닫았다. 배포 사이 몇 분 동안 라이브 머리글 일부가 기본 글꼴로 보였다.

## 6차 (같은 날): 스터디 `MOAI Lab | AI Study`, 강의 링크 hover
교수: AI Study 를 굵게 하니 못생겼다, 다시 검토. `MOAI Lab | AI Study` 로 세로선을 두면 어떤가. 강의 머리글 링크는 학수번호까지 통째로 눌리는 게 낫지 않나.

- 후보 다섯(회색 보통·중간·굵게 세로선 없음, 세로선 + 회색 보통·중간)을 라이브 스터디 페이지에 나란히 놓고 연구실 `MOAI Lab | POSTECH` 과 비교했다. 세로선 + 회색 보통이 연구실 머리글과 굵기·색·간격까지 같아 세 머리말이 "진한 이름 | 회색 가는 글자" 한 문법이 된다. 회색 굵게(4차)는 무거운 회색이라 탁하고, 세로선 없는 보통 굵기는 MOAI Lab 에 붙은 꼬리표처럼 약했다.
- `theme.css`: `.brand-sub` 를 `.brand-school` 과 한 규칙으로 합쳤다(세로선, `--brand-divide` 양옆, 높이 22px, 보통 굵기, 회색). 링크는 그대로 스터디 Home.
- 강의 링크: 학수번호와 과목명은 원래 한 링크였다(사이 간격 포함). 마우스를 올리면 과목명만 강조색이 되고 학수번호는 회색으로 남아 링크가 아닌 것처럼 보였다. `.brand a:hover .brand-code` 로 둘이 함께 바뀐다.
- 문서: `AGENTS.md`, `POSTECH.md` P1, `_themes/wide/README.md`, `course/README.md`, `header-brand.html` 주석.
- 확인: 라이브 스터디에 같은 CSS 를 입혀 1280px·360px(머리말 오른쪽 끝 188px), 강의 1280px 에서 학수번호 위 hover 로 둘 다 강조색인 것을 봤다.
- 기각한 안: 4차의 회색 굵게(위 이유). 회색 중간 굵기(600)는 세로선이 있든 없든 연구실 POSTECH(400)과 굵기가 달라 문법이 하나 더 생긴다. 11-02 에 세로선을 뺀 이유는 `POSTECH | MOAI Lab | AI Study` 로 선이 둘이었기 때문이고, 지금은 선이 하나라 해당하지 않는다.

## 남은 것
없음.
