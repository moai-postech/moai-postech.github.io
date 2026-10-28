#!/usr/bin/env python3
"""Apps Script member 셀 읽기 결과(JSON)를 Members 데이터로 변환한다.

시트 읽기: python3 ~/Documents/Agents/tools/gsheet/gsheet.py read SHEET_ID 'member!A1:G100' > /tmp/study-members.json
변환: python3 tools/ai_study_members_sync.py /tmp/study-members.json
명단 수정은 시트에서 먼저 한다. 이메일은 확인된 POSTECH 주소만 허용한다.
"""
import argparse
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
    quote = lambda value: json.dumps(value, ensure_ascii=False)
    lines = ['# member 시트에서 생성. tools/ai_study_members_sync.py 사용.',
             '# 가입 기수 내림차순, 같은 기수는 시트 순서. 참여 기수는 학기별 명단의 합집합.',
             'cohorts:']
    for cohort in cohorts:
        lines += [f"  - number: {cohort['number']}", f"    term: {quote(cohort['term'])}", '    members:']
        for person in cohort['members']:
            for index, key in enumerate(('name', 'department', 'entry_year', 'email')):
                lines.append(('      - ' if index == 0 else '        ') + f'{key}: {quote(person[key])}')
            lines.append(f"        participation: {person['participation']}")
    (ROOT / '_data' / 'ai_study_members.yml').write_text('\n'.join(lines) + '\n')
    print(f"Members: {sum(len(c['members']) for c in cohorts)}명, {len(cohorts)}개 기수")


if __name__ == '__main__':
    main()
