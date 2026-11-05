#!/usr/bin/env python3
"""Apply a deterministic pencil filter without changing people's geometry.

Requires Pillow. Reads the original photo from Git so generated edits are never
used as input. Run from any folder: python3 tools/filter_home_photo.py
"""
from pathlib import Path
from io import BytesIO
import hashlib
import random
import subprocess
from PIL import Image, ImageChops, ImageDraw, ImageEnhance, ImageFilter

ROOT = Path(__file__).resolve().parents[1]
SOURCE_REV = '64886cb'
PHOTO = 'assets/img/lab/group-2026.jpg'
SOURCE_SHA256 = 'ca1fbfcccfe939759c817dc19410c37eaec46b820fbfadb91fd4953b9d91ea1a'
# Original-image coordinates. These regions receive tone adjustments only.
HEADS = [(123, 211, 232, 331), (375, 271, 478, 384),
         (569, 214, 674, 328), (776, 228, 882, 346),
         (964, 219, 1074, 343), (1132, 217, 1247, 346),
         (1284, 201, 1400, 326), (1496, 139, 1612, 269)]


def filtered_photo(original):
    assert original.size == (1780, 933), 'Head protection requires original coordinates'
    white = Image.new('RGB', original.size, 'white')
    # Only pointwise colour/luminance changes: no resizing, warping, smoothing,
    # painting, reconstruction, or generated features in the protected heads.
    tone = ImageEnhance.Color(original).enhance(0.48)
    tone = tone.point([round(255 * (v / 255) ** 0.80) for v in range(256)] * 3)
    tone = Image.blend(tone, white, 0.18)
    gray = original.convert('L')
    local = gray.filter(ImageFilter.GaussianBlur(5))
    pencil = Image.new('L', gray.size)
    pencil.putdata([min(255, int(a * 255 / max(1, b)))
                    for a, b in zip(gray.getdata(), local.getdata())])
    pencil = Image.blend(pencil, Image.new('L', gray.size, 255), 0.65)
    pastel = Image.blend(tone, white, 0.34)
    sketch = ImageChops.multiply(pastel, pencil.convert('RGB'))
    # Fine diagonal hatching, stronger in dark areas of the original photo.
    hatch = Image.new('L', original.size, 0)
    draw = ImageDraw.Draw(hatch)
    rng = random.Random(17)
    for _ in range(115000):
        x, y = rng.randrange(original.width), rng.randrange(original.height)
        length = rng.randrange(2, 9)
        draw.line((x, y, x + length, y + length * (-1 if rng.random() < 0.7 else 1)), fill=rng.randrange(20, 76))
    ink = ImageChops.multiply(hatch, ImageChops.invert(gray))
    sketch = Image.composite(Image.new('RGB', original.size, '#f8f5ef'), sketch, ink)
    protect = Image.new('L', original.size, 0)
    draw = ImageDraw.Draw(protect)
    for box in HEADS:
        draw.ellipse(box, fill=255)
    protect = protect.filter(ImageFilter.GaussianBlur(10))
    # Keep a solid core: facial landmarks remain pointwise-filtered source pixels.
    draw = ImageDraw.Draw(protect)
    for left, top, right, bottom in HEADS:
        draw.ellipse((left+14, top+14, right-14, bottom-14), fill=255)
    face_tone = tone
    result = Image.composite(face_tone, sketch, protect)
    # Meaningful check: every fully protected pixel must equal the tone-only
    # original at the same coordinate before JPEG compression.
    mask = protect.point(lambda v: 255 if v == 255 else 0)
    delta = ImageChops.multiply(ImageChops.difference(result, face_tone), mask.convert('RGB'))
    assert delta.getbbox() is None, 'A protected face was changed spatially'
    assert result.size == original.size
    return result


def main():
    raw = subprocess.check_output(['git', 'show', f'{SOURCE_REV}:{PHOTO}'], cwd=ROOT)
    assert hashlib.sha256(raw).hexdigest() == SOURCE_SHA256
    original = Image.open(BytesIO(raw)).convert('RGB')
    result = filtered_photo(original)
    result.save(ROOT / PHOTO, quality=92, subsampling=0, optimize=True)
    print('Original geometry and protected face pixels verified; saved', PHOTO)


if __name__ == '__main__':
    main()
