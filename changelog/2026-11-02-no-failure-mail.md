# 2026-11-02 교수 계정 push 는 검사가 실패로 끝나지 않게 함
작성자: Sangwoo Mo(sangwoomo) | 대상: `tools/check_changelog.py`, `.github/workflows/audit.yml`, `AGENTS.md`, `tools/prepush.sh`, `.githooks/pre-push` | 도구: Claude Code

> **한줄 결론: 교수 계정 push 의 `changelog`·`checks`·`audit` 문제는 주석(warning)으로만 남기고 실행은 성공으로 끝낸다. push 전 검사는 걷어냈다.**

POSTECH 요구사항: 영향 없음

## 요청
[prepush-gate](2026-11-02-prepush-gate.md) 뒤에도 빈틈이 남았다. `changelog` 는 여전히 실패로 끝났고, push 전 검사는 clone 마다 훅을 켜야 했다. 교수는 형식을 덜고 에이전트가 자연스럽게 따르는 흐름을 원했다.

원인은 구조였다. 학생 수정을 막으려는 검사가 교수 계정 push 에도 실패로 걸렸다. 에이전트는 모두 교수 계정으로 push 하므로 실패 메일이 모두 교수에게 갔다. ruleset 은 실제로 꺼져 있어(2026-11-02 API 확인) 실패해도 막는 효과는 없었다.

## 반영 내역
- `check_changelog.py`: CI 에서 push 계정이 `maintainers.txt` 에 있으면 문제를 `::warning` 으로 남기고 0 으로 끝난다. 다른 계정과 로컬 실행은 그대로 실패한다. sangwoomo·moai-postech 는 통과, gyeomh 는 실패하는 것을 확인했다.
- `audit.yml`: 검사 단계를 `continue-on-error` 로 두고 실패하면 경고를 남긴다.
- `tools/prepush.sh` 를 지우고 `.githooks/pre-push` 를 예전대로 되돌렸다. push 뒤 `checks` 가 메일을 보내지 않으니 push 전 단계는 형식만 늘린다.
- `AGENTS.md` "검사와 배포": push 뒤 `gh run watch` 로 한 번 보고 경고가 있으면 고친다는 한 단계로 줄였다.

## 기각한 안과 이유
- push 전 훅 유지: clone 마다 켜야 하고, 빌드 환경이 없는 맥에서는 반쪽 검사다.
- 교수 계정도 실패 유지: 막는 효과 없이 메일만 만든다.
- 세미나·스터디 동기화 실패도 경고로: 동기화가 멈춘 것은 실제 고장이라 메일로 알게 둔다.

## 남은 것
없음
