# MOAI Lab 로고 에셋

## 색상

| 이름 | HEX | RGB | 비고 |
|---|---|---|---|
| brand | `#A61955` | 166, 25, 85 | Pantone 215C / CMYK C40 M100 Y50 K0 |
| stone | `#4A4541` | 74, 69, 65 | 진회색(돌 색) |
| black | `#000000` | 0, 0, 0 | |

```css
:root {
  --moai-brand: #A61955;
  --moai-stone: #4A4541;
  --moai-black: #000000;
}
```

## 폴더 구성

- `svg/` — 웹에서 기본으로 사용할 벡터 로고 (투명 배경)
  - `moai-logo-brand.svg`, `moai-logo-stone.svg`, `moai-logo-black.svg`
- `png/` — 투명 배경 PNG, 높이 64 / 128 / 256 / 512 / 1024px
  - 파일명 규칙: `moai-logo-{color}-h{height}.png`
- `favicon/` — 파비콘 및 앱 아이콘 (brand 색상)
  - `favicon.ico` (16/32/48), `favicon.svg`, `apple-touch-icon.png` (180, 흰 배경), `icon-192.png`, `icon-512.png`

## 로고 비율

- 세로형 로고, 가로:세로 = 1122 : 2275 (약 1 : 2.03)
- `height`만 지정하고 `width`는 auto로 두세요.

## 사용 예시

```html
<!-- <head> -->
<link rel="icon" href="/favicon.ico" sizes="48x48">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">

<!-- 헤더 로고 -->
<a href="/"><img src="/moai-logo-brand.svg" alt="MOAI Lab" height="48"></a>
```

PWA manifest를 쓰는 경우:

```json
"icons": [
  { "src": "/icon-192.png", "sizes": "192x192", "type": "image/png" },
  { "src": "/icon-512.png", "sizes": "512x512", "type": "image/png" }
]
```

## 주의

- 파일은 모두 RGB(웹용)입니다. 인쇄물에는 SVG와 함께 Pantone 215C 또는 CMYK 값을 전달하세요.
- 로고의 비율 변경, 회전, 색상 임의 변경은 피해 주세요.
