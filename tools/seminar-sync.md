# 세미나 시트 → `_data/seminar.yml` 주간 동기화

매주 월요일 09:00 KST 클라우드 루틴 `seminar-site-sync` 가 이 파일을 읽고 따른다. 사람이나 다른 에이전트가 손으로 돌릴 때도 같은 절차다.

## 입력

- 랩 세미나 구글시트(링크 공개): `1v4tmcNFKdu7yXRQPeWw_bYEG8dzf6nbvQlo40gjWp8U`. 로그인 없이 CSV 로 받는다.
  `curl -sL "https://docs.google.com/spreadsheets/d/1v4tmcNFKdu7yXRQPeWw_bYEG8dzf6nbvQlo40gjWp8U/export?format=csv"`
  열은 `date,name,topic,slide,note`. 날짜는 `MM/DD` 이고 연도는 위쪽 구획 행(`2026,논문 세미나`)이 정한다. 외부 연사는 `이름 (소속)`, 인턴은 `이름 (인턴)` 이다. 초청 연사의 `slide` 칸에는 연사 홈페이지 주소가 들어 있다.
- 발표 자료 Drive 폴더(링크 공개): `128zJk8IdfZybP36gIwzRjsYD1GT336SS`. 파일명은 `YYMMDD_제목.pdf|pptx` 이고 시트 `slide` 칸과 같다. Google Drive 커넥터의 `search_files`(`parentId = '128zJk8IdfZybP36gIwzRjsYD1GT336SS'`)로 파일 ID 를 찾아 `https://drive.google.com/file/d/<ID>/view` 로 쓴다.
- 규칙: `_data/seminar.yml` 맨 위 주석, 저장소 `AGENTS.md`. 둘을 먼저 끝까지 읽는다.

## 절차

1. `TZ=Asia/Seoul date` 로 오늘 날짜를 확인한다.
2. 시트의 발표 행을 `_data/seminar.yml` 의 `talks` 와 날짜·발표자로 맞춰 본다. 넣지 않는 행은 `seminar.yml` 주석을 따른다(시험, 마감, 학회, monthly sync, `everyone` 행, 연사가 `-` 인 행, 공개 전 연구 코드명).
3. 바뀐 것만 고친다.
   - 새 발표: 날짜 순서에 맞는 자리(위가 최신)에 넣는다. 앞으로 있을 발표도 넣는다.
   - 기존 발표의 제목, 연사, 날짜가 시트에서 바뀌었으면 고친다. 시트에서 지워진 발표는 지운다.
   - 이미 있는 항목의 영문 이름, `url`, `paper`, `slides` 는 사람이 고른 값이니 시트와 모순되지 않으면 건드리지 않는다.
4. 새 항목의 필드를 채운다.
   - `speaker`: 영문 이름. 랩 멤버는 `_data/members.yml` 의 이름을 그대로 쓴다. 외부 연사와 인턴은 연사 홈페이지, 본인 GitHub·블로그의 표기를 따른다. 확신이 없으면 그 항목을 넣지 않고 아래 보고에 남긴다.
   - 초청 연사: `invited: true`, `affiliation`(시트 괄호 속 소속의 영문 표기, 예 `KAIST`, `UMich`), `url`(시트 `slide` 칸의 홈페이지). 발표 자료는 공개하지 않으니 `slides` 를 넣지 않는다. `paper` 에는 발표 제목과 같은 연사의 논문 arXiv 초록 주소(`https://arxiv.org/abs/...`)를 찾아 넣는다. 못 찾으면 비운다.
   - 랩 내부 발표: `slides` 에 Drive 파일 주소를 넣는다. 자료가 아직 폴더에 없으면 비우고, 다음 주 실행에서 다시 본다. 인턴은 `url` 에 본인 홈페이지(없으면 공개 블로그나 GitHub)를 넣는다.
5. 고친 것이 없으면 커밋하지 않고 끝낸다.
6. 고쳤으면 `changelog/{오늘}-seminar-sync.md` 를 쓰고(같은 날 파일이 있으면 덧붙인다) `changelog/index.md` 표 맨 위에 한 줄을 더한다. 작성자는 `seminar-site-sync 루틴(Claude)`. `python3 tools/check_changelog.py` 로 확인한 뒤 `main` 에 커밋하고 push 한다. 커밋 메시지는 `Seminar: sync from sheet (YYYY-MM-DD)`.
7. push 가 거부되면 `claude/seminar-sync-{오늘}` 브랜치로 push 하고 `main` 대상 PR 을 연다.

## 보고

끝나면 Slack 커넥터 `slack_send_message` 로 `channel_id` `U096KKGLZAM`(교수 DM)에 짧게 보낸다. 바꾼 것이 없고 남길 것도 없으면 보내지 않는다.

- 넣거나 고친 발표 목록(날짜, 연사, 제목)과 커밋 또는 PR 주소
- 확신이 없어 넣지 않은 항목, 비워 둔 `paper`·`slides`
- 실패했으면 어느 단계에서 왜 실패했는지
