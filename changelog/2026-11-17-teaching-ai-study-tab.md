# 2026-11-17 Teaching 에 AI Study 탭 분리, Talks 초록, 스터디 PDF 표기

대상: `_config.yml`, `courses.md`, `ai-study.md`, `_themes/wide/includes/talk-year.html`, `_themes/wide/includes/sections/talks.html`, `_themes/wide/includes/theme.css`, `_themes/wide/includes/course/study-schedule.html`, `_themes/wide/includes/course/course.css` | 작성자: Sangwoo Mo(sangwoomo)

- 교수: Teaching 에서 Courses 와 AI Study 를 별개로 분리. Teaching 하위 탭을 Courses, AI Study, Talks 셋으로 함. Courses 의 "Undergraduate AI Study" 절을 새 페이지 `ai-study.md`(주소 `ai-study.html`, 탭 이름 규칙)로 옮김. 절 제목과 소개문은 그대로
- 교수: Talks 색을 초록과 회색으로. Research 줄과 버튼 점을 하늘(tone-p1)에서 세이지 초록(tone-p2)으로 바꿈. Education 회색은 그대로. 같은 날 [AI:Q 회차](2026-11-17-talks-aiq-placeholder.md)에서 정한 하늘을 바꾼 것
- 교수: 스터디 일정의 Slides 칸을 하나여도 `PDF 1` 로 쓰고(여러 개면 `PDF 1, 2` 그대로) 전부 왼쪽 정렬. 머리글(SLIDES, LAB)도 같이 왼쪽 정렬된다. Lab 칸은 요청 범위 밖이라 하나면 `Lab` 그대로 둠
- AGENTS.md(페이지 목록, Talks 색, 화살표 규칙의 링크 위치)와 `_themes/wide/includes/course/STUDY.md` 의 PDF 표기 규칙을 고침
- POSTECH 요구사항: 영향 없음(`_config.yml` 은 Teaching 메뉴 하위 탭만 더함. `postech`·`footer` 값은 그대로)
- 교수 후속: 모든 세션이 PDF 하나뿐인 학기는 번호 없이 `PDF` 로 되돌림. 한 세션이라도 둘 이상인 학기만 하나짜리도 `PDF 1` 로 쓴다. Lab 도 같은 규칙(지금은 세션마다 최대 하나라 늘 `Lab`)
- 교수 후속: 번호 없는 `PDF` 학기는 예전처럼 가운데 정렬, 번호 붙는 학기만 왼쪽 정렬(`is-numbered` 클래스)
- 교수 후속: Fall 2026 을 뺀 학기는 회차의 PDF 여럿을 하나로 이어 올려 `PDF` 하나를 가운데 정렬로 둔다("이때까지만 해도 1개인 게 2개인 것보다 많았다"). `tools/ai_study_sync.py` 에 `merge_pdfs`(pypdf, CI 에 이미 설치) 추가. 합친 파일: `spring-2026/03-sft-all.pdf`(20+34쪽), `05-rlaif-rubric-all.pdf`(22+22), `08-rag-all.pdf`(40+40), `summer-2026/06-generative-models-vae-and-gan-all.pdf`(82+77). 나눠 받은 원본은 다시 합칠 때 쓰므로 남김. Fall 2026 은 `PDF 1, 2` 왼쪽 정렬 그대로
- 같은 sync 실행에서 시트에 새로 올라온 Fall 2026 8회차 슬라이드(`fall-2026/08-3d-reconstruction-slides.pdf`)도 함께 받음
- 교수 후속: 탭으로 나눴으니 Courses 의 "Regular courses" 제목과 PLMS 소개 줄, AI Study 의 "Undergraduate AI Study" 제목과 소개 줄을 뺌(Talks 처럼 하위 탭 이름이 제목 역할). 스터디 학기 줄은 스터디 페이지 학기 탭으로 그대로 이어진다
- 교수 후속: Talks 줄 색을 없애고 세로 간격을 줄임. 줄 바탕·Seminar 높이 규칙(`theme.css` 의 `[data-talk-filter] .item-list li[data-kind]`)과 버튼 색 점을 빼서 Courses 같은 일반 목록 간격(줄 사이 4px)으로 돌림. 필터 버튼은 그대로
- 교수 후속(VGGT 누락): Fall 2026 8회차 첫 슬라이드(DUSt3R)가 시트에 하이퍼링크 없이 주소 글자로만 있어 동기화가 놓쳤다. `tools/ai_study_sync.py` 의 표 파서가 링크 없는 칸의 `https://` 주소 글자도 링크로 읽게 고침. 8회차는 `PDF 1`(DUSt3R, 25쪽), `PDF 2`(VGGT, 26쪽). 앞서 `08-3d-reconstruction-slides.pdf` 이름으로 받은 VGGT 는 `-slides-2.pdf` 로 옮겨 받음
- 지난 학기 슬라이드 하나짜리 회차 점검: 시트 원본의 Slide 칸부터 오른쪽 칸 링크를 회차마다 대조함. 주소 글자로만 적힌 칸은 위 8회차 하나뿐이고, 나머지 하나짜리 회차(Fall 2025 전부, Spring 2026 2·4·6·7·9, Summer 2026 1·8·9)는 시트에도 자료가 하나뿐이다. Spring 2026 8회차의 그림 두 장(png)은 규칙대로 뺌
- 교수 후속: 두 탭이 비어 보여 소개 문장을 되돌림(절 제목은 빼 둔 채). Courses 는 PLMS 링크 없이 "Courses taught at POSTECH during the regular semesters.", AI Study 는 링크를 weekly 까지 넓혀 "A [weekly AI study group](teaching/ai-study/) with POSTECH undergraduates." 세 탭 모두 본문 첫 요소가 같은 높이(하위 탭 아래 48px)에서 시작함을 확인
