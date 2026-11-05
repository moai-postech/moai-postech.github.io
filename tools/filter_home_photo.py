#!/usr/bin/env python3
"""Apply a deterministic pencil filter without changing people's geometry.

Requires Pillow. Reads the original photo from Git so generated edits are never
used as input. Run from any folder: python3 tools/filter_home_photo.py
"""
from pathlib import Path
from io import BytesIO
import hashlib
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
    # Keep colour differences while moving midtones toward warm white paper.
    # A raised grey floor alone made foliage, skin and clothes look muddy.
    pigment = ImageEnhance.Color(original).enhance(0.85)
    paper = Image.new('RGB', original.size, '#fffdf8')
    light = pigment.point([round(255 * (v / 255) ** 0.62)
                           for v in range(256)] * 3)
    tone = Image.blend(light, paper, 0.42)
    gray = original.convert('L')

    def contours(radius, strength):
        local = gray.filter(ImageFilter.GaussianBlur(radius))
        pencil = Image.new('L', gray.size)
        pencil.putdata([min(255, round(a * 255 / max(1, b)))
                        for a, b in zip(gray.tobytes(), local.tobytes())])
        return Image.blend(Image.new('L', gray.size, 255), pencil, strength)

    # Lines follow actual details in the photo at two scales. The previous
    # random diagonal strokes obscured those details and looked like a mesh.
    pencil = ImageChops.multiply(contours(1.3, 0.10), contours(5, 0.07))
    sketch = ImageChops.multiply(tone, pencil.convert('RGB'))
    # Leave the people readable while letting the surrounding scene recede
    # into paper. These broad, feathered masks change colour only.
    people = Image.new('L', original.size, 0)
    people_draw = ImageDraw.Draw(people)
    silhouettes = [
        [(142,215),(225,216),(285,361),(266,565),(242,917),(82,927),(91,564),(78,367)],
        [(384,268),(467,268),(502,422),(482,596),(474,887),(318,891),(342,557),(350,410)],
        [(578,214),(666,214),(711,375),(687,541),(686,866),(530,867),(541,543),(522,372)],
        [(784,227),(878,227),(923,359),(905,561),(886,874),(730,877),(750,558),(742,354)],
        [(978,214),(1069,214),(1119,362),(1103,541),(1090,878),(939,878),(947,543),(936,356)],
        [(1141,213),(1238,213),(1292,350),(1282,551),(1280,879),(1110,879),(1121,538),(1104,343)],
        [(1292,198),(1396,198),(1450,327),(1457,534),(1460,882),(1291,889),(1295,528),(1273,332)],
        [(1501,137),(1610,137),(1661,266),(1660,508),(1695,929),(1457,925),(1457,517),(1422,306)],
    ]
    for outline in silhouettes:
        people_draw.polygon(outline, fill=255)
    people = people.filter(ImageFilter.GaussianBlur(18))
    backdrop = Image.blend(sketch, paper, 0.27)
    sketch = Image.composite(sketch, backdrop, people)
    protect = Image.new('L', original.size, 0)
    draw = ImageDraw.Draw(protect)
    for box in HEADS:
        draw.ellipse(box, fill=255)
    protect = protect.filter(ImageFilter.GaussianBlur(10))
    # Keep a solid core: facial landmarks remain pointwise-filtered source pixels.
    draw = ImageDraw.Draw(protect)
    for left, top, right, bottom in HEADS:
        draw.ellipse((left+14, top+14, right-14, bottom-14), fill=255)
    # Preserve enough contrast to read expressions and glasses in the pale
    # scene. This is also strictly a pointwise colour/luminance transform.
    face_light = pigment.point([round(255 * (v / 255) ** 0.70)
                                for v in range(256)] * 3)
    face_tone = Image.blend(face_light, paper, 0.29)
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
