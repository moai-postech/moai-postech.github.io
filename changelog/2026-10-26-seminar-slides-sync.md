# 2026-10-26 세미나 슬라이드를 저장소로, 시트 기반 자동 동기화
작성자: Sangwoo Mo(moai-postech) | 대상: `_data/seminar.yml`, `assets/seminar/`, `tools/seminar_sync.py`, `.github/workflows/seminar-sync.yml`, `AGENTS.md` | 도구: Claude Code

> **한줄 결론: 랩 발표 슬라이드 14개를 16:9 PDF 로 통일해 저장소에 올리고, 랩 세미나 시트와 Drive 를 매일 읽어 Seminar 페이지를 고치는 GitHub Actions 를 만들었다.**

## 요청
교수: 세미나 슬라이드를 모두 받아 PDF 로 만들고 양식을 통일해 GitHub 에 올리기. 앞으로는 학생이 Drive 에 올리고 시트에 적으면 GitHub 가 자동으로 갱신되게.

## 반영 내역
- 시트: 오른쪽에 사이트용 칸 넷(`name_en`, `affiliation_en`, `homepage`, `paper`)을 더하고, 지금 사이트에 있는 24건의 값을 채웠다. `name_en` 이 있는 행만 사이트에 나온다.
- `tools/seminar_sync.py`: 시트(CSV)와 공개 Drive 폴더 목록을 로그인 없이 읽는다. 랩 발표 슬라이드를 받아 PDF 로 바꾸고(pptx 는 LibreOffice), 모든 쪽을 960x540pt 로 맞추고(비율이 다른 쪽은 줄여서 가운데, 링크 위치도 같이 옮김), `assets/seminar/날짜-발표자.pdf` 로 저장하고 PDF 정보에 제목·발표자를 넣는다. `_data/seminar.yml` 은 통째로 다시 쓴다. 시트의 파일 이름이 Drive 와 조금 달라도(`TabpPFN`) 앞의 yymmdd 가 같은 파일이 하나뿐이면 그것을 쓴다.
- 첫 반영: 14개. pptx 3개(MemEye, Claude Ecosystem, TRM)는 이 맥의 PowerPoint 로 구운 PDF 를 썼다(`--pdf-cache`). 합계 57MB.
- `.github/workflows/seminar-sync.yml`: 매일 06:00 KST 와 수동 실행. 바뀌면 `changelog/{날짜}-seminar-sync.md` 를 쓰고 main 에 push. 비밀값 없음.
- `AGENTS.md`: 구조 설명과 "세미나 발표 올리기" 절(학생용 절차).
- 시트가 정본이 되면서 Suchan Lee 의 "Diffusion Will Be Everywhere" 가 시트대로 11/18 로 옮겨졌다(사이트에는 10/30 으로 있었다).

## 기각한 안과 이유
- Drive 링크를 그대로 두기: 교수가 저장소에 PDF 로 올리기를 원했다. 슬라이드가 학생 개인 Drive 에 있어 지워지면 링크가 끊기는 문제도 있다.
- 시트의 파일 칩에서 Drive 주소를 읽기: 로그인 없는 CSV·HTML 내보내기에는 칩 주소가 없다. 공개 폴더 목록과 파일 이름으로 맞춘다.
- Apps Script 나 Google API 키로 읽기: 계정 연결과 비밀값 관리가 필요하다. 시트와 폴더가 링크 공개라 필요 없다.
- 4:3·A4 쪽을 늘려 16:9 를 채우기: 내용이 찌그러진다. 줄여서 가운데 둔다.
- 영문 이름을 저장소의 대응표로 관리: 학생이 시트만 고치면 되도록 시트에 `name_en` 칸을 뒀다.

## 남은 것
- 첫 자동 실행 결과 확인(수동 실행으로 바로 확인).

## 이어서: 파일 이름을 발표자 대신 제목 별칭으로
- 요청: 교수가 앞의 날짜는 두고 발표자 대신 발표 제목의 별칭으로 이름을 짓자고 했다.
- `tools/seminar_sync.py`: 파일 이름 `날짜-제목별칭.pdf`. 별칭은 시트의 새 칸 `nickname`(J열), 비면 제목의 콜론 앞이 3단어 이하일 때 그것, 아니면 기능어(via, to, the 등)를 뺀 앞 3단어.
- 시트: `nickname` 칸을 더하고, 자동 별칭이 어색한 넷을 학생들이 Drive 파일 이름에 쓴 별칭으로 채움(`engram`, `trm`, `symbolic-models`, `claude-ecosystem`).
- 14개 파일 이름을 바꿈(내용은 같고, pptx 3개는 PowerPoint 로 구운 PDF 를 그대로 씀). `AGENTS.md` 의 이름 설명도 고침.
- 기각한 안: 발표자 이름(`날짜-발표자.pdf`). 발표자는 사이트 목록에 이미 있고, 파일 이름으로는 무슨 발표인지가 더 쓸모 있다. 같은 날 같은 사람이 두 번 발표하면 겹치는 문제도 있다.

## 이어서: Drive 원본 이름도 같은 규칙으로
- 요청: 교수가 슬라이드 이름을 모두 바꾸고 Seminar 페이지 링크도 맞추라고 했다(페이지 링크는 앞 회차에서 이미 `날짜-제목별칭.pdf`).
- Drive: 원본 14개 이름을 `날짜-제목별칭.확장자` 로 바꿈(pptx 3개는 확장자 유지). 파일 ID 는 그대로라 기존 Drive 링크는 깨지지 않는다.
- 시트: slide 칸의 파일 칩은 이름을 바꿔도 내보내기(CSV) 글자가 옛 이름으로 남아, 14칸을 같은 파일의 칩으로 다시 씀(Sheets API 는 한 요청에 Drive 칩 10개까지라 두 번에 나눔).
- `tools/seminar_sync.py`: 시트 글자와 Drive 이름이 어긋나도 manifest 의 같은 날짜 파일 ID 로 찾는다. 날짜 접두어는 `yyyy-mm-dd` 와 `yymmdd` 둘 다 본다. 슬라이드를 못 찾으면 이미 올린 PDF 를 지우지 않고 링크도 유지한다(첫 시도에서 칩 갱신이 실패해 로컬에서 13개가 지워졌다. push 전에 되돌렸고 사이트에는 영향 없음).
- 확인: 동기화 결과 "바뀐 것 없음", 시트 글자를 옛 이름과 없는 이름으로 바꾼 시뮬레이션에서도 PDF 14개 유지.
