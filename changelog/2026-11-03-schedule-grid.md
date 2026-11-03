# 2026-11-03 세 강의 Schedule 표 열 맞춤
작성자: Sangwoo Mo(moai-postech) | 대상: _themes/wide/includes/course/schedule.html, _themes/wide/includes/course/course.css, _themes/wide/includes/course/COURSE.md, _themes/wide/includes/course/README.md | 도구: Claude Code

> **한줄 결론: 세 강의 Schedule 표가 같은 열 폭을 쓰고, 초청 행 장소·시간의 오른쪽 끝을 모든 강의에서 행 안쪽 12px 선에 맞춤.**

POSTECH 요구사항: 영향 없음

## 요청
초청 강의의 Location & Time 오른쪽 정렬이 강의마다 다르다. 세 강의 양식을 같게 하고 Materials·Reading 도 통일감 있게 각을 맞춘다.

## 결정과 반영 내역
- 실측(1440px): Date 열 102~105px, Materials 94~126px 로 강의마다 달랐고, 초청 행 오른쪽 끝은 Data Engineering 1188px, Programming for AX 1152px 였다(Reading 이 없을 때만 48px 안쪽).
- 강의 Schedule 표에 `lecture-schedule` 을 더하고 681px 이상에서 열 폭을 고정했다. Date 108, # 40, Materials 112(좌우 여백 같게, 머리와 PDF 가 같은 중심), Reading 128(왼쪽 여백 16), Topic 은 나머지.
- 48px 안쪽 규칙 두 줄을 지웠다. 마지막 칸(Reading, Materials, 초청 행 장소·시간)은 모두 행 안쪽 12px 에서 끝나며, 왼쪽 날짜의 12px 여백과 대칭이다.
- 스터디 일정표와 Project 표는 같은 `course-schedule` 을 쓰지만 열이 달라 건드리지 않았다. 휴대폰 카드 배치도 그대로다.

## 기각한 안과 이유
- Reading 을 오른쪽 정렬해 초청 행 장소·시간과 오른쪽 선을 맞추기: 길이가 다른 글은 왼쪽 정렬이라는 표 정렬 규칙(교수 2026-11-02)과 어긋난다.
- Materials 를 왼쪽 정렬해 PDF 위치를 강의 사이에서 맞추기: Materials 가운데 정렬과 보이지 않는 Lab 자리 규칙을 되돌리게 되어 요청 범위를 넘는다.

## 검증과 원본
이 맥에 Ruby 3 이 없어 로컬 빌드 대신 라이브 세 Schedule 페이지에 같은 CSS 를 주입해 열 위치와 초청 행 오른쪽 끝을 쟀다. 세 강의 모두 Date 0~108, # 108~148, 초청 행 오른쪽 1188 로 같다. push 뒤 checks 와 Pages 반영 확인. 원본은 git 이력.

## 남은 것
없음.

## 2차: 오른쪽 구역 규칙 (같은 날)
요청: "디자인적으로 더 나은 방향으로 규칙을 잡고 전체적으로 통일감있게 다듬어줘."

1차 뒤에도 두 가지가 남았다. 26S 는 Reading 이 없어 Materials 가 다른 자리(1088)에 섰고, Data Engineering 은 왼쪽 정렬 Reading 의 끝이 들쭉날쭉한데 초청 행 장소·시간만 행 오른쪽 끝(1188)에 붙어 오른쪽 선이 셋으로 갈렸다.

- 표를 세 구역으로 정했다. 왼쪽 Date·#(고정, 가운데), 가운데 Topic, 오른쪽 구역(Materials 112 + Reading 128 = 240px, 모든 강의에서 같은 폭과 자리).
- 오른쪽 구역 안은 모두 열 선에서 왼쪽 정렬로 시작한다. MATERIALS 머리글, PDF·Lab, 초청 행 장소·시간이 한 선(1440px 화면에서 표 기준 972), READING 머리글과 읽을거리가 다음 선(1084)이다. 세 강의가 같다.
- Reading 이 없는 강의(26S)는 Materials 가 오른쪽 구역 전체를 써서 PDF 가 Data Engineering 과 같은 자리에 선다.
- 표 정렬 규칙(README)에서 강의 Schedule 의 Materials 를 가운데에서 왼쪽으로 옮겼다. 스터디 Materials 는 고정 자리 묶음이라 가운데를 유지한다.
- 좁은 태블릿에서 긴 제목이 장소·시간을 다음 줄로 밀어도 장소·시간은 오른쪽 구역에 남는다(`margin-left: auto`). 휴대폰 카드는 그대로다.

기각한 안: Reading 오른쪽 정렬(길이가 다른 글은 왼쪽 정렬 규칙과 어긋남). 26S 에 빈 Reading 열 두기(머리글만 있고 빈 열이라 어색함, Materials 를 넓히는 쪽이 같은 효과).

검증: 라이브 세 페이지에 같은 CSS 를 주입해 쟀다. 세 강의 모두 MATERIALS·PDF·장소 972, Data Engineering READING·읽을거리 1084. push 뒤 라이브에서 다시 확인.

## 3차: 오른쪽 구역 안 간격 (같은 날)
요청: "완벽한 디자인이 될 때까지 디자인 스킬 써서 최고의 상태로."

비평(첫인상, 위계, 일관성, 접근성)에서 남은 것은 Data Engineering 의 PDF(26px)와 Reading 사이 86px 빈 간격이었다. 오른쪽 구역 폭(240px)은 그대로 두고 Materials 112 → 104px, Reading 128 → 136px 로 나눴다. MATERIALS 머리글(78px)은 칸에 들어가고, READING 머리글과의 간격도 남는다.

- 1440·1024·860·700px 폭에서 세 강의 모두 장소·시간이 PDF 와 같은 선에 서고, 넘치는 칸이 없다(라이브 주입으로 측정).
- 700px 처럼 좁은 태블릿에서는 긴 제목이 줄을 넘겨 초청 행이 세 줄이 되지만, 장소·시간은 오른쪽 구역에 남는다.

기각한 안: Materials 96 + Reading 144(머리글 두 개가 붙어 보임), 오른쪽 구역을 216px 로 줄이기(26S 의 `CHANGeUP GROUND, Event Hall` 이 두 줄로 꺾임), 표 최대 폭을 줄여 제목과 PDF 사이를 좁히기(머리글·꼬리말과 폭이 어긋나고 사이트 폭 토큰과 엮인 결정).

## 4차: 초청 행 장소·시간은 오른쪽 끝 (같은 날)
교수에게 지금 격자로 확정할지 물었고(이대로 / 표 폭 줄이기 / 장소·시간 오른쪽 끝), 교수가 "초청 장소·시간 오른쪽 끝으로"를 골랐다. 장소·시간을 행 오른쪽 안쪽 12px 선에 오른쪽 정렬로 되돌렸다. 세 강의 모두 같은 선이다. 격자(Date 108, # 40, Materials 104 + Reading 136)와 Materials·Reading 왼쪽 정렬은 그대로다. 좁은 태블릿에서 긴 제목이 장소·시간을 다음 줄로 밀어도 오른쪽에 남는다(`margin-left: auto`).

기각한 안: 2차의 PDF 선 왼쪽 정렬(교수 선택으로 대체).

## 5차: 제목과 PDF 사이 간격 (같은 날)
교수: "스케줄 표 최대폭은 그대로 두되, 제목과 PDF 사이 간격은 줄여도 되지 않아? 디자인 스킬 써서 검토해봐."

실측(1440px): 강의 제목 중간값 120~150px, 최장 340px, 초청 행 제목·연사 줄 최장 427px. Topic 열은 약 810px 라 보통 제목 끝에서 PDF 까지 약 680px 가 비었다.

- 넓은 화면(1000px 이상)에서 Topic 을 480px 로 고정했다. PDF 가 표 기준 972 → 640 으로 와서 제목과 가까워졌다(근접성).
- 남는 폭은 마지막 열이 받는다. Reading 을 오른쪽 정렬해 행 오른쪽 끝에 맞췄다. Reading 과 초청 행 장소·시간이 한 오른쪽 선에 서서, 왼쪽(날짜·번호·제목·PDF)과 오른쪽 끝(읽을거리·장소·시간)으로 무게가 나뉜다.
- 1000px 아래는 4차 격자(Materials 104 + Reading 136, Topic 나머지) 그대로다. 1000px 에서 옛 Topic 폭이 약 500px 라 넘어갈 때 튀지 않는다.
- README 표 정렬에 강의 Schedule Reading 을 "오른쪽" 줄로 옮겼다. 스터디 Reading 은 왼쪽 그대로다.

기각한 안: Topic 480 에 Reading 왼쪽 정렬(PDF·Reading 이 가운데에 모이고 오른쪽 3분의 1 이 비어 초청 장소·시간만 끝에 떨어짐), 표 최대 폭 줄이기(교수가 유지하라고 함).

## 6차: Materials 가운데, 오른쪽 끝 한 선 (같은 날)
교수: "material, reading은 전부 왼쪽 정렬 하기로 했어? 가운데 정렬이 더 이쁘지는 않을까?", "게스트렉처 시간장소는 완전 오른쪽보다 가장 오른쪽 텍스트에 맞게", "가장 오른쪽 열을 오른쪽 정렬로 하고 거기서 각을 맞출까?"

- 가장 오른쪽 열(Reading)은 5차에서 이미 오른쪽 정렬했고, 초청 장소·시간과 같은 오른쪽 선(표 기준 1188)에 선다. READING 머리글만 1200 까지 나가 있어 오른쪽 여백 12px 를 줘서 같은 선에 맞췄다.
- Materials 는 가운데 정렬로 되돌렸다. 26S 처럼 Materials 가 마지막 넓은 열이어도 PDF 가 제목 가까이 같은 자리에 서도록, 칸 앞쪽에 104px 고정 자리(`cs-mat`)를 두고 그 안에서 MATERIALS 머리글, PDF, Lab 을 가운데 정렬한다. README 표 정렬도 원래대로 Materials 를 가운데 줄에 둔다.
- 26S 에서 Materials 를 오른쪽 끝 열로 오른쪽 정렬하는 안은 기각했다. PDF 가 다시 제목에서 멀어지고 Data Engineering 과 자리가 달라진다.

## 7차: 세 간격 고르게 (같은 날)
교수: "지금 줄 간격이 개판이자나? 맨 오른쪽 열은 오른쪽정렬 하더라도 맨 끝에서 어느정도 마진이 있는게 이쁜거같고, 오른쪽에서 2번째 열은 간격을 너무 떼지 말고 적당한 간격으로 둬. Topic 저기는 너무 길게 잡을 필요도 없지만 그렇다고 너무 작게 잡을 필요도 없어."

5·6차의 Topic 480px 고정은 Materials 와 Reading 사이를 약 450px 벌리고 Reading 을 행 끝에 붙였다. 세 간격(제목→PDF, PDF→Reading, Reading→행 끝)을 고르게 하도록 오른쪽 묶음을 고정 폭으로 바꿨다.

- 1000px 이상: Materials 120 + Reading 200(행 끝 여백 64), Topic 은 나머지. 1280px 화면에서 PDF→Reading 약 120px, 여백 64px, Topic 약 700px.
- 1000px 아래: Materials 104 + Reading 136, 여백 12(4차와 같음).
- Reading 과 초청 행 장소·시간은 여백을 둔 같은 오른쪽 선에서 끝난다. Materials 는 고정 자리 안 가운데 정렬 그대로다.
- Topic 480 고정 규칙은 지웠다.

비교한 안: Topic 640(PDF→Reading 약 180px, 여전히 넓음), Topic 700(채택한 배치와 같은 간격, 고정 폭 대신 오른쪽 묶음 고정으로 화면 폭에 따라 Topic 만 늘고 줄게 함).

## 8차: Home·Project 디자인 검토 (같은 날)
Schedule 확정 뒤 같은 기준(일관성, 위계)으로 Home·Project 탭과 머리글을 검토했다. 머리글, Course Outline, Grading, Resources 는 어긋난 곳이 없었다. 두 곳을 고쳤다.

- Home 운영 정보의 시간 `9:30 – 10:45 KST` 가 범위 한가운데서 꺾였다. 시간을 한 덩어리(`course-time`, 줄바꿈 없음)로 묶어 요일 다음에서만 줄이 바뀌게 했다.
- Project Timeline 의 Team Building 카드만 설명이 먼저, 팀 인원이 맨 아래였다. 다른 카드(Proposal, Final Presentation)처럼 굵은 핵심 정보 `Up to 5 students` 를 제목 바로 아래, 설명을 그 아래로 바꿨다.

그대로 둔 것: 운영 정보 이름표 `LOCATION & TIME` 의 두 줄 접힘(이름표 열 7.5em 은 모든 칸이 공유하는 폭이라 넓히면 카드 전체 배치가 바뀐다).

## 9차: 강의 사이트 전 페이지 점검 (같은 날)
세 강의 × 세 탭(Home, Schedule, Project) × 네 폭(1440, 1024, 768, 375px)을 자동 점검했다(가로 스크롤, 칸을 넘치는 글자, 화면 밖 요소, 깨진 그림). Home·Schedule 은 모두 문제없었다.

- Project Evaluation 이 681~960px 에서 Team(3칸)과 Individual(1칸)을 한 줄 4칸에 두어 기준 칸이 약 103px 로 좁아졌다. `Technology`, `Presentation`, `professionalism`, `responsibilities` 가 칸 밖으로 나갔다. 이 폭에서는 두 묶음을 위아래로 쌓아 기준 칸이 130~200px 이 되게 했다. 700~1024px 에서 넘침 0 건.
- Timeline 카드의 칸 넘침 신호는 카드 사이 화살표(→, 절대 위치)라 결함이 아니다.

## 10차: 초청 행 세로 정렬 (같은 날)
교수: "게스트렉처 세로 간격은 지금이 베스트냐."

기준선 실측(1280px, 행 위 기준): 제목 30, 장소 28, 연사 54, 시간 49. 장소·시간 줄이 21px, 제목·연사 줄이 24px 라 오른쪽이 왼쪽보다 2px, 5px 위에 떠 있었다. 장소·시간과 연사 줄 높이를 24px 로 맞추고 `.cs-session` 을 기준선 정렬로 바꿨다. 제목·장소·날짜가 30, 연사·시간이 54 로 맞고 행 높이(73px)는 그대로다.

## 11차: Materials 위치와 행 간격 최종 점검 (같은 날)
교수: "Materials 이게 너무 왼쪽으로 온건 아닌가? 행 간격 마지막으로 꼼꼼하게 점검해줘. 디자이너의 매의 눈으로 봐."

- Materials 120 + Reading 200 은 PDF 와 Reading 사이를 약 110px 벌려 PDF 가 왼쪽에 떨어져 보였다. Materials 112 + Reading 168 로 바꿔 PDF 를 36px 오른쪽으로 옮겼다. PDF 에서 Reading 까지 74px, Reading 끝 여백 64px 로 오른쪽 묶음 간격이 비슷해졌다. 가장 긴 읽을거리(90px)도 Reading 칸(안쪽 92px)에 들어간다.
- 행 간격 실측(1280px, 세 강의 모든 행): 한 줄 행은 종류와 무관하게 50px, 글자 기준선 30px, 행 사이 3px, 파트 머리 62px(기준선 48). 제목, 번호, 날짜, PDF, Reading 기준선이 모두 30 에 선다. 종류 아이콘도 글자 가운데 높이(16~34)에 있다.
- 남은 1px: 초청 행은 마지막 줄 기준선 아래가 19px 로 다른 행(20px)보다 1px 작았다. 한 줄 행은 PDF·Reading 칸이 2px 를 더하기 때문이다. 초청 행 아래 여백을 1px 늘려 74px, 위 30·아래 20 으로 맞췄다.

## 12차: Reading 없는 강의의 Materials (같은 날)
교수: "데엔은 괜찮은데 AX처럼 Reading이 없는 경우는 좀 애매한데. 토픽 오른쪽에 열이 material만 있을수도 있고 material reading 이렇게 있을수도 있는데 둘 다 이쁘게 만들어줘."

AX 는 Materials 가 오른쪽 묶음 280px 의 앞쪽에 서서 PDF·Lab 뒤로 약 200px 가 비고, 초청 장소·시간만 끝 선에 떨어져 있었다. 규칙을 "맨 오른쪽 열은 끝 여백 선에 오른쪽 정렬"로 바꿨다. Data Engineering 은 Reading 이, AX 는 Materials 가 그 열이다. AX 에서 MATERIALS 머리글, Lab, 초청 장소·시간이 모두 끝 여백 64px 선(1280px 화면에서 표 기준 1105)에서 끝나고, PDF 는 Lab 이 없는 줄에서도 보이지 않는 Lab 자리 덕에 같은 자리에 선다. Data Engineering 은 바뀌지 않는다.
