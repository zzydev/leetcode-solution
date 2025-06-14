import { describe, expect, it } from 'vitest';
import { isAnagram } from '@/problems/HashTable/validAnagram';

describe('isAnagram', () => {
  it('should return true for valid anagrams', () => {
    expect(isAnagram('anagram', 'nagaram')).toBe(true);
  });

  it('should return false for different lengths', () => {
    expect(isAnagram('rat', 'car')).toBe(false);
  });

  it('should return false for different characters', () => {
    expect(isAnagram('hello', 'world')).toBe(false);
  });

  it('should handle special characters', () => {
    expect(isAnagram('aabbcc', 'abcabc')).toBe(true);
    expect(isAnagram('aabbcc', 'abca bc')).toBe(false);
  });

  it('should handle different permutations', () => {
    expect(isAnagram('abc', 'cba')).toBe(true);
    expect(isAnagram('abc', 'acb')).toBe(true);
    expect(isAnagram('abc', 'bac')).toBe(true);
    expect(isAnagram('abc', 'bca')).toBe(true);
    expect(isAnagram('abc', 'cab')).toBe(true);
    expect(isAnagram('abc', 'cba')).toBe(true);
  });

  it('should handle repeated characters', () => {
    expect(isAnagram('aabbcc', 'ccbbaa')).toBe(true);
    expect(isAnagram('aabbcc', 'aabbc')).toBe(false);
  });

  it('should handle long strings', () => {
    const s = 'abcdefghijklmnopqrstuvwxyz';
    const t = 'zyxwvutsrqponmlkjihgfedcba';
    expect(isAnagram(s, t)).toBe(true);
  });

  it('should handle different character frequencies', () => {
    expect(isAnagram('aabbcc', 'ababcc')).toBe(true);
    expect(isAnagram('aabbcc', 'aabccc')).toBe(false);
  });
});
