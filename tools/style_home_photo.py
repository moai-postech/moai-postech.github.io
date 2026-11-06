#!/usr/bin/env python3
"""Reproduce the approved soft group photo without generating faces.

Requires numpy, Pillow and opencv-python-headless in a machine-local environment.
Run from the repository root: python tools/style_home_photo.py
The source photograph is never overwritten. Every filter covers the full frame;
there is no face replacement, warping, resizing or generated content.
"""
from pathlib import Path
import hashlib
import cv2
import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / 'assets/img/lab/group-2026.jpg'
OUTPUT = ROOT / 'assets/img/lab/group-2026-soft.jpg'
SOURCE_SHA256 = 'ca1fbfcccfe939759c817dc19410c37eaec46b820fbfadb91fd4953b9d91ea1a'


def render(original):
    assert original.shape == (933, 1780, 3)
    bgr = cv2.cvtColor(original, cv2.COLOR_RGB2BGR)
    soft = cv2.edgePreservingFilter(bgr, flags=1, sigma_s=45, sigma_r=.15)
    soft = cv2.cvtColor(soft, cv2.COLOR_BGR2RGB).astype(np.float32) / 255
    luminance = np.sum(soft * np.array([.2126, .7152, .0722]), axis=2, keepdims=True)
    paper = np.array([.975, .978, .977])
    pigment = np.clip((luminance + (soft - luminance) * .70) ** .67 * .86 + paper * .14, 0, 1)
    gray = cv2.cvtColor(original, cv2.COLOR_RGB2GRAY).astype(np.float32) / 255
    fine = np.clip(gray / (cv2.GaussianBlur(gray, (0, 0), 1.4) + .006), 0, 1)
    broad = np.clip(gray / (cv2.GaussianBlur(gray, (0, 0), 5) + .008), 0, 1)
    contours = .50 * fine + .50 * broad
    result = np.clip(np.round(pigment * (.83 + .17 * contours[..., None]) * 255), 0, 255).astype('uint8')
    assert result.shape == original.shape
    return result


def main():
    assert hashlib.sha256(SOURCE.read_bytes()).hexdigest() == SOURCE_SHA256
    original = np.array(Image.open(SOURCE).convert('RGB'))
    result = render(original)
    Image.fromarray(result).save(OUTPUT, quality=95, subsampling=0, optimize=True)
    print(f'Original checksum and 1780×933 dimensions verified. Saved {OUTPUT.relative_to(ROOT)}')


if __name__ == '__main__':
    main()
