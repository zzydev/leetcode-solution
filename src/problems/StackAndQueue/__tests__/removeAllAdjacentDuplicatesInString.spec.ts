import { describe, expect, it } from 'vitest';
import { removeDuplicates } from '@/problems/StackAndQueue/removeAllAdjacentDuplicatesInString';

describe('removeDuplicates', () => {
  it('should handle empty string', () => {
    expect(removeDuplicates('')).toBe('');
  });

  it('should return same string when no duplicates', () => {
    expect(removeDuplicates('abc')).toBe('abc');
  });

  it('should remove simple adjacent duplicates', () => {
    expect(removeDuplicates('aab')).toBe('b');
    expect(removeDuplicates('abbaca')).toBe('ca');
  });

  it('should handle all duplicates', () => {
    expect(removeDuplicates('aaaa')).toBe('');
    expect(removeDuplicates('aaa')).toBe('a');
  });

  it('should handle multiple duplicate pairs', () => {
    expect(removeDuplicates('aabccba')).toBe('a');
    expect(removeDuplicates('aabccbade')).toBe('ade');
  });

  it('should handle long strings', () => {
    const longStr = `${'a'.repeat(1000)}b${'a'.repeat(999)}`;
    expect(removeDuplicates(longStr)).toBe('ba');
  });

  it('should handle strings with mixed cases', () => {
    expect(removeDuplicates('aAaA')).toBe('aAaA');
  });

  it('should handle strings with special characters', () => {
    expect(removeDuplicates('!!##$$')).toBe('');
    expect(removeDuplicates('! !!')).toBe('! ');
  });

  it('should handle recursive duplicates', () => {
    expect(removeDuplicates('abbbaca')).toBe('abaca');
    expect(removeDuplicates('xyaabbbccdef')).toBe('xybdef');
  });

  it('should handle unicode characters', () => {
    expect(removeDuplicates('你好好好')).toBe('你好');
    expect(removeDuplicates('🎉🎉🎉')).toBe('🎉');
  });
});
