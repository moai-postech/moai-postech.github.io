# MOAI 로고 정리안

2026-10-28. 제공받은 글자형 SVG 로고를 베이스로 비교하는 초안이다. 교수의 B 비율·절제된 각 선택을 반영해 C를 운영 로고의 기준으로 확정했다.

- `01-soft-refinement.png`: 글자 간격과 둥글기를 정리한 보수적인 안.
- `02-compact-refinement.png`: 폭을 넓히고 받침을 줄여 실루엣을 안정시킨 안. 현재 비교에서는 이 방향을 권고.
- `03-compact-angular.png`: 교수의 B 비율·각진 느낌 유지 선택을 반영한 후속안. B의 비율을 유지하고 둥글기를 줄인 현재 권고안.
- 두 안 모두 built-in Imagegen 편집으로 생성. 투명 배경 보존. 입력은 `../moai-logo/png/moai-logo-brand-h512.png`.
- 운영 파일은 `assets/img/logo-moai.svg`. C의 외곽과 글자 공간을 직접 정리한 5개 path이며 bitmap이나 자동 trace를 포함하지 않는다. 원형·A·B·C는 비교 원본으로 보존.
- `assets/img/favicon-moai.svg`는 작은 크기 전용 단순화와 흰 바탕을 적용한 운영 아이콘이다. `assets/img/apple-touch-icon-moai.png`는 기존 C 전체 심볼의 180px 렌더다.

## A의 생성 프롬프트

```text
Edit the provided MOAI Lab logo conservatively. It is an uppercase M at the top, O in the middle, A and I below, arranged to form the profile silhouette of a Moai stone statue on a short base. Preserve that exact idea, the recognizable letter topology and ordering, and the existing left-facing nose/profile. This is a careful optical refinement of the supplied mark, not a new generic statue or a normal wordmark. Improve consistency of corner rounding, negative spaces between letters, and balance between the M, O, A, I. Make the upper portion feel less precarious and give the bottom plinth slightly less weight. Keep its handmade geometric character and asymmetry, with a cohesive, more natural statue silhouette. Monochrome solid POSTECH crimson #A61955; crisp flat vector-like edges; no gradients, texture, shadows, outlines, face drawing, circuitry, ornaments, added letters or captions. Only the isolated refined logo centered with comfortable margins on an actually transparent background. The four letters must remain M O A I, not other letters. Intended as a refined academic AI lab mark that works at 40px height.
```

## B의 생성 프롬프트

```text
Edit the supplied typographic MOAI stone-statue logo into a slightly more sculptural, compact refinement while preserving its identity. Preserve the distinctive construction: uppercase M at the crown, a large O at the center, A and I at the lower portion, and a small integrated foot/base, with the whole mark forming a left-facing Moai head/profile. Keep the recognizable letters, their topology and approximate arrangement. Improve the outside contour so brow, projecting nose/profile, cheek and chin read as one calm continuous sculpture. Make the silhouette a little broader and better balanced, and reduce the tall heavy standalone plinth so the mark is less lanky and more legible when small. Harmonize negative-space gaps and corner radii. Keep it refined and restrained with simple bold geometric shapes, not playful, cartoonish, robotic, decorative or a literal drawn face. Use only solid crimson #A61955 and actual transparent negative space. Flat crisp vector-like edges, no gradients, shadows, textures, outlines, extra text, labels or captions. Isolated logo centered with comfortable margins on an actually transparent background. M O A I must remain the only letters and be legible through the statue construction. It must still clearly be a refinement of the input logo, not a wholly different symbol.
```

## C의 생성 프롬프트

입력 1은 B, 입력 2는 제공받은 원본 PNG다. built-in Imagegen 편집, 투명 배경.

```text
Refine IMAGE 1 only, using IMAGE 2 as a restrained reference for angular geometric character. IMAGE 1 is the approved compact MOAI typographic Moai logo proportion and layout. Preserve its compact width/height ratio, its exact overall construction, the M at the crown, O in the middle, A and I below, the left-facing projecting nose/profile formed by the M, and the thin integrated base. Make one targeted change: reduce the over-rounded bubble-like character by about one third, adding calm flatter planes and a few deliberate angular cuts inspired by IMAGE 2. Keep only small consistent optical corner radii. Do not restore the tall narrow proportions or heavy separate plinth of IMAGE 2. Do not move letters, replace letter topology, add a literal face, or add separate shapes. Preserve open counters and clean gaps so M O A I stay recognizable. The result should feel like carved geometric typography and a coherent Moai silhouette, refined, calm and distinctive for an academic research lab, not playful or cartoonish. Monochrome flat solid crimson #A61955; crisp clean vector-like boundaries; no gradients, shading, texture, noisy edges, highlights, outlines, additional text or labels. Only one isolated centered logo with comfortable margins on an actually transparent background. This is a subtle targeted refinement of IMAGE 1, not a redesign.
```

## 모아이 인지성 재검토 (2026-10-28)
- `04-sculptural-profile-concept.svg`: 모아이 얼굴을 먼저 읽히게 한 단색 벡터 비교 초안. 이마·긴 코·입·큰 턱을 하나의 외곽으로 연결. 현재 운영 로고를 교체하지 않음.
- `04-profile-comparison.png`: 위는 현재 C, 아래는 얼굴 중심 초안. 큰 크기와32·16px를 나란히 렌더.
- 현재 C는 MOAI 철자는 분명하나 M의 깊은 홈과 둥근 O 때문에 얼굴이 분절된다. 얼굴 중심 초안은 석상 인지성이 높고 작은 크기에서도 외곽이 남지만, 네 글자의 조합이라는 고유 아이디어가 약해진다.
- Imagegen으로 기존 글자 배치 유지안과 얼굴 중심 생성안을 검토. 전자는 원래 문제를 해결하지 못했고 후자는 불필요한 그림자와 발광이 생겨 운영 후보에서 제외. 얼굴 중심 구도의 원리만 단색 SVG로 직접 정리했다. 자동 trace나 래스터 삽입 없음.
- 권고: 이마·코·턱이 먼저 보이는 외곽을 바탕으로 하고 MOAI 글자는 보조적인 발견으로 남기는 방향. 이 SVG는 그 방향을 판단하는 초안이며 최종 로고가 아니다.

## MOAI 글자 보존 후속안 (2026-10-28)
- 사용자는 얼굴 중심04안이 MOAI 글자를 없앤다고 지적하고, 네 글자를 유지하는 방향의 수정을 위임.04안은 기각.
- `05-letter-profile-study.png`: 기존 C를 입력으로 M·O·A·I 식별 유지, M 상단 홈 축소, 긴 코, O·A 공간 보존, 낮은 받침을 요구한 Imagegen 형태 연구. 래스터의 색차·표현 효과는 운영에 사용하지 않음.
- `05-letter-profile.svg`: 형태 연구를 바탕으로 직접 정리한 단색5-path 벡터. M의 홈을 얕게 하고 코 윤곽을 곧게, O 공간을 조금 더 넓게, A의 턱·아래 변과 낮은 받침을 정돈. 네 글자의 순서와 공간을 보존. 자동 trace·래스터 삽입 없음. 운영 로고에 반영.
- `05-letter-profile-comparison.png`: 위는 C, 아래는05. 큰 크기·32·16px의 형태 비교.
- 헤더 높이32px, 공식 #A61955 유지. 탭 전용은 같은05의 외곽과 확대된 A 공간, 흰 바탕을 사용. Apple icon도 같은 탭 전용 SVG로 갱신.

## 최소 모아이 실루엣 (2026-10-28)
- 최신 요청은 멀리서·작게 봐도 모아이로 보이는 아주 단순한 실루엣을 먼저 만들고, MOAI 타이포그래피는 가능할 때만 녹이는 방향. 이전 네 글자 식별 최우선 기준보다 이 요청이 우선.
- 얼굴을 여러 조각으로 나눈 생성안은 복잡하다는 사용자 피드백으로 제외. M/O/A/I를 읽히게 하려는 독립 블록, 볼의 삼각형, 큰 T 형태의 코 틈도 제외.
- `06-minimal-moai-study.png`: 하나의 외곽과 최대 두 틈만 허용한 Imagegen 형태 연구. 운영에는 래스터 표현을 쓰지 않음.
- `06-minimal-moai.svg`: 외곽 하나와 눈·입의 두 틈만 남긴 단색 SVG. 평평한 큰 이마, 앞으로 나온 긴 직선 코, 큰 턱, 짧은 목을 유지. 별도 받침·귀·볼 장식 없음. 운영 로고와 공통 아이콘의 원형.
- `06-minimal-moai-comparison.png`: 기존05와06을 큰 크기 및32·16px에서 비교. 소형에서 면을 더 나누지 않도록 네 글자의 내부 삽입은 채택하지 않고, 기존 MOAI Lab 이름과 함께 사용.
- 공식 #A61955와 헤더32px 유지. 탭은 흰 바탕·같은 실루엣을 사용하고 Apple icon도 같은 SVG에서 렌더.
