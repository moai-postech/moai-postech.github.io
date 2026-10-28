# 2026-10-28 새 MOAI 로고 보관과 검토
작성자: Sangwoo Mo(sangwoomo) | 대상: assets/img/logo-candidates, 로고 교체 검토 | 도구: Codex

> **한줄 결론: C의 compact 비율과 각진 면을 순수 SVG로 정리해 운영 로고·favicon에 적용.**

POSTECH 요구사항: P1, P2, P3, P5, P7, P8, P9 확인. 학교 워드마크와 링크는 유지.

## 요청과 보관
- 교수는 제공한 moai-logo.zip을 assets에 저장하고 교체할지 검토하도록 요청.
- 원본 277,801 bytes는 assets/img/logo-candidates/moai-logo.zip. README, 세 색상 SVG, 크기별 PNG, favicon은 assets/img/logo-candidates/moai-logo/에 보관.
- ZIP 경로 탈출·symlink와 SVG script·외부참조 없음 확인. 첨부 문서의 사용 예시는 자료로만 취급.

## 비교와 판단
- MOAI 글자를 모아이 실루엣으로 묶은 점이 기존 일반 얼굴 심볼보다 고유함. brand색 #A61955는 기존 브랜드색과 같아 헤더에 적합.
- 비율 1122:2275의 세로형. 기존 28×33px 칸에 강제 맞추면 찌그러짐. 높이 33px·너비 auto는 가늘고 작아 보임.
- 실제 PC 1440·모바일 390 헤더에서 기존·후보 33px·후보 40px를 비교. 40px·너비 auto가 MOAI Lab 글자와 학교 워드마크 사이에서 더 분명하게 보임.
- 실제 16·32·64px favicon 비교. 새 favicon은 16px에서 글자와 실루엣이 매우 작아 식별력이 떨어짐. 헤더 채택은 추천하되 작은 favicon은 간소화 전용 안을 권고.

## 기각한 안과 이유
- 지금 바로 교체: 사용자는 보관과 검토를 요청했으므로 적용 결정이 남음.
- 기존 28×33px에 강제 늘림: 원래 비율 훼손.
- stone색을 사이트 기본으로 사용: 기존 브랜드와 학교 크림슨에 맞는 brand색 우선.

## 복구와 남은 것
- 기존 logo-mark.svg, apple-touch-icon.png, _config.yml 유지.
- 교체 여부는 교수 결정 대기. 교체 시 favicon 보완 검토를 TODO.md에 기록.

## 후속 요청: 새 로고를 베이스로 함께 다듬기
- 교수는 기존 얼굴형보다 제공한 글자형을 베이스로 쓰고, 더 자연스러운 정리안을 함께 판단하도록 요청.
- built-in Imagegen으로 A(원형 유지·간격 정리), B(폭 확대·얇은 받침·실루엣 정리) 두 초안을 생성. 투명 PNG와 정확한 프롬프트는 assets/img/logo-candidates/refinements/에 보관.
- 비교 의견: B가 작은 헤더에서 덜 가늘고 무게가 안정적이다. 두 생성안 모두 원본보다 둥글어져 원본의 각진 인상을 얼마나 남길지 교수 의견을 받아 정하는 편이 좋다. 확정 SVG나 운영 로고가 아닌 비교 초안이다.
- 교수는 B 비율을 유지하고 각을 조금 살리는 방향을 선택. B를 입력으로 삼고 원본의 각진 인상을 참고해 C(03-compact-angular.png)를 생성. 넓은 비율·얇은 받침·글자 배치는 유지하고 과하게 둥근 모서리와 면을 절제. C가 현재 권고안이며 최종 SVG·운영 적용은 형태 판단 후 진행.

## 운영 반영 결정과 검사
- 교수는 별도 에이전트가 로고 반영과 배포를 끝내도록 요청. B 비율과 절제된 각을 살린 C를 선택한 후속 조정으로 적용.
- `assets/img/logo-moai.svg`: C의 M/O/A/I 배치, 왼쪽 profile, 얇은 받침을 5개 path로 직접 정리. #A61955 단색. 래스터 삽입과 자동 trace 없음.
- `_config.yml`의 운영 경로를 새 SVG로 전환. 헤더 40px, 꼬리말 30px, 강의·스터디 바닥 19px로 높이를 두고 너비는 auto로 보존.
- 연구실·강의 공통 favicon은 같은 전체 심볼을 정사각 viewport에 배치. 16/32/64px 실제 렌더에서 실루엣·O의 공간을 확인. 16px에서 네 글자를 따로 읽기에는 작지만 동일 심볼을 유지하며 원형보다 넓어진 형태를 사용.
- Apple touch icon은 동일 SVG를 흰 배경 180px PNG로 렌더. 기존 얼굴형 `logo-mark.svg`와 기존 apple-touch-icon, 모든 후보·원본 ZIP은 보존하므로 git 이력과 기존 파일로 복구 가능.
- Jekyll 빌드 통과. check_format 13페이지×5폭, check_typography 24페이지·167상태/폭·17,895텍스트, check_postech 연구실14·강의10페이지×2폭 통과.
- PC1440·모바일390/320에서 Home 헤더·꼬리말과 Data Engineering·AI Study의 헤더·바닥을 실제 렌더로 확인. 전체 페이지 구성과 글자 스타일은 유지. TODO의 로고 대기 항목 제거.

### 이번에 기각한 안
- 후보 PNG를 그대로 운영에 사용: 미세 색차와 가장자리 노이즈를 남기므로, 선택한 기하를 직접 정리한 벡터를 사용.
- 작은 favicon에 별도 얼굴이나 새 심볼 도입: 선택한 MOAI 글자형과 정체성이 갈라지므로 같은 전체 심볼 유지.
- 기존 로고·후보 삭제: 비교와 복구 경로를 남기기 위해 보존.

### 배포
- 관련 변경만 한 커밋으로 묶어 부모 minor 변경이 반영된 main 위에 재배치. Pages 배포와 실제 사이트 확인 결과는 이어 기록.
