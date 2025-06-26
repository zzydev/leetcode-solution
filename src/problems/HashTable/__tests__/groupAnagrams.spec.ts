import { describe, expect, it } from 'vitest';
import { groupAnagrams } from '@/problems/HashTable/groupAnagrams';

describe('groupAnagrams', () => {
  it('should handle empty input', () => {
    expect(groupAnagrams([])).toEqual([]);
  });

  it('should group single word correctly', () => {
    expect(groupAnagrams(['hello'])).toEqual([['hello']]);
  });

  it('should group anagrams together', () => {
    const input = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
    const result = groupAnagrams(input);
    const expectedGroups = [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']];
    expect(result.length).toBe(expectedGroups.length);
    for (const group of result) {
      const sortedGroup = group.sort();
      const found = expectedGroups.some((g) => {
        const sortedExpected = g.sort();
        return (
          sortedExpected.length === sortedGroup.length &&
          sortedExpected.every((v, i) => v === sortedGroup[i])
        );
      });
      expect(found).toBe(true);
    }
  });

  it('should not group different case as same anagram', () => {
    const input = ['Eat', 'eat', 'EAT'];
    const result = groupAnagrams(input);
    const expectedGroups = [['Eat'], ['eat'], ['EAT']];
    expect(result.length).toBe(expectedGroups.length);
    for (const group of result) {
      const found = expectedGroups.some((g) =>
        g.every((v, i) => v === group[i]),
      );
      expect(found).toBe(true);
    }
  });

  it('should handle strings with repeated characters', () => {
    const input = ['aabbcc', 'abcabc', 'aaabbb', 'ababab', 'ccbbaa'];
    const result = groupAnagrams(input);
    const expectedGroups = [
      ['aabbcc', 'abcabc', 'ccbbaa'],
      ['aaabbb', 'ababab'],
    ];
    expect(result.length).toBe(expectedGroups.length);
    for (const group of result) {
      const found = expectedGroups.some((g) =>
        g.every((v, i) => v === group[i]),
      );
      expect(found).toBe(true);
    }
  });

  it('should handle large input efficiently', () => {
    const input = Array.from({ length: 1000 }).fill('abc') as string[];
    const result = groupAnagrams(input);
    expect(result.length).toBe(1);
    expect(result[0].length).toBe(1000);
  });
});
