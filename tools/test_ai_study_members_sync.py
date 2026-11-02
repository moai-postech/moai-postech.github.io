"""Check one-row-per-person conversion and invalid roster edits using invented data."""
import unittest
from ai_study_members_sync import convert, public_stats


class MembersConversion(unittest.TestCase):
    def setUp(self):
        self.header = ['기수', '학번', '학과', '이름', '연락처',
                       '1기 (Fall 2025)', '2기 (Spring 2026)']
        self.person = [1, '24', '무은재', 'Example Student', 'example', True, True]

    def test_members_sort_by_cohort_year_department_then_name(self):
        rows = [self.header,
                [1, '24', '컴공', '나', 'b', True, False],
                [1, '24', '물리', '다', 'c', True, False],
                [1, '24', '산경', '라', 'd', True, False],
                [1, '23', '컴공', '마', 'e', True, False],
                [1, '24', '산경', '가', 'a', True, False]]
        names = [m['name'] for m in convert(rows)[0]['members']]
        self.assertEqual(names, ['마', '가', '라', '다', '나'])

    def test_old_sheet_with_role_column_reads_the_same(self):
        old = [self.header[:5] + ['역할'] + self.header[5:],
               self.person[:4] + ['example@postech.ac.kr', '2기 대표'] + self.person[5:]]
        self.assertEqual(convert(old), convert([self.header, self.person]))

    def test_cohorts_follow_sheet_order_and_departments_show_both_names(self):
        header = self.header
        later = [2, '25', 'IT융공', 'Later Student', 'later', False, True]
        cohorts = convert([header, self.person, later])
        self.assertEqual([c['number'] for c in cohorts], [1, 2])
        self.assertEqual(cohorts[1]['members'][0]['department'], 'IT융합')
        names = [d['name'] for d in public_stats(cohorts)['departments']]
        self.assertEqual(sorted(names), ['IT융합(CITE)', '무은재(Freshmen)'])

    def test_legacy_and_full_list_have_identical_members(self):
        legacy = [
            ['2026 Spring (2기)'],
            ['1', '1', '대표', 'Example Student', '무은재', '24', 'example@postech.ac.kr'],
            ['2025 Fall (1기)'],
            ['1', '1', '', 'Example Student', '무은재', '24', 'example@postech.ac.kr']]
        self.assertEqual(convert(legacy), convert([self.header, self.person]))

    def test_formatted_checkbox_values_and_future_empty_rows(self):
        person = self.person[:5] + ['TRUE', 'TRUE']
        self.assertEqual(convert([self.header, self.person]),
                         convert([self.header, person, ['', '', '', '', '', 'FALSE', 'FALSE']]))

    def test_term_mix_counts_participants_and_new_joiners(self):
        header = self.header + ['3기 (Summer 2026)']
        continuing = self.person + [True]
        new = [2, '25', '컴공', 'New Student', 'new', False, True, False]
        returning_after_break = [1, '23', '산경', 'Returning Student', 'back', True, False, True]
        terms = public_stats(convert([header, continuing, new, returning_after_break]))['terms']
        self.assertEqual([(t['number'], t['count'], t['new'], t['existing']) for t in terms],
                         [(3, 2, 0, 2), (2, 2, 1, 1), (1, 2, 2, 0)])
        self.assertTrue(all(t['count'] == t['new'] + t['existing'] for t in terms))

    def test_duplicate_email_is_rejected(self):
        other = self.person.copy(); other[3] = 'Another Student'
        with self.assertRaisesRegex(ValueError, '중복'):
            convert([self.header, self.person, other])

    def test_joining_cohort_must_match_first_participation(self):
        person = self.person.copy(); person[0] = 2
        with self.assertRaisesRegex(ValueError, '가입 기수'):
            convert([self.header, person])

    def test_invalid_checkbox_is_rejected(self):
        person = self.person.copy(); person[-1] = 'maybe'
        with self.assertRaisesRegex(ValueError, '체크박스'):
            convert([self.header, person])

    def test_duplicate_term_header_is_rejected(self):
        header = self.header.copy(); header[-1] = header[-2]
        with self.assertRaisesRegex(ValueError, '중복'):
            convert([header, self.person])


if __name__ == '__main__':
    unittest.main()
