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

## 안내 문구 줄임
교수 요청으로 탭 위 안내를 한 줄로 줄였다: "Photos from POSTECH and public profiles, to put names to faces. To change yours, contact Prof. Sangwoo Mo."

## POSTECH ID 열, LinkedIn 열, 밑줄 제거
- 교수 요청: 메일 아이디만 보이는 열 이름을 `POSTECH Email` → `POSTECH ID` 로. 그 오른쪽에 LinkedIn 열을 두고 프로필이 있는 사람만 작은 `in` 칩으로 링크(26명).
- LinkedIn 은 영문 이름(PODIUM 사람찾기)과 한글 이름으로 찾고, 학교·학과·입학 연도가 명단과 맞는 프로필만 넣었다. 맞는지 확인되지 않은 후보는 넣지 않았다. 목록은 저장소 밖 `academic-profile/_private/ai-study-linkedin.json`, 동기화가 암호문 안에 넣는다.
- 안내 문구: "Photos are from POSTECH or LinkedIn, to put names to faces. To change yours, contact Prof. Sangwoo Mo." (출처를 정확히 쓰고 한 줄 유지)
- 이름 밑 점선 밑줄을 뺐다. 거의 모든 이름에 사진이 있어 39줄 전부 밑줄이 깔리고, 표 위 안내가 사진이 있음을 알린다(교수가 판단을 맡김).
- `tools/check_study_members.js` 의 열 이름 기대값을 새 열에 맞췄다.

### 기각한 안
- LinkedIn 을 시트의 새 열로 관리: 시트 형식과 동기화 파서를 바꿔야 하고, 링크가 있는 모든 사람이 편집하는 시트라 사진과 같은 저장소 밖 파일로 둔다.
- `LinkedIn` 글자 링크: 열 이름과 같은 말이 26번 반복돼 칩 `in` 으로 줄였다.

## LinkedIn 재검색
찾지 못한 사람을 다른 영문 표기와 한글 이름으로 다시 찾아 1명을 더했다(27명). 나머지는 학교·학과·입학 연도가 맞는 프로필이 없어 비워 둔다.

## LinkedIn 사진 우선
교수 요청: LinkedIn 에 최근 프로필 사진이 있으면 POVIS 사진 대신 쓴다. LinkedIn 사진이 있는 사람 가운데 얼굴이 잘 보이는 사진을 POVIS 와 같은 3:4·240×320 으로 잘라 바꿨다(POVIS 원본은 저장소 밖에 백업). 얼굴이 가려지거나 너무 작은 사진, LinkedIn 이 작은 사진(96px)만 주는 경우는 POVIS 사진을 그대로 둔다. 안내 문구는 "Photos are from POVIS and LinkedIn, ..." 로 출처를 적었다.

### 기각한 안
- 얼굴이 가려진 LinkedIn 사진도 최신이라는 이유로 쓰기: 이름과 얼굴을 익히려는 목적에 맞지 않는다.

## 안내 문구 다듬기
교수 요청으로 더 자연스럽게: "Photos come from POVIS and LinkedIn to help everyone put names to faces. If you'd like a different photo, just let Prof. Sangwoo Mo know." 길어져도 된다는 교수 판단에 따라 한 줄 제약은 풀었다.

## LinkedIn 학교 필터 재검색
LinkedIn 검색에 POSTECH 학교 필터를 걸어 소개 문구에 학교가 없는 프로필까지 다시 찾았다. 학교·학과·입학 연도가 맞는 2명을 더해 29명. 그중 1명은 LinkedIn 사진이 같은 사람으로 확인돼 POVIS 사진 대신 썼다.

## 머리 위 여백
교수 지적: 일부 사진(고현민, 박주연 등)은 머리 위가 잘려 보인다. 화면 표시가 아니라 원본 사진에서 머리카락이 위 끝에 닿아 있던 것이 원인이다. `tools/ai_study_photo_frame.py` 를 만들어 모든 사진의 머리 위 여백을 재고, 6% 미만인 19장을 9%가 되게 축소(zoom out)했다. 위는 배경색, 옆은 가장자리를 늘려 채웠다. 얼굴이 화면을 거의 채우는 LinkedIn 근접 사진 3장은 축소해도 다른 사진과 크기가 맞지 않아 POVIS 사진으로 되돌렸다. 처리 전 사진은 저장소 밖에 백업했다.

### 기각한 안
- 사진 칸 위치만 바꾸기: 표시에서는 잘리지 않았고 원본이 잘린 것이라 효과가 없다.
- 근접 사진을 크게 축소: 옆을 많이 채워야 해서 어깨가 늘어나 보인다.

## 사진이 없는 멤버
POVIS·PODIUM·LinkedIn·Teams 어디에도 사진이 없는 멤버는 같은 크기 카드에 이름 첫 글자를 보인다. 39명 모두 이름에 마우스를 올리면 같은 자리에 카드가 뜬다. LinkedIn 열은 교수 요청대로 프로필이 있는 사람만 링크한다(29명).
