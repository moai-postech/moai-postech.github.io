# 남은 결정

- AI Study 명단의 과거 공개 Git 이력 정리 여부 결정: 현재 배포와 최신 소스는 암호화했지만 보호 전 이력은 남아 있음. 공유 저장소의 이력 재작성은 협업자 clone에 영향을 주므로 별도 승인 후 처리. [근거](changelog/2026-10-28-ai-study-members.md).
- checks 의 `test_design` 실패: "세미나 정상 템플릿이 통과해야 한다"(seminar.html 디자인 계약 위반). [실행 41423444104](https://github.com/moai-postech/moai-postech.github.io/actions/runs/41423444104). c580d87(Everyone 세션을 옅게) 의 checks 는 통과했고, 그 뒤 세미나 동기화 9a6c210 이 Everyone 행을 처음 데이터로 넣으면서 옅은 글자가 계약에 없는 크기·색으로 잡힌 것으로 짐작. e2b18c8(강의 스케줄)은 세미나를 건드리지 않음. [근거](changelog/2026-11-02-seminar-group-sessions.md)
