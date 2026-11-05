#!/usr/bin/env python3
"""Build an SVG using original photographic heads over the pastel backdrop.

No model is involved. Source photographs are embedded byte-for-byte from Git.
Only a pointwise colour transform is applied to the original heads; all faces
retain their original coordinates, proportions and expressions.
"""
from pathlib import Path
import base64
import hashlib
import subprocess
ROOT = Path(__file__).resolve().parents[1]
PHOTO = 'assets/img/lab/group-2026.jpg'
def source(rev):
    return subprocess.check_output(['git','show',f'{rev}:{PHOTO}'],cwd=ROOT)
original = source('64886cb')
assert hashlib.sha256(original).hexdigest() == 'ca1fbfcccfe939759c817dc19410c37eaec46b820fbfadb91fd4953b9d91ea1a'
backdrop = source('039f6dd')
# Bounds include hair, glasses and chin. Feathering is outside facial features.
# Trace the actual hair/ear/chin boundary rather than including background.
heads = [
 [(145,253),(148,237),(166,226),(191,226),(211,237),(219,253),(218,276),(211,295),(194,312),(174,315),(154,303),(143,279)],
 [(397,313),(401,293),(415,281),(437,282),(451,293),(459,312),(465,339),(457,363),(441,378),(421,377),(403,361),(398,340)],
 [(584,257),(589,241),(607,230),(632,229),(653,241),(663,259),(658,286),(650,307),(632,323),(613,322),(594,310),(586,288)],
 [(797,268),(801,251),(820,243),(841,245),(856,259),(862,279),(860,303),(851,322),(834,337),(818,333),(803,316),(796,294)],
 [(989,261),(995,242),(1014,234),(1041,236),(1059,249),(1066,268),(1065,294),(1057,315),(1038,333),(1019,334),(1000,319),(990,294)],
 [(1148,266),(1155,245),(1177,232),(1201,234),(1220,248),(1228,269),(1228,293),(1218,317),(1200,334),(1180,335),(1158,318),(1149,292)],
 [(1300,245),(1307,227),(1327,217),(1352,219),(1374,232),(1384,255),(1380,279),(1370,302),(1352,321),(1333,321),(1314,306),(1302,280)],
 [(1509,186),(1517,166),(1540,155),(1565,160),(1585,178),(1595,203),(1594,226),(1583,249),(1564,265),(1544,261),(1526,247),(1513,223)]
]
ellipses = ''.join('<polygon points="'+' '.join(f'{x},{y}' for x,y in pts)+'"/>' for pts in heads)
def uri(data): return 'data:image/jpeg;base64,'+base64.b64encode(data).decode()
svg=f'''<svg xmlns="http://www.w3.org/2000/svg" width="1780" height="933" viewBox="0 0 1780 933">
<title>MOAI Lab: original photographic faces with a pastel backdrop</title>
<defs>
<filter id="soft" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="1.8"/></filter>
<mask id="heads" maskUnits="userSpaceOnUse" x="0" y="0" width="1780" height="933"><g fill="white" filter="url(#soft)">{ellipses}</g></mask>
<filter id="tone" color-interpolation-filters="sRGB">
<feColorMatrix type="saturate" values="0.90"/>
<feComponentTransfer><feFuncR type="gamma" amplitude="0.92" exponent="0.65" offset="0.08"/><feFuncG type="gamma" amplitude="0.92" exponent="0.65" offset="0.06"/><feFuncB type="gamma" amplitude="0.92" exponent="0.65" offset="0.04"/></feComponentTransfer>
</filter>
</defs>
<image href="{uri(backdrop)}" width="1780" height="933" preserveAspectRatio="none"/>
<g mask="url(#heads)"><image href="{uri(original)}" width="1780" height="933" filter="url(#tone)"/></g>
</svg>'''
(ROOT/'assets/img/lab/group-2026-composite.svg').write_text(svg)
print('Embedded original bytes verified; no face geometry transformation.')
