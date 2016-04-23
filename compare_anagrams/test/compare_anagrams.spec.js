'use strict';
const glob = require('glob');
const path = require('path');
glob.sync('./!(test|node_modules)/*.js').forEach(function(f) {
  const compare = require(`../${f}`).compare;
  runTests(compare);
});

function runTests(compare) {
    describe('compare anagrams', () => {

    it('aabb is not an anagram of aabb', () => expect(compare('aabb', 'aabb')).toBe(false));

    it('aabb is an anagram of baba', () => expect(compare('aabb', 'baba')).toBe(true));

    it('aabb is not an anagram of bbba', () => expect(compare('aabb', 'bbba')).toBe(false));

    it('abcd is not an anagram of edca', () => expect(compare('abcd', 'edca')).toBe(false));

    it('spaces are ignored on left side', () => expect(compare('aa bb', 'baba')).toBe(true));

    it('spaces are ignored on right side', () => expect(compare('aabb', 'ba ba')).toBe(true));

    it('spaces are ignored both sides', () => expect(compare('aa bb', 'ba ba')).toBe(true));

  });
};

