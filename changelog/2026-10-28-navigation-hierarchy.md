# 2026-10-28 모집 위치와 탐색 링크·논문 위계 재검토
작성자: Sangwoo Mo(sangwoomo) | 대상: Home, Research Overview, Publications, By Topic, Teaching, wide 테마, 형식 검사, AGENTS.md | 도구: Codex

> **한줄 결론: 모집 안내를 연구 소개 뒤로 옮기고, 탐색 링크와 논문 저자·보조정보의 역할을 나눠 크기와 간격을 다시 맞췄다.**

POSTECH 요구사항: P1~P9 영향 없음. 공식 로고, 학교 링크·개인정보 고지와 POSTECH Red 유지.

## 요청
교수는 Home 모집 안내의 맨 아래 위치, Media 가운데점, Research 마지막 링크 구성을 다시 검토하도록 요청했다. Publications에서 저자가 작고 venue가 커 보이는 균형을 고치고, Paper Stella의 Open in full screen이 사이트 공통 템플릿과 맞는지도 확인하도록 했다. Teaching의 paper study 표현은 논문 자체를 강조하지 않는 말로 바꾸도록 요청했다.

## 확인과 판단
- Publications의 저자와 venue는 모두 15px였지만 저자는 보통 굵기의 회색, venue는 굵기 600의 배지라 시각적 무게가 달랐다. 제목을 키우는 대신 저자 16px, venue·자료 링크 14px를 같은 데스크톱·모바일 목록에서 비교했다.
- Open in full screen은 페이지를 여는 행동 링크인데 15px 캡션 역할에 묶여 있었다. 공통 토큰 존재만으로 역할 적용까지 일관된 것은 아니었다.
- Research 닫는 안내의 section-next 클래스가 문단에만 붙어, 앞 내용과의 간격은 공통 24px 대신 데스크톱 64px·모바일 48px였다. Home으로 돌아가는 링크와 논문 목록 링크도 함께 있어 마지막 행동이 나뉘었다.
- Home 맨 아래의 모집 안내는 지원자에게 늦게 보인다. hero에 넣는 안은 앞선 교수 결정으로 기각됐으므로, 연구 방향을 읽은 뒤 지원할 수 있게 Our focus 뒤·News 앞으로 제안한다.

## 반영 내역
- Home: 독립 모집 절을 Our focus·논문 안내 뒤, News 앞으로 이동. 모집 문구·지원 경로와 사진·hero 순서는 유지.
- Media: 가운데점 제거. 제목 뒤 출처는 8px 여백과 15px 보조색으로 구분. 불필요한 HTML 공백을 제거해 간격을 CSS 한 곳에서 관리.
- Research: 응용 설명은 일반 글자로, 마지막 링크는 See our publications 하나로 정리. 닫는 안내 역할을 절에 적용해 앞 내용과 24px 간격.
- 논문 역할: 제목 18px(모바일 17px) 유지, 저자 16px, venue·자료 링크·Oral 등은 14px. venue 배경과 굵기 600은 유지하고 발표 형식도 600으로 맞춤. Home 대표 논문 배지도 같은 보조정보 토큰 사용.
- embed 템플릿: 설명용 caption(15px)과 행동 링크 next를 분리. Open in full screen은 next로 옮겨 Home·Research의 닫는 링크와 같은 본문 크기 17px(모바일 16px), 보통 굵기, 앞 간격 24px 적용.
- Teaching: A weekly AI study group for POSTECH undergraduates. 링크는 AI study group 전체. 실제 논문 자료를 가리키는 Papers 등의 다른 용어는 이 요청 범위에서 유지.
- AGENTS.md 역할표와 Media 규칙을 구현과 맞춤. 형식 검사는 저자·보조정보·닫는 링크의 크기와 간격을 함께 확인하도록 확대.

## 검증
- 기존 라이브와 저자 16px·보조정보 14px 비교안을 1440·390px에서 확인. 수정 후 Home·Research·Publications·By Topic·Teaching을 1440·768·390·320px의 20조합으로 렌더해 가로 넘침 없음 확인. 데스크톱·모바일의 실제 화면에서 글자 위계와 모집 위치·Media·닫는 안내를 검토.
- Home 순서 Our focus → Join MOAI Lab → News → Media 확인. Media 구분점 없음, 같은 줄에서 제목·출처 실제 간격 8px 확인.
- Research의 마지막 목적지 하나(publications.html)와 앞 간격 24px 확인. Open in full screen은 17px·모바일 16px, 굵기 400, 앞 간격 24px와 기존 목적지 유지 확인.
- Jekyll 빌드, `check_format.js`(13페이지×5개 폭), 실제 드래그 16건, 조작 검사(24페이지×2개 폭), POSTECH 검사(24페이지×2개 폭), changelog·diff 검사 통과.
- 모바일 논문 목록은 일반 뷰포트에서도 재확인. 요소만 길게 캡처할 때 나타난 고정 요소 캡처 잔상은 실제 UI 노출이 아니며, 본문 이동 링크의 비활성 top은 -57px로 화면 밖인 점을 확인.
- Chrome 렌더 기준. 원본 복구 경로: Git `fe39b8d`.

## 기각한 안과 이유
- 모집 안내를 맨 아래 유지: 연구에 관심을 가진 지원자가 News·Media를 모두 지나야 다음 행동을 찾음.
- 모집 문장을 hero로 복구: 앞선 교수의 기각 결정 유지. 연구 소개를 마친 뒤 독립 절로 제안.
- Media의 가운데점만 지우고 넓은 간격 유지: 제목과 출처의 연결이 약해짐. 간격을 8px로 정리.
- Research의 Home 복귀 링크 유지: 연구를 다 읽은 뒤 같은 연구 방향을 다시 보는 우회 경로. 관련 논문 목록으로 한 경로 제공.
- 논문 제목 재확대, 저자를 굵게 강조: 이미 지적된 제목 과장과 지나친 bold가 다시 생김. 크기 역할과 배지의 무게를 조정.
- venue를 과거 13px로 복구: 실적을 읽는 가독성을 유지하면서 저자보다 낮은 14px 보조 역할로 정리.
- 모든 캡션을 본문 크기로 확대: 설명과 행동의 역할이 다름. embed 템플릿에서 구분.

## 남은 것
로컬 검증 완료. PR에서 변경안을 검토하고 병합·배포 결정. 대표 논문 선정에 대한 기존 TODO는 별도 유지.
