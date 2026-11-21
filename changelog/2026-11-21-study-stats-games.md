# 2026-11-21 AI Study Who we learn with 균형, AI Plays Games 일정 정리

대상: `_themes/wide/includes/course/course.css`, `_themes/wide/includes/course/study-member-stats.html`, `_themes/wide/includes/course/study-schedule.html`, `_themes/wide/includes/course/STUDY.md`, `_data/ai_study_terms.yml`, `_data/ai_study.yml` | 작성자: Sangwoo Mo(sangwoomo)

- Who we learn with: 학과 면적 그림이 패널 위아래를 꽉 채운 진한 덩어리라 가장 커 보였다(교수 요청). 면적 그림은 막대 그림의 그림 영역만 차지한다(가장 큰 막대 꼭대기 ~ 바닥선). 세 칸 폭은 내용에 맞춰 4 : 3.5 : 4.5(학기 4개, 면적 그림, 학번 8개). 라벨 줄 높이를 같게 해 기수·학번 막대의 바닥선을 맞췄다. 가장 큰 학과 칸 색은 강조색 75% 까지. 휴대폰 1열에서는 옆에 맞출 것이 없어 면적 그림이 제 높이(220px)를 쓴다
- Spring 2027 Schedule: 슬라이드 없는 회차의 회색 `PDF` 자리 표시를 뺐다. 칸은 비워 두고 시트에 파일이 올라오면 하나씩 생긴다(교수 요청, 11-18 결정을 교수가 되돌림). 카드 화면은 빈 Slides 줄을 숨긴다
- Spring 2027 학습 단계 2·3 이름을 더 일반적인 묶음으로: Reinforcement Learning → Learning from Reward, Multi-Agent & Open Worlds → Complex Worlds. tldr 도 같이 고침(`check_study_terms.js` 통과)
- 시트(study-schedule, schedule 탭) 수정 후 `ai_study_sync.py` 로 동기화
  - 7·8강 재구성(교수: AlphaStar 는 MARL 이 아니고 QMIX 와 결이 다름, CTDE 는 너무 일부, QMIX 는 cooperation 에): 7강 `competition` = AlphaStar, OpenAI Five / StarCraft II, Dota 2 / self-play at scale, league training, imitation then RL. 8강 `cooperation` = QMIX, Overcooked, Cicero / credit assignment, human-AI coordination, communication
  - Game 링크를 위키피디아에서 YouTube 영상으로(교수 요청). 2강 Board games → Shogi(AlphaZero 가 다룬 게임)
  - 4강 Game 에서 Noisy TV 삭제(게임이 아니고 Large-Scale Curiosity 연구 페이지가 걸려 있었음). noisy TV 는 키워드에 남김. 읽기는 ICM, RND 유지
- 같은 날 후속: 2·3단계 이름을 다시 `Deep RL`, `Complex Games` 로(교수 결정). tldr 도 "deep RL beats video games, and complex games add …" 로 고침. 3강 회차 제목도 `Deep RL` 이라 단계와 이름이 겹치지만 그대로 둠
- 같은 날 후속 2: 7·8강 제목을 `multi-agent RL I`, `II` 로(교수 결정, 4·5강 Exploration I·II 와 같은 꼴). 논문은 회차당 두 편만(교수). 7강 AlphaStar, OpenAI Five / StarCraft II, Dota 2(경쟁, 리그 self-play). 8강 QMIX, Overcooked / Overcooked / credit assignment, value decomposition, human-AI coordination(협력, AI 끼리와 사람과). Cicero·Diplomacy 는 뺌
- 기각한 안: 7강 AlphaStar·QMIX(StarCraft 로 묶음) / 8강 Overcooked·Cicero 안(교수가 앞서 AlphaStar 와 QMIX 의 결이 다르다고 함). 8강에서 QMIX 대신 Cicero 를 두는 안(MARL 회차에 대표 MARL 알고리즘이 빠짐). 3단계 이름 Beyond Solo Play, Expanding the Game, From Solo Play to Open Worlds, Wider Worlds, Scaling Up Play(교수가 Complex Games 를 고름). (오전) 8강을 두 편으로 줄이는 안은 처음에 기각했으나 후속 2에서 교수가 회차당 두 편으로 정함
- 로컬 빌드는 iCloud 의 `_site` 쓰기가 시간 초과로 실패해 scratchpad 로 `-d` 빌드해 데스크톱·태블릿·휴대폰 폭에서 확인
- POSTECH 요구사항: 영향 없음
