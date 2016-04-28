import unittest
from anagram import Anagram


class TestCompare(unittest.TestCase):

    def setUp(self):
        pass

    # same string
    def test_ana_1(self):
        self.assertFalse(Anagram.is_anagram('aabb', 'aabb'))

    # trivia anagram
    def test_ana_2(self):
        self.assertTrue(Anagram.is_anagram('aabb', 'baba'))

    # different strings
    def test__ana_3(self):
        self.assertFalse(Anagram.is_anagram('aabb', 'bbba'))

    # different strings
    def test_ana_4(self):
        self.assertFalse(Anagram.is_anagram('abcd', 'edca'))

    # ignore escape chars
    def test_ana_5(self):
        self.assertTrue(Anagram.is_anagram('aa bb', 'aabb'))

    # ignore escape chars, swap order
    def test_ana_6(self):
        self.assertTrue(Anagram.is_anagram('aabb', 'ba ba'))

    # escape chars in both strings
    def test__ana_7(self):
        self.assertTrue(Anagram.is_anagram('aa bb', 'bb aa'))

if __name__ == '__main__':
    unittest.main()
