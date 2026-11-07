#!/usr/bin/env python3
"""Lighten shadows and reduce vivid greens without moving or generating pixels."""
from pathlib import Path
import hashlib
from PIL import Image, ImageFilter

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / 'assets/img/lab/group-2026.jpg'
OUTPUT = ROOT / 'assets/img/lab/group-2026-natural.jpg'
SOURCE_SHA256 = 'ca1fbfcccfe939759c817dc19410c37eaec46b820fbfadb91fd4953b9d91ea1a'


def tone(r, g, b):
    luminance = .2126 * r + .7152 * g + .0722 * b
    green_weight = min(1., max(0., (g - max(r, b)) / .22))
    saturation_reduction = .12 * green_weight
    lift = .045 * (1. - luminance) ** 2
    return tuple(min(1., max(0., c + (luminance - c) * saturation_reduction + lift))
                 for c in (r, g, b))


def main():
    assert hashlib.sha256(SOURCE.read_bytes()).hexdigest() == SOURCE_SHA256
    original = Image.open(SOURCE).convert('RGB')
    result = original.filter(ImageFilter.Color3DLUT.generate(33, tone))
    assert original.size == result.size == (1780, 933)
    result.save(OUTPUT, quality=96, subsampling=0, optimize=True)
    print('Saved', OUTPUT.relative_to(ROOT), 'with unchanged dimensions and spatial coordinates.')


if __name__ == '__main__':
    main()
