import { describe, expect, it } from 'vitest';
import { letterCombinations } from '@/problems/Backtracking/letterCombinationsOfAPhoneNumber';

describe('letterCombinations', () => {
  it('should return empty array when input is empty', () => {
    expect(letterCombinations('')).toEqual([]);
  });

  it('should generate correct combinations for single digit', () => {
    expect(letterCombinations('2')).toEqual(['a', 'b', 'c']);
    expect(letterCombinations('7')).toEqual(['p', 'q', 'r', 's']);
  });

  it('should generate correct combinations for two digits', () => {
    expect(letterCombinations('23')).toEqual([
      'ad',
      'ae',
      'af',
      'bd',
      'be',
      'bf',
      'cd',
      'ce',
      'cf',
    ]);
  });

  it('should generate correct combinations for three digits', () => {
    const result = letterCombinations('234');
    expect(result).toHaveLength(27);
    expect(result).toContain('adg');
    expect(result).toContain('aeh');
    expect(result).toContain('afi');
    expect(result).toContain('bdg');
    expect(result).toContain('bfi');
  });

  it('should handle digits with different letter counts', () => {
    expect(letterCombinations('789')).toEqual([
      'ptw',
      'ptx',
      'pty',
      'ptz',
      'puw',
      'pux',
      'puy',
      'puz',
      'pvw',
      'pvx',
      'pvy',
      'pvz',
      'qtw',
      'qtx',
      'qty',
      'qtz',
      'quw',
      'qux',
      'quy',
      'quz',
      'qvw',
      'qvx',
      'qvy',
      'qvz',
      'rtw',
      'rtx',
      'rty',
      'rtz',
      'ruw',
      'rux',
      'ruy',
      'ruz',
      'rvw',
      'rvx',
      'rvy',
      'rvz',
      'stw',
      'stx',
      'sty',
      'stz',
      'suw',
      'sux',
      'suy',
      'suz',
      'svw',
      'svx',
      'svy',
      'svz',
    ]);
  });
});
