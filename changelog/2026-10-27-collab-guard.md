# 2026-10-27 공동 작업 장치: 서로 되돌리기 검사와 POSTECH 요구사항 문서
작성자: Sangwoo Mo(moai-postech) | 대상: `tools/check_changelog.py`, `tools/maintainers.txt`, `POSTECH.md`, `tools/check_postech.js`, `tools/lib/site.js`, `tools/check_format.js`, `.github/workflows/`, `tools/setup_main_ruleset.sh`, `_config.yml`, `AGENTS.md` | 도구: Claude Code

> **한줄 결론: 구성원 모두가 고치는 저장소에서 서로의 최근 수정을 번갈아 되돌리지 못하게 검사로 막고, 정보기술팀 요구사항을 `POSTECH.md` 로 문서화해 모든 페이지에서 자동 검사하게 했다.**

POSTECH 요구사항: P1~P9 확인. 요구사항을 바꾸지 않았고, `_config.yml` 에는 빌드 제외 목록만 더했다. `check_postech.js` 통과.

## 요청
교수: 구성원 모두가 이 저장소를 고치게 하려 한다. 취향이 달라 생기는 충돌은 바로 바꾸지 말고 discussions 에 남기기로 했다. A→B, B→A 로 번갈아 고치는 것을 막는 harness 를 짜 달라. 그리고 정보기술팀이 요구한 디자인 요구사항을 md 파일로 박아 두고, 누가 무엇을 바꾸자고 했을 때 그것을 어기지 않는지 검토하는 절차를 넣어 달라.

## 반영 내역
- `tools/check_changelog.py`: 서로 되돌리기 검사. push 가 지우거나 바꾸는 줄을 `git blame` 으로 따라가, 그 줄을 최근 30일 안에 마지막으로 고친 회차의 작성자가 push 하는 사람과 다르면 실패한다. 통과하는 길은 둘이다. (1) 대상에 그 파일이 들어간 결정된 안건을 changelog 회차에 링크한다. (2) push 하는 사람이 교수(`tools/maintainers.txt`)면 알림만 낸다. Actions 에서는 새 회차의 작성자 ID 가 push 한 GitHub 계정(교수는 별칭 포함)과 같아야 한다(남의 ID 로 쓰지 못하게). `--who 파일` 옵션은 그 파일을 최근 30일 안에 고친 회차·작성자·안건을 보여 준다. 동기화 봇 파일, changelog·discussions, 새 줄 추가, 자기 줄 수정은 막지 않는다.
- 임시 복제본에서 시험: 동료가 다른 사람의 수정을 되돌리면 실패, 교수는 알림 뒤 통과, 교수 ID 사칭은 실패, 그 파일이 대상인 결정된 안건을 링크하면 통과, 다른 파일의 안건으로는 실패, 자기 줄을 다시 고치면 통과.
- `POSTECH.md`: 정보기술팀 권장사항(2026-09-15 메일 ①~⑤)과 POSTECH SITES 가이드에서 온 요구사항 P1~P9, 출처, 지금 구현 위치, 바꾸자는 요청의 검토 절차(걸리는 항목 찾기 → 어기는 안은 받지 않고 대안 제안 → 요구사항 자체 변경은 교수·정보기술팀 → 기록 → 검사).
- `tools/check_postech.js`: 연구실 14개·강의 10개 페이지를 1280·390px 에서 P1~P9(워드마크 위치·링크·alt·비율, 연구실 홈 링크, 꼬리말 로고·개인정보 링크 이름·굵기·학과·주소·전화·저작권, 강의 바닥 줄, CNAME, 영어판 링크)를 잰다. 일부러 CSS 를 망가뜨려 위반을 잡는 것을 확인했다.
- `tools/check_changelog.py`: 머리글·꼬리말·강의 바닥·`_config.yml`·POSTECH 로고·`POSTECH.md` 를 바꾼 push 는 changelog 회차에 "POSTECH 요구사항:" 줄이 있어야 한다.
- `.github/workflows/format.yml`: `check_postech.js` 를 더했다. `tools/lib/site.js` 로 두 검사가 같은 서버 코드를 쓴다. `_config.yml`: `POSTECH.md`, `node_modules` 를 빌드에서 뺐다.
- `AGENTS.md`: "공동 작업: 서로 되돌리기 막기" 절, 고치는 절차에 `--who` 와 POSTECH 검토 단계, 안건·changelog 양식에 "POSTECH 요구사항:" 줄, 에이전트도 검사를 우회하지 않는다는 규칙.

- 2차(같은 날): 브랜치 보호 준비. 이 세션은 저장소 관리자 권한이 없고(설정 API 403), 데스크톱 도구도 교수 컴퓨터가 아니라 클라우드 컨테이너에 닿아 직접 켜지 못했다. 대신 `tools/setup_main_ruleset.sh` 를 만들었다. 교수가 자기 컴퓨터에서 `gh auth login` 뒤 한 번 돌리면 `main` ruleset(삭제·강제 push 금지, PR 필수와 승인 1, 필수 검사 changelog·format, bypass: 관리자·GitHub Actions·Claude 앱)이 생긴다. 필수 검사 이름이 겹치지 않게 두 워크플로의 job 이름을 `check` 에서 `changelog`, `format` 으로 바꿨고, format 은 PR 에서 경로와 상관없이 늘 돌게 했다(필수 검사가 건너뛰어지면 merge 가 막힌다).
- 사이트용 Claude 클라우드 루틴 `lab-site-sync` 는 10/26 에 그만두기로 하고 절차서(`tools/site-sync.md`)도 지웠지만 루틴은 켜진 채였다. 웹에서 만든 루틴이라 에이전트가 지우거나 끄지 못해 교수에게 넘겼다. 사이트 동기화는 GitHub Actions(`seminar-sync`, `ai-study-sync`)로 통일한다.

- 3차(같은 날): 교수의 `sangwoomo` 계정은 이 저장소의 관리자가 아니라(push 권한만) ruleset 을 만들지 못했다. 관리자는 저장소 주인 `moai-postech` 계정이다. 스크립트가 관리자 권한을 먼저 확인해 알려 주고, Claude 앱을 개인 계정 설치 목록에서도 찾게 했다.

- 4차(같은 날): 저장소 주인 `moai-postech` 는 조직이 아니라 개인 계정이라 `sangwoomo` 에게 관리자 권한을 줄 수 없다(개인 계정 저장소의 협업자는 쓰기까지). 교수는 이 저장소에 push 할 때 관리자 계정 `moai-postech` 를 쓰기로 하고, `tools/maintainers.txt` 의 한 줄에 적힌 계정·ID 는 어느 것으로 push 해도 같은 교수로 보도록 `check_changelog.py` 를 고쳤다(두 계정 모두 시험).

- 5차(같은 날): 교수 결정으로 사이트 저장소는 `moai-postech` 에 남긴다(사이트 주소 `moai-postech.github.io` 를 지키는 것이 이 계정의 존재 이유). `research` 는 `MOAI-Lab-POSTECH` 조직으로, `llm-wiki` 는 `sangwoomo` 비공개로 옮긴다(교수가 한 번 실행). 개인 계정 저장소라 `sangwoomo` 를 관리자로 둘 수 없으므로 브랜치 보호를 "모두 PR, 검사 통과 시 auto-merge, 승인 필수 아님, bypass 는 저장소 주인과 GitHub Actions 만" 으로 바꿨다(`tools/setup_main_ruleset.sh` 가 auto-merge 와 merge 후 브랜치 삭제도 켠다). Claude 앱 bypass 는 뺐다(구성원의 Claude 도 같은 앱이라 bypass 하면 검사를 건너뛴다). 앱이 연 PR 은 changelog 작성자 ID 로 교수를 알아보게 `check_changelog.py` 를 고쳤다. `AGENTS.md` 고치는 절차 7·8단계를 PR·auto-merge 로 바꿨다.

- 6차(같은 날): 저장소 정리 결과. 개인(`sangwoomo`): `research`, `paper-stella`, `llm-wiki`. 조직(`MOAI-Lab-POSTECH`): `funding-radar`, `ids-homepage`, `moai-lab-internal`, `gpu-monitoring`, `curriculum-of-one`. `moai-postech`: 사이트만(교수 기준: 커밋한 사람이 아니라 누구를 위한 것인가). Claude GitHub 앱을 `sangwoomo` 에 설치했다. ruleset 은 저장소 주인 계정으로 돌려도 만들어지지 않았고(원인 미확인, 개인 계정 저장소의 bypass 제한으로 추정) 교수가 더 손대지 않기로 해 보류했다. 검사는 Actions 에서 계속 돈다.

## 기각한 안과 이유
- 파일 단위로 막기(다른 사람이 30일 안에 고친 파일은 손대지 못함): `theme.css`, `members.yml` 처럼 모두가 고치는 파일은 늘 막힌다. 줄 단위로 좁혔다.
- 커밋 작성자(git author)로 주인 판단: 에이전트 커밋은 작성자가 "Claude" 라 사람을 가리지 못한다. changelog 회차의 작성자 ID 를 쓰고 Actions 에서 push 계정과 맞춘다.
- 사이트 저장소를 조직으로 옮기기(이름 `moai-lab-postech.github.io`): 교수 결정으로 기각. 사이트 주소 `moai-postech.github.io` 를 유지한다.
- 승인 1개 필수: 교수 본인 PR 을 승인할 사람이 없어 막힌다. 검사 통과만 조건으로 둔다.
- Claude 앱을 bypass 에 넣기: 구성원이 쓰는 Claude 도 같은 앱이라 검사를 건너뛸 길이 생긴다.
- 교수 수정도 똑같이 막기: 결정 권한이 교수에게 있어 막으면 결정을 반영할 길이 없다. 알림만 낸다.
- `moai-postech` 를 조직으로 바꾸고 `sangwoomo` 를 owner 로: 되돌릴 수 없고 `moai-postech` 로그인이 사라져 연결된 서비스에 영향이 있을 수 있다. 교수가 관리자 계정으로 push 하는 쪽을 골랐다.
- 요구사항을 `AGENTS.md` 안에만 두기: 교수가 따로 박아 두길 원했고, 외부 요구사항은 출처와 함께 한 파일로 보는 편이 검토하기 쉽다. `AGENTS.md` 는 요약과 링크만 둔다.

## 남은 것
- ruleset(보류): 구성원이 저장소를 고치기 시작할 때 원인 확인 뒤 다시 켠다.
- `paper-stella` 의 `atlas-deploy.yml` 이 아직 `moai-postech/llm-wiki` 를 가리킨다(GitHub 주소 넘김으로 동작). `sangwoomo/llm-wiki` 로 고친다.
- 교수가 claude.ai 루틴 화면에서 `lab-site-sync` 를 지운다.
- 구성원의 GitHub 계정이 정해지면 changelog 작성자 ID 를 그 계정으로 쓰도록 안내한다.
