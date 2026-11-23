# 2026-11-23 AI Study 명단 원문을 Git 이력에서 지움
작성자: Sangwoo Mo(sangwoomo) | 대상: Git 이력(원격 브랜치 9개), `changelog/2026-10-28-ai-study-members.md`, `TODO.md` | 도구: Claude Code

> **한줄 결론: 2026-10-28 커밋 두 개에 남아 있던 AI Study 명단 원문(이름·학과·학번·메일)과 같은 날 기록의 학생 세부 정보를 모든 브랜치 이력에서 지우고 강제 push 했다.**

POSTECH 요구사항: 영향 없음

## 요청
교수: TODO 의 "명단 과거 공개 Git 이력 정리"를 알아서 처리. 강제 push 영향(커밋 번호 변경, 다른 clone 재동기화)을 들은 뒤 강제 push 를 승인.

## 반영 내역
- 원문 위치: `_data/ai_study_members.yml` 의 평문 판은 커밋 0fd9701, 4284593(2026-10-28) 두 개뿐이었다. 원격 브랜치 main, codex/guest-lecture-layout 에 들어 있었고 PR 참조 29개에는 없었다.
- `changelog/2026-10-28-ai-study-members.md` 의 세 줄(학생 이름과 학과·학번, 메일 계정 세부)도 같은 정보라 모든 판에서 일반 서술로 바꿨다(참여 마커 계산 방식, 주소록 대조와 동명이인 구분, 시트 G열 변경 범위는 남김).
- 방법: 원격을 작업용 mirror 로 받아 `git filter-branch --index-filter` 로 평문 명단 판을 빼고 기록 세 줄을 바꿨다. 다시 쓴 뒤 모든 브랜치에서 평문 명단 판 0개, 세부가 남은 기록 판 0개를 확인했다. 최신 main 의 파일 내용은 그 기록 세 줄 외에 바뀌지 않았다.
- 원격이 그사이 바뀌지 않았음을 확인하고 `--force-with-lease` 로 9개 브랜치를 강제 push(main afe2569 → 680f60a). 이 작업 폴더의 main 을 새 원격 main 으로 맞췄다.

## 기각한 안과 이유
- 명단 파일 전체를 모든 이력에서 지우기: 지금의 통계·암호문 판까지 사라져 이후 커밋이 깨진다.
- git-filter-repo 설치 후 사용: 새 도구를 받지 않아도 내장 filter-branch 로 충분했다(커밋 1,079개, 몇 분).

## 남은 것
- 다른 clone(협업자, 다른 에이전트 세션)은 새 main 으로 맞춘다(`git fetch` 뒤 `git reset --hard origin/main`, 안 올린 커밋은 새 main 위로 rebase). 옛 main 을 merge 하면 평문 이력이 다시 들어온다.
- GitHub 는 옛 커밋을 번호로 직접 열면 한동안 보일 수 있다. 완전히 지우려면 GitHub Support 에 캐시 삭제를 요청한다.
- 이 맥의 로컬 전용 브랜치(codex/*, backup/*)에는 옛 이력이 남아 있다(원격에 없음).
