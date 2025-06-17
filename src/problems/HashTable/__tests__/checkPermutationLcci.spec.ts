import { describe, expect, it } from 'vitest';
import { CheckPermutation } from '@/problems/HashTable/checkPermutationLcci';

describe('checkPermutation', () => {
  it('should return true for empty strings', () => {
    expect(CheckPermutation('', '')).toBe(true);
  });

  it('should return false if lengths differ', () => {
    expect(CheckPermutation('abc', 'abcd')).toBe(false);
  });

  it('should return true for exact same strings', () => {
    expect(CheckPermutation('abc', 'abc')).toBe(true);
  });

  it('should return true for valid permutations', () => {
    expect(CheckPermutation('abc', 'cba')).toBe(true);
    expect(CheckPermutation('aabbcc', 'ccbbaa')).toBe(true);
  });

  it('should return false for invalid permutations', () => {
    expect(CheckPermutation('abc', 'abd')).toBe(false);
    expect(CheckPermutation('aab', 'abb')).toBe(false);
  });

  it('should handle case sensitivity', () => {
    expect(CheckPermutation('abc', 'ABC')).toBe(false);
    expect(CheckPermutation('Aa', 'aA')).toBe(true);
  });
});
