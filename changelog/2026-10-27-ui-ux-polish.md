# 2026-10-27 글자 위계와 반응형·키보드 사용성 재정리
작성자: Sangwoo Mo(sangwoomo) | 대상: wide 테마, Home, By Topic, 형식·선택·조작 검사, AGENTS.md | 도구: Codex

> **한줄 결론: Publications 제목의 과한 크기와 메타정보의 무게를 함께 낮추고, Home 안내를 목적별로 나누며 태블릿 높이 급증과 키보드 조작 문제를 고쳤다.**

POSTECH 요구사항: P1~P9 영향 없음. 공식 로고, 링크, 비례, 팔레트와 개인정보 고지 유지. 공통 레이아웃의 본문 이동 링크 추가 후 연구실·강의 전체 필수 요소 검사 통과.

## 요청과 판단
교수는 Publications 제목이 너무 크고 Media 가운데점과 출처 사이가 멀다고 지적했다. Home은 Our work 설명 뒤 Publications 링크가 오도록 자연스럽게 정리하고 모집 안내와 분리할 자유를 주었다. 이어 사이트 구석구석의 디자인·UI/UX를 검토해 고치고, 교수 의견이 필요한 사항만 남기라고 요청했다.

검사 통과와 미감의 완성은 다르다. 기존 20px 제목이 연도 제목과 같고 venue·자료 링크도 모두 무거운 점을 실제 화면에서 비교했다. [재검토 근거](../discussions/2026-10-27-design-balance-recheck.md).

## 반영 내역
- Publications와 Home 논문 제목: 공통 역할 `--text-paper`를 본문보다 1px 큰 18px(모바일 17px), 굵기 600으로. 연도 20px, 저자·venue·링크 15px와 구별. venue는 700→600, 자료 링크는 600→400. 논문 간격은 32→24px, 내부 간격은 4px 유지.
- 전역 여러 줄 항목 간격 `--item-gap`을 16→12px로 조정. 항목 안 세부 간격과 항목 사이 구분 유지. Research의 닫는 안내 줄도 앞 내용에서 24px 떨어지는 공통 역할로 통일.
- Media 가운데점 양쪽 간격 12→8px. 출처의 보조색과 15px 크기 유지.
- Home의 분홍 안내 띠 제거. Our focus 뒤 `Our work appears at NeurIPS, ICML, and ICLR. See our publications`로 설명과 링크 순서를 정리. News·Media 뒤에는 `Join MOAI Lab`을 독립 절로 두고 짧은 모집 문장과 `See how to apply` 링크 제공. 화살표와 링크 bold 없음.
- By Topic의 `Open in full screen`에 남은 화살표 제거.
- 태블릿 681~960px에서 세로로 쌓이던 장식 hero 그림을 접고, 사진 높이는 220~380px 범위에서 화면 폭에 따라 연속 변화. 사진과 hero→사진→focus 순서는 유지. 680/681px의 focus 시작 높이 차이는 526→20px.
- 연구실·강의 공통 레이아웃에 첫 Tab으로 보이는 `Skip to content`와 초점 가능한 main 추가. 강의의 base URL에 영향받지 않게 현재 페이지 경로로 연결.
- Home·AI Study 탭에 Home·End 키와 기본 스크롤 방지 추가. 선택된 링크의 Cmd/Ctrl·Shift 클릭은 기본 새 탭·새 창 동작 유지. Seminar는 웹폰트 로딩 후 열 폭 재측정.
- 형식 검사의 calc 글자 크기 측정 보완, 선택 검사 selector 갱신. 새 조작 검사를 CI에 추가. AGENTS.md 역할표·링크 문법을 구현과 맞춤.

## 검증
- Jekyll 빌드 통과. 로컬 Ruby 3.3/Liquid 호환 preload와 Chrome 경로 설정은 저장소 밖 scratchpad만 사용.
- 수정 전 연구실 13페이지×11개 폭 143조합과 강의·스터디 10페이지×3개 폭 30조합을 검토. 제목 17·18·20px와 Media 12·8px를 같은 화면에서 비교.
- 수정 후 연구실 13페이지×1440·768·390px 39화면과 강의·스터디 30조합을 재확인. 가로 넘침 없음. Home, Publications, Contact의 실제 렌더에서 위계·간격 확인.
- `check_format.js`: 13페이지×5개 폭 통과. `check_selection.js`: 실제 드래그 16건과 일반 클릭 통과. `check_postech.js`: 연구실 14페이지·강의 10페이지×2개 폭 통과.
- `check_interaction.js`: 연구실·404·강의 24페이지×2개 폭에서 본문 이동, Home·Study 탭 키보드 조작, 선택 상태의 새 탭 클릭, 반응형 경계 검사.
- By Topic은 실제 외부 iframe에서 canvas 프레임이 그려진 뒤 정상 표시와 브라우저 오류 없음을 확인. 첫 로딩 화면을 완성 화면으로 판정하지 않음.
- Chrome 기준. Safari·Firefox의 실제 브라우저 검토는 포함하지 않음. 원본 복구 경로: Git `4285574`.

## 기각한 안과 이유
- 제목만 17px로 축소: 제목과 메타정보의 굵기를 함께 조정한 18px안이 제목의 구별과 목록 밀도를 더 잘 유지.
- venue를 더 키우거나 링크도 굵게 유지: 한 논문 안의 세 요소가 경쟁하므로 크기는 유지하고 굵기로 위계 조정.
- Home 실적·모집 안내를 같은 분홍 띠에 유지: 서로 다른 방문 목적이 한 덩어리로 묶임. 연구 설명과 모집 절로 분리.
- Media 출처를 오른쪽 끝으로 이동: 기사 제목과의 연결이 약해짐. 제목 뒤 위치 유지.
- 태블릿 사진 삭제·순서 변경: 구성 보존으로도 높이 급증을 해결할 수 있음.
- 대표 논문을 임의로 교체: 진행 연구와 게재 실적 중 무엇을 앞세울지는 콘텐츠 선택이므로 교수 의견을 남김.

## 남은 것
- Home 대표 논문의 진행 연구·게재 실적 비중: [TODO](../TODO.md)와 [논의](../discussions/2026-10-27-design-balance-recheck.md)에 기록. 기존 선정 유지.
- 모든 검사가 통과한 [PR #19](https://github.com/moai-postech/moai-postech.github.io/pull/19)를 교수가 "병합하고 배포"로 승인. main `d64a978`로 squash merge하고 GitHub Pages 자동 배포 실행. 원격 브랜치는 유지.
- Pages `d64a978` built 확인. 라이브 Chrome 1280·390px에서 Publications 제목 18·17px, Media 가운데점 간격 8px, 새 Home 안내·독립 모집 절, 링크 텍스트 실제 드래그와 본문 바로가기 정상 확인.
