# 남은 결정

- AI Study 명단의 과거 공개 Git 이력 정리 여부 결정: 현재 배포와 최신 소스는 암호화했지만 보호 전 이력은 남아 있음. 공유 저장소의 이력 재작성은 협업자 clone에 영향을 주므로 별도 승인 후 처리. [근거](changelog/2026-10-28-ai-study-members.md).

- GitHub Actions 공통 action의 Node.js 20 deprecation 대응 버전 점검. 11-04 format/changelog 배포·검사는 실행됐지만 checkout/setup-node/configure-pages/deploy-pages 등에서 Node24 강제 실행 경고가 남음. 강의 목차 기능과 별도인 workflow 이관이라 이번 작업에서 버전을 일괄 변경하지 않음. [실행](https://github.com/moai-postech/moai-postech.github.io/actions/runs/41776144505), [기록](changelog/2026-11-04-de-outline-navigation.md).
- NeurIPS 2026 poster(Stay Fair 149045, ToMA 153660, CAFT)를 12월 학회 무렵 neurips.cc PosterPDFs 에서 받아 `assets/publications/` 에 넣기. 아직 안 올라옴(2026-11-09). [changelog](changelog/2026-11-09-publication-posters.md)
