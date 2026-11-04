# 남은 결정

- AI Study 명단의 과거 공개 Git 이력 정리 여부 결정: 현재 배포와 최신 소스는 암호화했지만 보호 전 이력은 남아 있음. 공유 저장소의 이력 재작성은 협업자 clone에 영향을 주므로 별도 승인 후 처리. [근거](changelog/2026-10-28-ai-study-members.md).
- AI Study Fall 2026 6회 Dexterous manipulation Slides 1 이 비공개라 Drive 링크로 남음. 발표자가 링크 공유를 열면 `ai-study-sync` 를 다시 돌린다(changelog/2026-11-03-physical-ai-two-parts.md 12차). 2026-11-04 16:51 KST 에 Slides 1 담당 이지윤 학생(Slides 2 는 윤서현 학생 파일)에게 공유 설정 변경을 메일로 부탁했다. 공유가 열리면 매일 06:30 KST 동기화가 PDF 로 바꾸고, 답장이 오면 바로 수동 실행한다([기록](changelog/2026-11-04-ai-study-final-copy.md) 8회차).

- GitHub Actions 공통 action의 Node.js 20 deprecation 대응 버전 점검. 11-04 format/changelog 배포·검사는 실행됐지만 checkout/setup-node/configure-pages/deploy-pages 등에서 Node24 강제 실행 경고가 남음. 강의 목차 기능과 별도인 workflow 이관이라 이번 작업에서 버전을 일괄 변경하지 않음. [실행](https://github.com/moai-postech/moai-postech.github.io/actions/runs/41776144505), [기록](changelog/2026-11-04-de-outline-navigation.md).
