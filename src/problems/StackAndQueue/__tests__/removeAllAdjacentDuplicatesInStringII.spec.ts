import { describe, expect, it } from 'vitest';
import { removeDuplicates } from '@/problems/StackAndQueue/removeAllAdjacentDuplicatesInStringII';

describe('removeDuplicates', () => {
  it('should handle empty string', () => {
    expect(removeDuplicates('', 2)).toBe('');
  });

  it('should return same string when no k-length duplicates', () => {
    expect(removeDuplicates('abc', 2)).toBe('abc');
    expect(removeDuplicates('aabbcc', 3)).toBe('aabbcc');
  });

  it('should remove simple k-length duplicates', () => {
    expect(removeDuplicates('deeedbbcccbdaa', 3)).toBe('aa');
    expect(removeDuplicates('abcd', 2)).toBe('abcd');
  });

  it('should handle all duplicates being removed', () => {
    expect(removeDuplicates('aaaaa', 5)).toBe('');
    expect(removeDuplicates('aaa', 3)).toBe('');
  });

  it('should handle partial removal', () => {
    expect(removeDuplicates('aaabbb', 3)).toBe('');
    expect(removeDuplicates('aaabbba', 3)).toBe('a');
  });

  it('should handle recursive duplicates removal', () => {
    expect(removeDuplicates('deeedbbcccbdaa', 3)).toBe('aa');
    expect(removeDuplicates('pbbcggttciiippooaais', 2)).toBe('ps');
  });

  it('should handle mixed characters', () => {
    expect(
      removeDuplicates('yfttttfbbbbnnnnffbgffffgbbbbgssssgthyyyy', 4),
    ).toBe('ybth');
  });

  it('should handle unicode characters', () => {
    expect(removeDuplicates('你好好好', 3)).toBe('你');
    expect(removeDuplicates('🎉🎉🎉🎉', 2)).toBe('🎉🎉🎉🎉');
  });

  it('should handle large strings efficiently', () => {
    const str = `${'ab'.repeat(50000)}ccc${'de'.repeat(50000)}`;
    expect(removeDuplicates(str, 3)).toBe(
      'ab'.repeat(50000) + 'de'.repeat(50000),
    );
  });
});
