# 2026-11-04 연구실 사이트 공유 작업 폴더 정리
작성자: Sangwoo Mo(sangwoomo) | 대상: 이관 기록 | 도구: Claude, Codex

- 상태: `moai-postech.github.io` 작업 폴더의 HEAD 가 `03b8503`(main 보다 40 커밋 뒤)에 멈춰 있었다. 스테이징에는 `paper-stella-poster.webp` 삭제와 테마 파일 세 개, `study-members.js`, changelog 몇 개, `index.md` 의 옛 버전이 섞여 있었다. 2026-11-03 iCloud 로 `.git/index` 가 사라졌다 복구되는 과정에서 생긴 것으로 본다.
- 확인: 바뀐 줄을 하나씩 origin/main 과 비교했다. 작업 폴더에만 있는 내용은 없었다. 모두 main 에 더 새 버전이 있는 옛 상태였다(`study-members.js` 는 `84fb8d5` 와 같음). 포스터 그림은 main 과 같은 파일(`89e3ec9`)이었다.
- 조치: 교수 요청으로 백업한 뒤 `git reset --hard origin/main`. 결과 `main...origin/main`, 남은 것은 커밋하지 않는 `.bundle/` 하나. stash 두 개(다른 세션 것)와 다른 worktree 는 건드리지 않았다.
- 백업: `_backup/2026-11-04-site-worktree-cleanup/`(origin 과의 차이, 스테이징 차이, status, 옛 HEAD).


## 이관 출처

- 2026-11-05 공통 기록에서 이 프로젝트·작업에 해당하는 부분 이관.
- [이동 전 원문](../../_backup/20261105-changelog-migration/changelog/2026-11-04-site-worktree-cleanup.md). 원문의 경로·날짜·당시 판단은 역사적 기록으로 보존.
