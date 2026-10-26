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
