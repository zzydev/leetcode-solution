import { describe, expect, it } from 'vitest';
import { reverseStr } from '@/problems/String/reverseStringIi';

describe('reverseStr', () => {
  it('should handle k=1 (no reversal)', () => {
    const s = 'abcdefg';
    const k = 1;
    expect(reverseStr(s, k)).toBe('abcdefg');
  });

  it('should reverse first k characters when string length is exactly 2k', () => {
    const s = 'abcdef';
    const k = 3;
    expect(reverseStr(s, k)).toBe('cbadef');
  });

  it('should reverse first k characters and leave next k unchanged', () => {
    const s = 'abcdefg';
    const k = 2;
    expect(reverseStr(s, k)).toBe('bacdfeg');
  });

  it('should reverse first k characters and leave rest unchanged when length < 2k', () => {
    const s = 'abcde';
    const k = 3;
    expect(reverseStr(s, k)).toBe('cbade');
  });

  it('should reverse entire string when length < k', () => {
    const s = 'abc';
    const k = 5;
    expect(reverseStr(s, k)).toBe('cba');
  });

  it('should handle multiple segments', () => {
    const s = 'abcdefghij';
    const k = 3;
    expect(reverseStr(s, k)).toBe('cbadefihgj');
  });

  it('should handle k larger than string length', () => {
    const s = 'hello';
    const k = 10;
    expect(reverseStr(s, k)).toBe('olleh');
  });
});
