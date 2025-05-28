import { describe, expect, it } from 'vitest';
import { letterCasePermutation } from '@/problems/Backtracking/letterCasePermutation';

describe('letterCasePermutation', () => {
  it('should return empty array for empty string', () => {
    expect(letterCasePermutation('')).toEqual(['']);
  });

  it('should handle string with only digits', () => {
    expect(letterCasePermutation('123')).toEqual(['123']);
  });

  it('should generate permutations for single letter', () => {
    expect(letterCasePermutation('a')).toEqual(['a', 'A']);
    expect(letterCasePermutation('B')).toEqual(['b', 'B']);
  });

  it('should generate permutations for two letters', () => {
    expect(letterCasePermutation('ab')).toEqual(['ab', 'aB', 'Ab', 'AB']);
    expect(letterCasePermutation('a1')).toEqual(['a1', 'A1']);
  });

  it('should handle mixed case and digits', () => {
    expect(letterCasePermutation('a1b2')).toEqual([
      'a1b2', 'a1B2', 'A1b2', 'A1B2'
    ]);
    expect(letterCasePermutation('3z4')).toEqual(['3z4', '3Z4']);
  });

  it('should generate all permutations for multiple letters', () => {
    const result = letterCasePermutation('abc');
    expect(result).toHaveLength(8);
    expect(result).toEqual(expect.arrayContaining([
      'abc', 'abC', 'aBc', 'aBC',
      'Abc', 'AbC', 'ABc', 'ABC'
    ]));
  });

  it('should handle uppercase letters', () => {
    expect(letterCasePermutation('A')).toEqual(['a', 'A']);
    expect(letterCasePermutation('AB')).toEqual(['ab', 'aB', 'Ab', 'AB']);
  });

  it('should handle complex cases', () => {
    const result = letterCasePermutation('1a2B');
    expect(result).toHaveLength(4);
    expect(result).toEqual(expect.arrayContaining([
      '1a2B', '1a2b', '1A2B', '1A2b'
    ]));
  });
});    