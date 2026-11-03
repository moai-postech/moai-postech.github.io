"""스터디 멤버 사진을 240×320(3:4)으로 맞추고, 머리 위 여백이 6% 미만이면 9%가 되게 축소(zoom out)해 위는 배경색, 옆은 가장자리를 늘려 채운다(교수 2026-11-03: 머리 위가 잘리지 않게).

사용: python3 tools/ai_study_photo_frame.py <입력 폴더> <출력 폴더>
사진은 공개 저장소 밖(academic-profile/_private/ai-study-photos/)에서 다룬다. Pillow 필요.
배경이 단색이 아니면(모서리 색이 크게 다르면) 손대지 않는다. 결과는 눈으로 한 번 본다."""
import sys
from pathlib import Path
from PIL import Image
import statistics as st
src, out = Path(sys.argv[1]), Path(sys.argv[2]); out.mkdir(exist_ok=True)
W, H, TARGET, MIN = 240, 320, 0.09, 0.06
def dist(a, b): return sum((x - y) ** 2 for x, y in zip(a, b)) ** .5
for f in sorted(src.glob('*.jpg')):
    im = Image.open(f).convert('RGB').resize((W, H)); px = im.load()
    corners = [px[x, y] for x in list(range(3, 11)) + list(range(W - 11, W - 3)) for y in range(3, 11)]  # 테두리 몇 픽셀은 뺀다
    bg = tuple(int(st.median(c[i] for c in corners)) for i in range(3))
    spread = sorted(dist(c, bg) for c in corners)[int(len(corners) * .9)]
    top = H
    for y in range(H):
        row = [px[x, y] for x in range(int(W * .2), int(W * .8))]
        if sum(dist(p, bg) > 45 for p in row) > len(row) * .08: top = y; break
    status = f'{f.stem}: headroom {top / H:.2f} spread {spread:.0f}'
    if top / H >= MIN or spread > 60:
        im.save(out / f.name, quality=92); print(status, '-> keep'); continue
    s = (H - TARGET * H) / (H - top)
    small = im.resize((round(W * s), round(H * s)), Image.LANCZOS)
    canvas = Image.new('RGB', (W, H), bg)
    ox, oy = (W - small.width) // 2, H - small.height
    # 옆은 사진 가장자리 열을 늘려 어깨가 끊기지 않게, 위는 배경색으로 채운다
    left = small.crop((0, 0, 1, small.height)).resize((ox, small.height))
    right = small.crop((small.width - 1, 0, small.width, small.height)).resize((W - ox - small.width, small.height))
    canvas.paste(left, (0, oy)); canvas.paste(right, (ox + small.width, oy)); canvas.paste(small, (ox, oy))
    canvas.save(out / f.name, quality=92); print(status, f'-> zoom {s:.2f}')
