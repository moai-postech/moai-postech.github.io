# 2026-10-27 사이트 전체의 글자 위계와 여백 정리
작성자: Sangwoo Mo(sangwoomo) | 대상: `_themes/wide/includes/theme.css`, `_themes/wide/includes/sections/publications.html`, `tools/check_format.js`, `AGENTS.md`, `_config.yml`, `TODO.md` | 도구: Codex

> **한줄 결론: venue의 강조를 유지하면서 논문 제목과 메타정보의 크기 차이를 정리하고, 사이트 전체의 카드·목록·페이지 시작과 모바일 메뉴의 간격을 맞췄다.**

POSTECH 요구사항: P1, P2, P8 확인. 공식 로고, 링크, 비례와 강조색 유지. 연구실·강의 전체 필수 요소 검사 통과.

## 요청
교수: 사이트 전체의 폰트 크기, 간격, 여백과 디자인을 꼼꼼히 검토하고 개선. Publications By Year는 venue를 키운 뒤 균형이 어색하다는 지적. 이어 Publications에 국한하지 않고 사이트 전체를 다듬으라고 범위를 명시.

## 반영 내역
- 공통 역할 토큰 `--text-paper`: 목록과 Home 대표 논문의 제목을 20px, 모바일 18px로 통일. 저자와 자료 링크는 15px. venue는 기존 15px를 유지하고 700 굵기와 짧은 줄 높이로 강조. Oral 등의 강조색 유지.
- Publications의 venue·발표 형식과 arXiv·project·code를 각각 묶음으로 만들고 16px로 구분. 자료 링크 13px → 15px. 줄바꿈 때 혼자 남던 구분 세로선을 없앰. 제목·저자·venue 사이는 4px, 논문 사이는 32px.
- 여러 줄 항목의 전역 `--item-gap`: 12px → 16px. 본문 줄 높이 1.65 → 1.6. 모바일 한 줄 목록의 행 여백은 4px → 8px로 늘려 날짜와 본문을 한 항목으로 읽게 함.
- 공통 `--page-start`: 데스크톱 48px, 모바일 32px. 소개 없는 페이지의 첫 내용에도 적용. 하위 탭은 높이 40px와 토큰 간격으로 통일.
- 공통 `--card-padding`: 데스크톱 24px, 모바일 16px. Home 논문, Research 주제, Contact 단계 카드에 적용. 인물 카드의 데스크톱 행 간격은 48px.
- Home hero의 데스크톱 위 여백 96px → 64px. 사진과의 기존 간격과 모바일 단체사진 유지.
- 모바일 메뉴: 임의로 4개·2개로 꺾이던 배치 → 3개씩 두 줄, 높이 44px. Faculty 사진과 이름 사이 24px. Contact 단계의 번호·제목은 한 줄 묶음, 문단은 카드 전체 폭을 써서 중첩 들여쓰기로 좁아지던 문제 해소.
- 초기 merge 대기는 `TODO.md`에 기록. 교수가 전체 디자인 판단을 맡긴 후 검증·반영 단계로 옮기며 해당 항목을 정리. 향후 내부 할 일이 노출되지 않게 `_config.yml`에서 TODO.md 배포 제외.
- `AGENTS.md`에 새 역할과 토큰 기록. `check_format.js`는 13페이지 × 5개 폭(1440·1280·768·390·320px)으로 확대하고 논문 위계, 메타정보 크기, 가로 넘침 검사 추가. 인물 격자는 마지막 카드 한 장이 아닌 격자 전체 바닥을 기준으로 묶음 간격 측정.

## 검증
- Jekyll 빌드 통과. 로컬 Ruby 3.3과 기존 Liquid 4.0.3의 `tainted?`·`untaint` 호환 문제는 저장소 밖 임시 preload로 처리. 배포 소스와 의존성은 변경하지 않음.
- 13개 메뉴·News 페이지를 데스크톱 1440px, 태블릿 768px, 모바일 390px로 렌더해 화면 검토.
- `check_format.js`: 13페이지 × 5개 폭 통과.
- `check_postech.js`: 연구실 14페이지와 강의·스터디 10페이지 × 1280·390px 통과.
- Home focus 탭과 Seminar 필터를 320·390·768·1024·1440px에서 전환하고 가로 위치 유지 검사.
- `git diff --check` 통과. 원본 복구 경로: 작업 전 Git 커밋 `82c7a98`.

## 작업 중 정리
iCloud가 만든 동일 내용 사본 4개(text-selection HTML, check_selection JS, callout-one-cta-link-drag와 link-hierarchy-selection 기록)를 원본과 비교 후 정리. 복구 사본은 세션 scratchpad `moai-icloud-conflicts-20261027/`. 내용 차이 없음.

## 기각한 안과 이유
- venue를 다시 13px로 축소: 실적을 강조하려는 교수의 기존 의도 유지.
- venue를 제목 오른쪽으로 이동, 연도 옆 학회 요약, 논문 썸네일: 기존 [venue-badge-size](2026-10-27-venue-badge-size.md)의 기각 이유 유지.
- 페이지별 임의 글자 크기와 여백 추가: 같은 역할을 공통 토큰으로 통일.
- 메뉴·페이지 구성이나 콘텐츠 변경: 이번 요청의 디자인 범위에서 필요하지 않음.

## 남은 것
디자인 PR #18의 로컬·GitHub 검사 통과. 교수가 전체 디자인 개선을 맡겼으나 자동 승인 검토가 main 병합과 원격 브랜치 삭제를 명시적 승인 부족으로 거부. 병합만 별도로 승인 요청했고 브랜치 삭제는 제외. 배포는 승인 대기이며 `TODO.md`에 다시 기록. Home 링크·선택·Media·Contact의 작은 수정은 main `dde3c36`으로 별도 배포 완료.
