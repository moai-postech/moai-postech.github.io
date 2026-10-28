# 디자인 검수 절차

공통 템플릿을 기본으로 삼되, 정보량과 배치에 필요한 조정은 `../../_themes/wide/page-design.json`에 이유와 적용 범위를 남긴다. CSS 수치 통과와 실제 화면의 품질을 따로 검토한다. 자동 검사가 통과해도 시각 검토 결과는 기본값 `pending`이다.

## 적용 범위와 책임

- 테마 HTML·CSS·JS·역할 JSON, 사이트 설정, 공통 JS, 이미지와 HTML·Markdown 페이지 변경은 별도 시각 검토를 요구한다. 데이터 콘텐츠 갱신은 기존 자동 검사를 모두 실행하되 시각 검토 완료라고 보고하지 않는다. 콘텐츠 변경으로 배치가 달라지면 `--full`로 화면을 만들고 같은 절차로 검토한다.
- 구현자는 문제와 변경 이유를 기록한다. 다른 사람 또는 구현 맥락을 물려받지 않은 별도 검토자가 실제 화면을 읽는다. 검토자는 [reviewer-prompt.md](reviewer-prompt.md)를 따른다. 사용자에게 최종 오류 찾기를 맡기지 않는다.
- 템플릿 검사, 실제 크기 화면 검토, 배포 후 확인의 결과를 구분해 보고한다. `남은 문제 없음`은 확인 범위와 기록을 붙일 때만 쓴다. 모든 환경에서 오류가 없다는 보장은 하지 않는다.

## 수정본 고정

빌드와 검사는 CI와 같은 UTC 환경에서 실행해 로컬 시간대 때문에 날짜가 달라지지 않게 한다. 저장소 루트에서 Ruby 3.3, Bundler와 Playwright 1.48.2 Chromium을 준비한다. 저장소를 처음 열 때 `node tools/visual_review.js install-hooks`를 실행한다. 기존 훅은 보존하며, 공통 Git 디렉터리에 설치해 같은 저장소의 worktree에도 적용한다. 다른 `core.hooksPath`가 있으면 덮어쓰지 않고 기존 훅에 `.githooks/pre-push`를 연결한다.

```sh
node tools/visual_review.js prepare --out .agent-memory/visual-review/candidate-001 --implementer implementation-session-id
node tools/visual_review.js serve --bundle .agent-memory/visual-review/candidate-001
```

`prepare`는 빌드와 전체 자동 검사를 실행하고, 소스 지문·실제 생성 파일·폰트 응답의 해시·브라우저 버전·캡처 시각을 기록한다. 기본 화면은 모든 공통 템플릿 페이지의 1440·768·390·320px에서 만든다. 기본 높이는 900px이며, 짧은 랩 페이지는 1080px 높이도 별도로 찍어 Footer 위 여백을 확인한다. 전체 페이지를 축소한 그림 대신 실제 크기의 겹치는 스크롤 타일과 컴포넌트 확대 화면을 제공한다. 탭·필터·드롭다운·hover·focus·오류·가상 명단 해제 상태도 별도로 찍는다. 가상 명단에는 실제 개인정보와 암호를 쓰지 않는다.

새 버튼에 캡처 상태가 없거나 계획한 상태·페이지·폰트·이미지가 누락되면 실패한다. 사진처럼 동작 자체가 없는 콘텐츠는 기본 화면의 타일로 확인한다. 검사 범위는 `policy.json`, 상태 수집은 `tools/visual_review.js`가 정한다. 새 상호작용이 생기면 두 곳을 함께 갱신한다.

이전 버전과 비교할 때는 `prepare`에 `--compare-to <이전 고정 폴더>`를 더한다. 이전 증거가 손상됐으면 비교를 만들지 않는다. 검토할 이전 화면이 없으면 그 한계를 `review.json`의 `limits`에 적는다. 검토 중 소스가 바뀌면 새 폴더에서 다시 시작한다.

## 별도 시각 검토

갤러리 `index.html`에는 페이지별, 상태별, 공통 컴포넌트별 비교가 있다. 같은 그림은 검토 단위 안에서 바이트 해시로 중복을 줄인다. 화면을 줄여서 훑는 것으로 끝내지 않고 모든 요구 이미지 ID를 원래 크기로 읽는다. 여섯 질문은 구현의 기대 수치와 별개다.

- 위계: 1차 메뉴, 드롭다운, 하위 탭이 서로 경쟁하지 않는가.
- 가독성: 이름·학력·운영 정보를 읽을 수 있고 불필요하게 작지 않은가.
- 밀도: 글자 양에 맞는 크기·행간·여백인가.
- 정렬: 시작선과 열, 줄바꿈, 이동 전후 메뉴 위치가 자연스러운가.
- 상태: 펼침·선택·hover·focus·오류·잠금 상태까지 적절한가.
- 회귀: 이전 화면과 인접 요소, PC와 모바일에 새 문제가 없는가.

검토자가 생성된 `review.json`에 실제 ID와 독립 검토 방식, 검토 시각, 질문별 관찰·이미지 ID, 단위별 관찰·모든 요구 이미지 ID를 채운다. `findings`는 `id`, `observation`, `evidence`, `status`를 가진다. 해결은 `verification`, 의도적으로 남길 판단은 `rationale`과 `acceptedBy`를 요구한다. 열린 문제는 통과할 수 없다. 최종 `verdict`는 `pass` 또는 `pass-with-notes`이며 자동으로 채우지 않는다.

```sh
node tools/visual_review.js verify --bundle .agent-memory/visual-review/candidate-001 --review .agent-memory/visual-review/candidate-001/review.json
node tools/visual_review.js record --bundle .agent-memory/visual-review/candidate-001 --review .agent-memory/visual-review/candidate-001/review.json
```

검증한 기록은 `_qa/visual-review/reviews/<sourceFingerprint>.json`에 커밋한다. 원본 캡처 폴더는 지우지 않는다. 로컬 pre-push는 원본 파일 해시까지 검사한다. 다른 기기에서는 같은 증거를 준비하거나 새로 고정하고 검토해야 한다. 검토자 이름과 관찰 기록은 진술이며 도구가 신원이나 실제 열람을 인증하는 것은 아니다. 테스트 fixture는 실제 승인으로 쓰지 않는다.

## CI와 배포

`format`은 PR에서 검사와 고정 화면을 만들고 디자인 변경의 검토 기록을 확인한다. main과 수동 실행은 마지막 **성공 배포**를 기준으로 비교한다. 실패한 디자인 변경 뒤에 콘텐츠만 올려도 검토를 건너뛰지 않는다. 최초 기준은 도입 직전 배포 `policy.json.initialDeployment`이며 API 오류는 실패로 처리한다.

CI는 같은 입력의 재빌드·화면 목록·자동 검사와 별도 검토 기록의 연결을 확인한다. 원래 로컬 PNG를 CI가 시각적으로 읽었다고 주장하지 않는다. 실행별 갤러리와 로그는 Actions artifact에 7일 보관한다. 원본 검토 증거의 보관은 로컬 폴더와 기록이 맡는다.

`deploy`는 `needs: format`으로 검사 성공 뒤에만 `_site`를 배포한다. GitHub Pages의 `build_type`이 `workflow`여야 실제 배포 차단이 유효하다. `legacy` 상태에서는 main 자동 빌드가 이 검사를 앞지를 수 있으므로 활성화 완료라고 보고하지 않는다. 관리자가 워크플로나 훅을 강제로 우회할 수 있다는 한계는 남는다.

배포 후 담당 에이전트는 실제 URL에서 핵심 변경 화면, 상단 메뉴 펼침과 페이지 이동, 모바일 줄바꿈, 폰트 로드를 확인하고 로컬 검토본과 다르면 수정 후 재검수한다. 완료 보고에는 자동 검사 결과, 별도 시각 검토 결과, 배포 후 확인 결과, 남긴 판단을 각각 쓴다.

## 프로세스 자체 검증

`node tools/test_visual_review.js`는 자기 승인, 누락 화면·타일, 소스 변경, 이미지 변조, 실패한 검사, 재빌드 불일치, 미해결 문제와 실제 main pre-push 거부를 검사한다. 검수 도구만 고친 경우 전체 캡처를 실습하되 사이트 디자인의 별도 시각 승인을 받았다고 꾸미지 않는다.
