#!/usr/bin/env python3
"""별도 study-members 파일의 Apps Script 셀 읽기 결과(JSON)를 Members 데이터로 변환한다.

시트 읽기: python3 ~/Documents/Agents/tools/gsheet/gsheet.py read 1qHd6g8AOqEGfsj5ourBnb6bUGeQMP5haWIxsCi_WAKw 'members!A1:G100' > /tmp/study-members.json
변환: python3 tools/ai_study_members_sync.py /tmp/study-members.json
Node.js 필요. 비밀번호는 대화형 입력 또는 AI_STUDY_MEMBERS_PASSWORD 환경변수로 받는다.
공개 통계와 AES-GCM 암호문만 저장한다. 원문·비밀번호는 저장소에 쓰지 않는다.
명단 수정은 시트에서 먼저 한다. 이메일은 확인된 POSTECH 주소만 허용한다.
"""
import argparse
from collections import Counter
import getpass
import os
import subprocess
import json
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parent.parent


def convert(rows):
    people, terms, current = {}, {}, None
    for row in rows:
        row = [str(value).strip() for value in row]
        match = re.fullmatch(r"(20\d\d) (Spring|Summer|Fall|Winter) \((\d+)기\)", row[0]) if row else None
        if match:
            current = int(match[3])
            terms[current] = f"{match[2]} {match[1]}"
        elif len(row) >= 7 and row[0].isdigit():
            if current is None:
                raise ValueError("학기 머리 없는 멤버 행")
            _, cohort, role, name, department, entry_year, email = row[:7]
            if not re.fullmatch(r"[^\s@]+@postech\.ac\.kr", email):
                raise ValueError(f"{name}: POSTECH 이메일 확인 필요")
            key = (name, entry_year)
            person = people.setdefault(key, dict(name=name, department=department,
                entry_year=entry_year, email=email, cohort=int(cohort), participation=[]))
            if person['email'] != email or person['cohort'] != int(cohort):
                raise ValueError(f"{name}: 기수 또는 이메일 불일치")
            if current in person['participation']:
                raise ValueError(f"{name}: 같은 학기 중복")
            person['participation'].append(current)
    if not people:
        raise ValueError("빈 명단")
    for person in people.values():
        person['participation'].sort()
        if person['cohort'] != min(person['participation']):
            raise ValueError(f"{person['name']}: 첫 참여와 가입 기수 불일치")
    return [dict(number=n, term=terms[n], members=[p for p in people.values() if p['cohort'] == n])
            for n in sorted(terms, reverse=True)]


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('input', type=Path)
    args = parser.parse_args()
    source = json.loads(args.input.read_text())
    if source.get('ok') is not True:
        raise ValueError('시트 읽기 실패')
    cohorts = convert(source['values'])
    password = os.environ.get('AI_STUDY_MEMBERS_PASSWORD') or getpass.getpass('Members 비밀번호: ')
    if not password:
        raise ValueError('빈 비밀번호는 허용하지 않음')
    people = [p for c in cohorts for p in c['members']]
    latest = max(c['number'] for c in cohorts)
    departments = {'산경': 'IME', '컴공': 'CSE', '무은재': 'Mueunjae', '전전': 'EE',
                   '물리': 'Physics', '수학': 'Mathematics', 'IT융합': 'CITE', 'IT융공': 'CITE'}
    counts = Counter(departments.get(p['department'], p['department']) for p in people)
    stats = dict(total=len(people), current=sum(latest in p['participation'] for p in people),
                 cohorts=len(cohorts), returning=sum(len(p['participation']) > 1 for p in people),
                 departments=[dict(name=n, count=c) for n, c in counts.most_common()],
                 terms=[dict(number=c['number'], term=c['term'],
                             count=sum(c['number'] in p['participation'] for p in people)) for c in cohorts])
    private_path = ROOT / '_data' / 'ai_study_members_private.yml'
    previous = json.loads(private_path.read_text()) if private_path.exists() else None
    # Node's standard crypto module keeps Python free of extra dependencies.
    script = r"""
const fs = require('fs'), crypto = require('crypto');
const {password, cohorts, previous} = JSON.parse(fs.readFileSync(0, 'utf8'));
const plain = Buffer.from(JSON.stringify(cohorts));
const derive = (salt, rounds) => crypto.pbkdf2Sync(password, salt, rounds, 32, 'sha256');
let salt = crypto.randomBytes(16), iterations = 210000;
if (previous) {
  try {
    const bytes = Buffer.from(previous.ciphertext, 'base64');
    const d = crypto.createDecipheriv('aes-256-gcm', derive(Buffer.from(previous.salt, 'base64'), previous.iterations), Buffer.from(previous.iv, 'base64'));
    d.setAuthTag(bytes.subarray(-16));
    const old = Buffer.concat([d.update(bytes.subarray(0, -16)), d.final()]);
    if (old.equals(plain)) { process.stdout.write(JSON.stringify(previous)); process.exit(0); }
    // Keep remembered browser keys valid when the roster changes with the same password.
    salt = Buffer.from(previous.salt, 'base64'); iterations = previous.iterations;
  } catch (_) { /* a changed password creates a fresh encrypted payload */ }
}
const iv = crypto.randomBytes(12);
const cipher = crypto.createCipheriv('aes-256-gcm', derive(salt, iterations), iv);
const ciphertext = Buffer.concat([cipher.update(plain), cipher.final(), cipher.getAuthTag()]);
process.stdout.write(JSON.stringify({version:1, iterations, salt:salt.toString('base64'), iv:iv.toString('base64'), ciphertext:ciphertext.toString('base64')}));
"""
    result = subprocess.run(['node', '-e', script],
        input=json.dumps(dict(password=password, cohorts=cohorts, previous=previous), ensure_ascii=False),
        capture_output=True, text=True, check=True)
    encrypted = json.loads(result.stdout)
    private_path.write_text(json.dumps(encrypted, ensure_ascii=False, indent=2) + '\n')
    (ROOT / '_data' / 'ai_study_members.yml').write_text(json.dumps(stats, ensure_ascii=False, indent=2) + '\n')
    print(f"Members: {sum(len(c['members']) for c in cohorts)}명, {len(cohorts)}개 기수")


if __name__ == '__main__':
    main()
