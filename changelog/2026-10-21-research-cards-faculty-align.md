# Research Overview 개편, Talks 정리, Faculty 오른쪽 정렬 (2026-10-21)

- 작성: Sangwoo Mo(moai-postech), 에이전트 Claude
- 대상: `research.md`, `_data/research.yml`, `sections/research.html`, `_data/talks.yml`, `_data/members.yml`(professor.cv), `sections/profile-cv.html`, `theme.css`, `AGENTS.md`

## Research Overview (교수: 문구가 broken language 같고, 더 visual 했으면, 내 연구가 와닿지 않는다)

- 배치: 분야마다 한 띠. 왼쪽 4칸에 아이콘, 분야 이름, 분야 한 줄 설명. 오른쪽 8칸에 주제 카드(2열). 카드에는 주제 이름, 문장 하나, 논문 칩(약칭 + venue). 전에는 주제 이름 아래 소문자 명사구와 쉼표로 이은 약칭 목록이 왼쪽 절반에만 있었다.
- 문구: 소문자 명사구를 동사로 시작하는 문장으로(예: "scenes as objects, parts, and motion" → "Representing scenes as objects, parts, and motion."). 분야마다 "How models see / think and work / act" 로 시작하는 한 줄 설명을 더했다. 맨 위 소개도 두 문장으로 다듬었다.
- 리뷰 지적 반영: "Reasoning & Agents: long-horizon tasks with memory" 가 실제 논문(Idis, TEG, LoC, SuRe)과 어긋나 "Grounding reasoning in evidence and correcting its errors." 로 바꿨다. "FM Applications" 는 라벨을 그대로 두고 구절만 TODO 후보 (가) "Solving real-world problems with foundation models." 를 썼다(라벨은 교수 결정 대기).
- MOAI Lab 논문(venue 연도 '26 이후)은 칩을 강조색으로 칠해 랩 이후 연구와 박사·포닥 시절 연구가 한눈에 갈린다. 소개 문장에 범례 칩.
- `_data/research.yml` 의 papers 를 마크다운 한 줄에서 `{ short, venue, url }` 목록으로 바꿨다(37편, 링크 그대로).

## Talks

- 교수: "Before 2025" 묶음을 뺀다. `_data/talks.yml` 에서 지웠다(git 이력에 남음). 남은 2026, 2025 두 해가 모두 펼쳐져 "Earlier talks" 접기는 나오지 않는다.

## Faculty 와 정렬 원칙 (교수: 어떤 것을 좌, 어떤 것을 우 정렬할지 생각하고 쓰라)

- 교수 이력 항목을 `{ text, side }` 로 나눠 기간·장소, 연도, 학회를 오른쪽 끝에 맞췄다(Appointments, Education, Services, Honors). 글자는 그대로 두고 위치만 나눴다(쉼표와 괄호만 정리).
- `AGENTS.md` 정렬 규칙을 원칙으로 다시 썼다: 왼쪽은 "무엇", 오른쪽 끝은 "언제·어디·누구". 예외는 시간순 기록의 날짜(News, Seminar)와 범주 칸(과제 기관). 방문자 표의 낡은 "Join us 버튼"도 고쳤다.

## 기각한 안

- Research 를 세 분야 3열 카드로: 분야마다 논문이 많아 카드가 길어지고 주제 구분이 사라진다.
- 칩 색을 분야별로: 팔레트 밖 색이 필요하다. 강조색은 "랩 이후 논문" 하나에만 쓴다.

## 남은 것

- Research 의 문구(분야 설명, 주제 문장)는 개인 사이트 Research 탭과 같은 사실이다. 개인 사이트를 single profile 로 정리할 때(TODO) 같이 맞추거나, 그 전에 개인 사이트도 고친다.

## 이어서: 랩 전후 구분 삭제

- 교수: "Papers since MOAI Lab started are highlighted." 같은 걸 넣지 마라. 교수가 쓴 논문이 곧 MOAI 논문이다. 소개 문장의 범례와 '26 이후 칩 강조를 모두 뺐다. 모든 칩이 같은 모양이다.
- 상위 폴더 `AGENTS.md`(교수 작업 규칙)에 "교수의 논문은 시기와 무관하게 모두 MOAI Lab 논문, 전후로 나누지 않는다"를 적었고, 점검 목록의 B-7(랩 성과와 이전 논문 구분)을 기각으로 표시했다.
