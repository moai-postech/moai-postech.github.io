# 2026-10-28 Minor 직접 반영과 이동 링크 마감
작성자: Sangwoo Mo(sangwoomo) | 대상: AGENTS.md, Home, Research, By Topic, Talks 수록 기준 | 도구: Codex

> **한줄 결론: Minor를 PR로 쪼개지 않고 직접 반영하며, 짧은 이동 링크에만 화살표와 모집 로켓을 제한적으로 사용.**

POSTECH 요구사항: P1~P9 영향 없음.

## 요청과 반영
- 교수는 minor마다 PR을 만들어 사람의 리뷰 부담을 늘린 것을 지적. Minor는 검증 후 main 직접 커밋·push, 같은 작업은 묶음 반영. 여러 파일이라는 이유만으로 큰 변경으로 분류하지 않도록 수정. PR은 큰 변경이나 명시 요청에만 사용. 열린 PR은0개 확인. 실제 보호 규칙도 꺼져 있음을 API로 확인했고 설정 변경은 없음.
- Home 모집은 Join us! 🚀, 논문 목록 이동은 See our publications →. Research는 Full publication list →, By Topic은 Open in full screen ↗. 이동 링크는 문구와 끝 표시가 갈라지지 않도록 묶음 줄바꿈. 글자 크기·굵기·박스·간격은 유지하고 일반 본문·메뉴·논문 목록에는 장식을 추가하지 않음.
- Talks는 교수 본인의 연구 발표가 원칙. VLA tutorial처럼 학회 튜토리얼은 예외. 교수는 How to Use Agents가 연구 내용이 아니므로 후보에서 제외하도록 결정. AGENTS.md 수록 기준에 명시하고 실제 Talks 목록은 변경하지 않음.
- 교수 요청으로 collaborator 상태 확인. 채원 학생이 초대 만료를 알린 뒤 onehanap에 기존 의도와 같은 Write 초대를 재발송하고 유효한 초대 생성 확인. 다른 두 초대는 유효해 유지. 승인받은 문안으로 random-lab의 기존 스레드에 재발송 안내 완료. 권한 보호 설정은 변경하지 않음.
- 이후 onehanap의 실제 권한이 write로 바뀐 것을 확인. 초대 수락까지 완료.
- Media도 News처럼 YYYY/MM 표시. 기사 원문에서 포항공대신문은 2026-05-27, POSTECH 블로그는 2026-02-25 발행임을 확인해 2026/05·2026/02로 반영. 기사 원문 URL은 기존 데이터에 유지.
- 사무실 전화는 Faculty와 꼬리말 모두 Tel.로 표시. 전화번호 값·주소·학교 필수 요소는 그대로.
- 교수의 후속 양식 요청으로 Faculty·꼬리말을 `Tel.: +82-54-279-2202`로 통일. `Office:`와 같이 콜론을 표시하며 규칙에도 반영.
- 교수 요청으로 Talks의 Opportunities in IME 발표 장소를 `POSTECH Graduate Seminar`에서 `POSTECH IME Seminar`로 변경. 제목·자료 링크·다른 발표는 유지.
- 교수는 모집 문구가 건조하다며 적극적인 모집과 AI·AX에 대한 열정을 드러내도록 요청. Home을 `We're actively recruiting students with a passion for AI and AX.`로 변경. `Join us! 🚀`와 박스·글자 역할 유지. 기존의 추상적인 motivated students보다 관심 분야와 모집 의도를 명확하게 표현.
- 로고 실제 반영은 사용자 요청으로 별도 subagent의 격리 worktree에 위임. 이 커밋은 원본·초안 보관과 부모의 다른 minor만 포함.

## 검증
- Jekyll 빌드, 타이포그래피 24페이지·167상태·텍스트 17,895개·큰 제목 경계 18조합, 형식 13페이지×5폭, 실제 드래그 16건·일반 링크 클릭, POSTECH 24페이지×2폭 통과.
- Home·Research 마감 링크를 1440·390·320px에서 렌더 확인. 이모지는 모집 한 곳뿐이며 끝 표시는 링크 문구와 함께 줄바꿈.
- 로고는 원본·A·B·C와 40px 헤더 비교까지 보관. 실제 운영 로고 교체는 별도 형태 판단 후 진행.

## 기각한 안과 이유
- Minor마다 auto-merge PR 생성: 리뷰 목록과 작업 단위를 불필요하게 늘려 사용자가 기각.
- 모든 링크에 이모지·화살표: 장식이 과해짐. 짧은 이동 링크와 Home 모집 한 곳으로 제한.
- How to Use Agents 추가: 교수 본인 연구 발표를 싣는 Talks의 목적에 맞지 않아 사용자 기각.

## 복구와 남은 것
- 원본은 Git c17c792. 다른 작업자의 강의·스터디 변경 유지.
- 관련 minor와 검토 에셋을 한 커밋으로 묶어 main 직접 반영. 새 PR 없음.
