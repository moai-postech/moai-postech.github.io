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

## 7차 (같은 날): AI Study 를 진한 굵은 글씨로
교수: POSTECH 은 강조하지 않으려고 가늘게 한 것인데 AI Study 는 중요한 것이라 얇게 하면 안 맞다.

- 후보(회색 가는·진한 중간 600·진한 굵게 700·진한 가는 400)를 연구실·강의 머리말과 나란히 비교했다. 진한 굵게가 맞다. 굵기의 뜻이 "진하고 굵게 = 이 사이트의 이름, 회색 가늘게 = 소속(POSTECH)" 하나로 정리되고, `MOAI Lab | AI Study` 는 굵은 이름 둘을 세로선이 "연구실의 스터디"로 나눈다.
- `theme.css`: `.brand-sub` 에 본문색·`--weight-heading` 을 덮어썼다. 세로선·간격·높이는 `.brand-school` 과 같은 규칙 그대로. hover 는 강조색.
- 기각한 안: 회색 가는(6차, 소속과 같은 취급이라 사이트 이름이 약해진다), 진한 600(사이트에 없던 세 번째 굵기), 진한 400(진한데 약해 어정쩡하다).

## 8차 (같은 날): 강의 학수번호를 로고와 같은 강조색으로
교수: 굵기·색이 전체적으로 지금이 최선인지, 최선으로 마무리.

- 세 머리글을 1280px 에서 나란히 놓고 보니 강의 `IMEN891K` 만 회색 굵은 글자였다. 4·6차에서 `AI Study` 를 회색 굵게 했다가 "무거운 회색이라 탁하다"로 버린 조합이 여기만 남았다.
- 학수번호는 연구실 머리글의 로고 자리에 선다(2차). 로고는 강조색이므로 학수번호도 강조색으로 칠했다. 세 머리글이 "강조색 표지 + 진한 이름 | 회색 가는 소속"(스터디는 소속 대신 진한 AI Study) 한 리듬이 된다. 굵기는 그대로 700, hover 때는 과목명도 강조색이 되어 한 링크로 읽힌다.
- `theme.css` `.brand-code` 색 `--muted` → `--accent`. `header-brand.html` 주석, `AGENTS.md`, `_themes/wide/README.md`, `course/README.md` 의 "회색 학수번호" 설명을 고쳤다.
- 확인: 라이브 강의 페이지에 같은 CSS 를 입혀 연구실·스터디 머리글과 1280px 에서 나란히 봤다. 휴대폰은 학수번호를 숨겨 영향이 없다.
- 기각한 안: 진한 본문색(`IMEN891K Data Engineering` 이 긴 이름 하나로 붙는다), 회색 보통 굵기(3차에서 기각, 과목명에서 떨어진 꼬리표처럼 보인다), 지금의 회색 굵게(위 이유).
## 9차 (같은 날): 최종 검수(design-critique)에서 나온 두 가지
교수: 디자인 스킬로 목적에 맞는지 비판적으로 최종 검수. 검수 결과 두 가지를 고치라고 함.

- 검수 방법: 라이브 연구실·강의(26F DE, 26S AX, 25F DE)·스터디를 1280·768·360px 로 보고, 머리말 링크 대상, 회색 대비(흰 바탕 5.9:1, AA 통과), 링크 높이를 쟀다.
- 문제 1, 스터디 좌상단: 로고와 MOAI Lab 이 연구실 홈으로 가서 스터디를 떠났고, 스터디 Home 링크(`AI Study`)는 누르는 높이가 22px 였다. 오늘 머리글을 바꾼 출발점("좌상단은 홈")과 강의 머리말(좌상단 = 강의 Home)에 어긋난다. `header-brand.html`: `sub` 가 있으면 `AI Study` 를 브랜드 링크 안의 `span.brand-sub` 로 넣고 링크 주소를 `url`(스터디 Home)로. `course.html` 은 `url=root` 를 넘긴다. `theme.css`: 링크 안 10px 간격을 빼서 세로선 양옆 간격(`--brand-divide`)을 그대로 두고, 마우스를 올리면 묶음 전체가 강조색. 링크 높이 42px. 연구실 홈은 바닥 줄(P7)에 있다.
- 문제 2, 강의 제목 위 줄: `IMEN891K / IDSC501 / AXGS-501 · Fall 2026 · POSTECH` 이 강조색이라 머리말에서 일부러 약하게 둔 POSTECH 이 몇 줄 아래에서 더 세게 반복됐다. `course/home.html` 의 `course-eyebrow` 와 Schedule·Project 작은 머리(`course/head.html` 의 `course-meta`)에서 `POSTECH` 을 뺐다. 크로스리스팅 전체와 학기는 머리말에 없는 정보라 남겼다.
- 문서: `AGENTS.md`(좌상단 = 지금 사이트의 홈), `_themes/wide/README.md`, `course/README.md`, `course/STUDY.md`.
- 확인: 라이브 스터디에 같은 마크업·CSS 를 입혀 1280px(세로선 양옆 12·13px, 링크 높이 42px, hover 함께 강조색)·360px(8·9px, 오른쪽 끝 191px) 로 봤다.
- 기각한 안: 로고·MOAI Lab 만 스터디 Home 으로 바꾸고 AI Study 는 따로 둔 두 링크(같은 곳으로 가는 링크 둘). 제목 위 줄에서 학수번호도 빼기(크로스리스팅 전체는 머리말에 없다).

## 10차 (같은 날): 9차의 스터디 링크 변경을 되돌림
교수: 스터디 머리말의 MOAI Lab 은 랩에서 하는 하위 항목이라는 것을 강조하려고 일부러 맨 왼쪽에 둔 것이다. 강의는 랩만의 것이 아니라서 일부러 MOAI Lab 을 뺐다.

- 9차의 "좌상단은 그 사이트 홈" 판단은 이 의도를 읽지 않은 일반 원칙이었다. 스터디 머리말은 경로(연구실 > 스터디)라서 각 이름이 제 자리로 가는 것이 맞다.
- `header-brand.html`·`course.html`·`theme.css`: 8차까지의 구조로 되돌렸다. MOAI Lab(로고 포함)은 연구실 홈, `a.brand-sub`(AI Study, 진한 굵은 글씨)는 스터디 Home. 강의 제목 위 줄의 POSTECH 삭제(9차 둘째)는 그대로 둔다.
- 규칙: `AGENTS.md` 테마 계약에 두 머리말의 의도(스터디의 MOAI Lab 은 소속 강조, 강의의 MOAI Lab 생략은 랩만의 것이 아니라서)를 적고 일반 원칙으로 바꾸자고 하지 말라고 남겼다. `_themes/wide/README.md`, `course/README.md`, `course/STUDY.md` 도 맞췄다.
- 기각한 안: 9차의 묶음 전체 스터디 Home 링크(위 이유).

## 남은 것
없음.
