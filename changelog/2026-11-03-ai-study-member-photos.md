# 2026-11-03 AI Study Members 이름에 사진 hover
작성자: Sangwoo Mo(moai-postech) | 대상: assets/study-members.js, course.css, tools/ai_study_members_sync.py, _data/ai_study_members_private.yml, STUDY.md | 도구: Claude Code

> **Members 명단을 연 뒤 이름에 마우스를 올리거나 이름을 누르면 그 학생의 POSTECH 인물검색 사진이 이름 위에 뜬다.**

POSTECH 요구사항: 영향 없음

## 요청
교수: POVIS 인물검색에서 학생 사진을 받아, Members 이름에 마우스를 올리면 사진이 뜨게. 비밀번호는 Members 페이지에 들어갈 때 한 번만 묻고 사진에 따로 묻지 않는다.

## 반영 내역
- 사진 출처: PODIUM 통합검색(search.postech.ac.kr)의 사람찾기. 이름으로 찾고 결과의 메일 아이디가 명단 아이디와 같은 사람만 받아 동명이인을 걸렀다. 사람찾기에 없는 2명은 본인의 공개 LinkedIn 프로필 사진을 POSTECH 사진과 같은 3:4·240×320으로 잘라 넣었다(얼굴 위치도 증명사진에 맞춤). 39명 중 38명. 윤서현은 두 곳 모두 사진이 없어 비워 둔다.
- 사진 원본(240×320)은 공개 저장소 밖 `academic-profile/_private/ai-study-photos/{메일아이디}.jpg` 에 둔다.
- `tools/ai_study_members_sync.py`: 그 폴더의 사진을 긴 변 256px JPEG data URL 로 줄여 각 멤버의 `photo` 로 명단 암호문 안에 넣는다(`--photos` 로 폴더 지정). 같은 비밀번호·salt 라 저장된 열람 권한은 그대로다.
- `assets/study-members.js`: 사진이 있는 이름에 사진을 붙이고 hover·포커스 때 보인다. 휴대폰은 이름을 누르면 보인다.
- `course.css`: 사진은 이름 위 96×128, 사진이 있는 이름은 점선 밑줄로 표시.
- 명단 탭 위 한 줄: 사진 출처(POSTECH 검색 또는 본인 공개 프로필)와 얼굴·이름을 익히려는 목적, 다른 사진을 원하면 교수에게 연락하라는 안내(교수 2026-11-03).

## 기각한 안과 이유
- 사진을 `assets/img/` 에 공개 파일로 두기: 명단을 비밀번호로 가린 이유와 어긋난다. 학생 사진도 명단과 같은 암호문 안에만 둔다.
- 사진에 별도 비밀번호: 교수가 Members 진입 때 한 번만 묻기로 함.

## 남은 것
- 윤서현 사진. 생기면 폴더에 넣고 동기화를 다시 돌린다.

## 커밋 경위
같은 시각 다른 세션이 같은 저장소를 커밋해 JS·STUDY.md·색인 변경은 162cccd 에 함께 들어갔다. 암호문·CSS·동기화 스크립트는 뒤 커밋으로 올렸다.
