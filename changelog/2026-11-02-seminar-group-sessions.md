# 2026-11-02 Seminar 에 다 같이 하는 회차도 싣기
작성자: Sangwoo Mo(sangwoomo) | 대상: `tools/seminar_sync.py`, `_themes/wide/includes/sections/seminar.html`, `_themes/wide/includes/theme.css`, `AGENTS.md` | 도구: 랩 세미나 시트

> **한줄 결론: Monthly Sync, Internal Review, 학회 공유처럼 다 같이 하는 회차를 Seminar 목록에 싣고, 줄 전체를 회색으로 흐리게 보인다.**

## 요청
교수 2026-11-02: 학회 Sharing Session 이나 Monthly Sync 도 사이트에 올리자. 자료는 비공개지만 랩 세미나가 쉬지 않고 무엇을 하는지 보여 주자는 뜻. 휴회는 당연히 뺀다. 발표자 표기는 간결한 것으로 골라 달라.
## 반영 내역
- 시트: 다 같이 하는 회차의 `name_en` 을 `Everyone` 으로 채웠다(4/29·7/1·8/12·12/23 Monthly Sync, 7/15 ICML, 9/2 ALIN Workshop, 9/9·9/16·9/23 Internal Review, 10/21 AI Workflow Sharing Session). 10/21 제목은 영문으로 바꿨다. 같이 빠져 있던 3/12 Paper Review Session(Eunchan Jo, Suchan Lee)과 10/7 김명수 발표(제목을 전체 제목으로)도 채웠다.
- `seminar_sync.py`: `name_en` 이 `Everyone` 이면 `group: true` 를 쓴다.
- 템플릿: group 회차는 `tr.is-group`. Lab 필터에 그대로 센다.
- CSS: `.is-group` 줄은 글자와 링크를 `--muted`, 이름은 보통 굵기. 다가오는 회차의 날짜는 다른 줄처럼 강조색(첫 배포 뒤 12/23 날짜가 회색으로 남아 고침).
- `AGENTS.md` 세미나 절에 시트 작성법 한 줄.
## 기각한 안과 이유
- 발표자 칸 `All members`, `All`: 앞의 것은 길고, `All` 은 위의 All 필터 버튼과 겹쳐 뜻이 흐리다. `Everyone` 은 한 단어로 뜻이 분명하다.
- 휴회(Break), 시험 주 표시: 보여 줄 이유가 없어 계속 뺀다.
- 일반 발표와 같은 모양: 목록이 묽어 보여 흐리게 구분한다.
## 남은 것
- 4/2 Monthly Sync 는 시트에 행이 없어 사이트에 없다.
