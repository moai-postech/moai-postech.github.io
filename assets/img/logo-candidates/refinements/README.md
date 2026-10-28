# MOAI 로고 정리안

2026-10-28. 제공받은 글자형 SVG 로고를 베이스로 비교하는 초안이다. 운영 로고로 확정하지 않았다.

- `01-soft-refinement.png`: 글자 간격과 둥글기를 정리한 보수적인 안.
- `02-compact-refinement.png`: 폭을 넓히고 받침을 줄여 실루엣을 안정시킨 안. 현재 비교에서는 이 방향을 권고.
- `03-compact-angular.png`: 교수의 B 비율·각진 느낌 유지 선택을 반영한 후속안. B의 비율을 유지하고 둥글기를 줄인 현재 권고안.
- 두 안 모두 built-in Imagegen 편집으로 생성. 투명 배경 보존. 입력은 `../moai-logo/png/moai-logo-brand-h512.png`.
- 헤더용 최종 결정 뒤 SVG 원본 정밀 조정과 작은 favicon 식별력을 별도 확인할 것. 생성 초안을 그대로 최종 벡터 로고로 취급하지 않음.

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
