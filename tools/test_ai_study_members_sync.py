"""Check one-row-per-person conversion and invalid roster edits using invented data."""
import unittest
from ai_study_members_sync import convert


class MembersConversion(unittest.TestCase):
    def setUp(self):
        self.header = ['기수', '학번', '학과', '이름', '연락처', '역할',
                       '1기 (Fall 2025)', '2기 (Spring 2026)']
        self.person = [1, '24', '무은재', 'Example Student', 'example@postech.ac.kr',
                       '2기 대표', True, True]

    def test_legacy_and_full_list_have_identical_members(self):
        legacy = [
            ['2026 Spring (2기)'],
            ['1', '1', '대표', 'Example Student', '무은재', '24', 'example@postech.ac.kr'],
            ['2025 Fall (1기)'],
            ['1', '1', '', 'Example Student', '무은재', '24', 'example@postech.ac.kr']]
        self.assertEqual(convert(legacy), convert([self.header, self.person]))

    def test_formatted_checkbox_values_and_future_empty_rows(self):
        person = self.person[:6] + ['TRUE', 'TRUE']
        self.assertEqual(convert([self.header, self.person]),
                         convert([self.header, person, ['', '', '', '', '', '', 'FALSE', 'FALSE']]))

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
