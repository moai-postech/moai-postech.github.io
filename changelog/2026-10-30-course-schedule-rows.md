# 2026-10-30 강의 스케줄 행 정리(Review 딱지, guest 정보 줄, 딱지 중복)
작성자: Sangwoo Mo(sangwoomo) | 대상: `_data/course_tags.yml`, `_data/courses/*.yml`, `_themes/wide/includes/course/schedule.html`, `course.css`, `COURSE.md` | 도구: Claude Code

> **한줄 결론: 복습 회차를 번호 없는 `review` 종류로 바꾸고, guest 행의 장소·시간을 줄마다 나누고 연사 링크를 달았다.**

POSTECH 요구사항: 영향 없음

## 요청
교수(2026-10-30): Review Session, Midterm Review는 강 번호를 빼고 Review 딱지와 공통 색으로 표시한다. Guest lecture 행은 연사 줄 오른쪽에 시간·장소가 붙어 어수선하니 줄을 나누고, 순서는 다른 곳과 맞춘다. 연사에게 링크를 단다. 다른 행 종류도 검토한다.

## 반영 내역
- `kind: review` 신설. `course_tags.yml` 에 `review: "Review"`. 26F Data Engineering 의 10/15 Review Session, 11/3 Midterm Review 를 `review` 로 바꾸고 `n` 을 뺐다. 색은 템플릿의 기타 종류 갈래(공통 노랑, `tone-logistics`)를 그대로 받는다. 13~19강 번호는 그대로다(강의 저장소 `changelog/2026-10-30-review-unnumbered.md`).
- guest·seminar 행: 1줄 딱지와 제목, 2줄 연사와 소속, 3줄 장소, 4줄 시간. 장소 → 시간 순서와 줄 나눔은 강의 Home 의 `Location & time` 과 같다. 연사 줄 오른쪽 끝으로 밀던 배치(`justify-content: space-between`)를 없앴다.
- 연사 링크: 행에 `url` 이 있으면 연사 이름에 건다. 박대영 책임은 본인 메일 서명의 홈페이지(`mainthread.notion.site`)를, 이현규 연사는 교수가 준 LinkedIn 주소를 넣었다.
- 검토 결과 두 가지를 같이 고쳤다. (1) `event` 줄(IDS Capstone Workshop)만 딱지가 없어 `event: "Event"` 를 더했다. (2) Project 딱지 뒤 제목이 `Project Proposal I` 처럼 같은 말을 되풀이해 25F·26F·26S 의 제목을 `Proposal I`, `Final I`, `Presentation I` 로 줄였다.
- `COURSE.md` 에 review 규칙 한 줄.

## 기각한 안과 이유
- 장소와 시간을 한 줄에 두기: 교수가 두 줄로 나누라고 했다.
- 시간 → 장소 순서: 강의 Home 이 장소를 먼저 쓴다.
- 이현규 연사에게 웹 검색으로 찾은 LinkedIn 을 링크: 동일인인지 확인되지 않아 쓰지 않고 교수에게 주소를 받았다.

## 남은 것
- 25F 신기영(Designovel), 26S 학과 세미나 연사들의 `url` 은 비어 있다.
- 이 맥에 사이트용 Ruby 3.3 gem 이 없어 로컬 빌드를 못 했다. 라이브 반영으로 확인했다.

## 추가 반영(같은 날, 교수 피드백)
- Review 딱지를 뺐다. 딱지 없이 번호만 없는 쪽이 낫다는 교수 판단. `review` 는 공통 노랑 그대로다.
- `project`·`exam` 을 새 `tone-key` 로 묶었다. 행 바탕 `--accent-soft`, 글자 `--accent`, 딱지는 강조색 바탕에 흰 글자. review·guest·event 와 같은 노랑이라 시험과 프로젝트가 드러나지 않았다. 새 색을 꺼내지 않고 사이트 강조색을 썼다.
- guest·seminar 행: 장소·시간을 오른쪽 끝에 두 줄로 붙여 행이 두 줄을 넘지 않게 했다(왼쪽 딱지·제목, 연사). 휴대폰에서는 연사 아래로 내린다.

기각한 안: 장소·시간을 연사 아래 왼쪽에 쌓기(첫 반영). 행이 네 줄로 두꺼워졌다.

- 정정: 두 번째 커밋(9a4d7c1)에 다른 작업(중간고사 PDF 링크, `course-midterm-2026` 회차)이 PDF 없이 섞여 올라가 링크가 깨졌다. 그 줄만 `main` 에서 뺐다. 그 작업은 PDF 와 함께 따로 올린다.

## 추가 반영 2(같은 날, 교수 요청)
- Part III 색을 장밋빛 갈색(`#8a5d57`, 행 `#f8eeec`)에서 남보라(`#5c5a8c`, 행 `#f1f0f8`)로 바꿨다. project·exam 의 강조색 행(`--accent-soft`)과 분홍 계열이 겹쳐 구분이 약했다. 모든 강의의 Part III 행과 강의 Home 의 Part 카드에 함께 적용된다.

기각한 안: 주황·황토 계열(공통 노랑과 겹침), 청록(Part I 파랑·Part II 초록과 겹침).

## 추가 반영 3(같은 날, 교수 요청)
- 강의 스케줄의 딱지를 전부 뗐다(Guest lecture, IME Seminar, Exam, Project, Event). `_data/course_tags.yml` 을 지우고 템플릿의 딱지 줄을 뺐다. 종류는 행 색과 제목으로 드러낸다.
- 그래서 Project 제목을 다시 `Project Proposal I`, `Project Final I`, `Project Presentation I` 로 되돌렸다(25F·26F·26S).
- 스터디 페이지의 `Optional` 표시는 강의 스케줄이 아니라 그대로 둔다.

기각한 안: 딱지를 두고 제목을 줄이기(이 회차 앞부분). 교수가 딱지가 더 어수선하다고 판단했다.

## 추가 반영 4(같은 날, 교수 결정)
- 행 바탕색을 넷(Part I·II·III, 공통 노랑)과 휴강 회색으로 줄였다. project·exam 행의 강조색 바탕(`tone-key`)을 없애고 공통 노랑으로 돌렸다.
- 대신 project·exam 행의 제목 글자를 강조색(`--accent`)으로 칠한다. 바탕색은 Part 구분만 맡고, 꼭 챙길 날은 글자로 짚는다.

기각한 안: project·exam 을 강조색 바탕으로 구분(추가 반영 1). 딱지를 뗀 뒤에는 연한 분홍 바탕이 다른 바탕들과 진하기가 비슷해 강조가 약했고, 색이 다섯이 되어 Part I·III 와 함께 푸른·분홍 계열이 몰렸다.
