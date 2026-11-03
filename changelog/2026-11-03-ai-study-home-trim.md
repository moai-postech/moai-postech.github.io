# 2026-11-03 AI Study Home 인터랙션 정리와 멤버 통계 축소
작성자: Sangwoo Mo(moai-postech) | 대상: `_themes/wide/includes/course/study-member-stats.html`, `study.html`, `course.css`, `theme.css`, `design-contract.json`, `STUDY.md`, `tools/check_interaction.js` | 도구: Claude Code

> **한줄 결론: Home 의 hover 반응을 링크마다 하나로 줄였다. Who we learn with 절은 한때 How to join 안 한 줄과 학과 그래프로 줄였다가, 교수 판단으로 기수 막대와 함께 되살렸다.**

POSTECH 요구사항: 영향 없음(머리글·꼬리말은 그대로)

## 요청
교수: "undergrad study 홈에서 인터랙티브 쓸데없이 정신없는거 같은데... what we study는 좋은데 who we learn with는 의미 있는거 맞아?" 검토 뒤 제안(학과 분포만 any major 의 근거로 남기고, 기수 막대와 hover 반응은 빼기)에 "그렇게 줄여".

## 반영 내역
- 멤버 통계(`study-member-stats.html`): 절 제목과 기수별 막대(Participants by term, New·Returning)를 뺐다. `39 members from 7 departments since Fall 2025` 한 줄, 그 오른쪽 `Meet the members →`, 아래 학과 면적 그래프(높이 320 → 180px)만 남겼다. 학과 칸은 여전히 Members 의 그 학과 목록으로 간다.
- 위치(`study.html`): 별도 절 대신 How to join 상자 안, "Open to POSTECH undergraduates of any major" 문장 바로 아래. 학과 분포가 그 문장의 근거다. 칸 테두리는 상자 배경색으로 맞췄다.
- 인터랙션 제거: 학기 카드 2px 들어 올림과 그림자, 카드·막대 짝 강조 스크립트, 막대·학과 칸 흐리기, 막대 hover 때 학기 이름을 신규·기존 수로 바꾸는 것. 남은 hover 는 학기 카드의 강조색 테두리와 학과 칸의 안쪽 테두리(키보드 포커스와 같은 모양) 하나씩이다.
- 쓰지 않게 된 CSS(`.study-cohort-*`, `.study-stat-breakdowns`, `.study-stat-panel`, `.study-home-community`)와 `theme.css`·`design-contract.json` 의 `.study-stat-breakdowns h3` 선택자를 지웠다.
- `tools/check_interaction.js`: 학과 그래프가 How to join 안에 있는지, 기수 막대가 없는지, 카드 hover 가 다른 요소를 강조하지 않는지 본다.
- `STUDY.md`: 구성, How to join, 가벼운 상호작용 절을 새 결정으로 고쳤다.

## 기각한 안과 이유
- 기수 막대를 Members 페이지로 옮기는 안: Members 는 비밀번호 뒤 명단이라 운영 지표를 둘 자리가 아니고, 기수 탭이 이미 기수별 인원을 보인다.
- 학과 그래프를 별도 절(제목 없음)로 How to join 위에 두는 안: 제목 없는 그래프가 학기 카드와 참여 안내 사이에 떠 보인다. 안내문 근거로 상자 안에 넣었다.
- 2026-11-03 `study-home-review` 의 막대 안 New·Returning 이름표: 막대 자체를 빼서 함께 사라졌다(같은 교수 결정의 후속).

## 확인
- 읽은 규칙: 상위 `AGENTS.md` 들, 저장소 `AGENTS.md`, `STUDY.md`, 2026-11-02 `ai-study-home-visual`, 2026-11-03 `study-home-review`.
- 이 맥(Intel)에는 Ruby 3.3 이 없어 로컬 빌드를 못 했다. push 뒤 Actions `checks` 와 라이브 화면으로 확인한다.

## 추가: Who we learn with 절 되살림
교수: "이 절 있는게 낫지 않았어? 기수별 인원수 그래프 괜찮지 않나?" 검토 뒤 "절 되살려".
- 판단: 기수 막대는 운영 지표만이 아니다. 학기마다 이어지고 돌아오는 사람이 있다는 것을 지원자에게 보인다. 산만함의 원인은 절이 아니라 hover 반응이었다.
- `study-member-stats.html`, `study.html`, `course.css`, `design-contract.json`, `theme.css` 의 절 구성(제목, 총원 한 줄, 기수 막대, 학과 면적 그래프 320px)을 직전 커밋으로 되돌렸다. `theme.css` 는 다른 세션이 그 뒤에 고쳐 선택자 한 곳만 다시 넣었다.
- hover 는 다시 넣지 않았다. 카드·막대 짝 강조 스크립트, 흐리기, 막대 아래 학기 이름이 신규·기존 수로 바뀌던 것(`study-cohort-detail`)을 뺐다. 신규·기존 수는 막대 툴팁에 있다. 막대와 학과 칸의 hover·포커스는 테두리 하나다.
- How to join 은 안내문과 연락 링크만 있는 원래 상자로 돌아갔다.
- `check_interaction.js` 는 절 안에 막대와 학과 그래프가 있는지, 카드 hover 가 다른 요소를 강조하지 않는지 본다. `STUDY.md` 도 같이 고쳤다.

## 추가: Schedule 탭 최신 학기부터
교수: "스케줄 페이지 탭도 newest first로 바꾸자. 홈에 있는 화살표 시각화는 그대로 두고".
- `study-schedule.html`: 탭과 패널을 `_data/ai_study.yml` 순서(최신 학기 먼저) 그대로 놓고, 첫 탭(최신 학기)을 기본으로 연다. 주소의 학기 fragment(`#fall-2025` 등)는 그대로 동작한다.
- Home 의 학기 타임라인(1기 → 4기, 화살표처럼 이어지는 선)과 Members 기수 탭은 바꾸지 않았다.
- `STUDY.md` 의 Schedule 탭 순서 문장을 고쳤다.

