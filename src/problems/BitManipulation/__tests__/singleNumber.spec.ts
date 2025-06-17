import { describe, expect, it } from 'vitest';
import { singleNumber } from '@/problems/BitManipulation/singleNumber';

describe('singleNumber', () => {
  it('should handle array with single element', () => {
    const nums = [5];
    expect(singleNumber(nums)).toBe(5);
  });

  it('should find single number in array with one pair', () => {
    const nums = [2, 2, 1];
    expect(singleNumber(nums)).toBe(1);
  });

  it('should find single number in array with multiple pairs', () => {
    const nums = [4, 1, 2, 1, 2];
    expect(singleNumber(nums)).toBe(4);
  });

  it('should handle negative numbers', () => {
    const nums = [-1, -1, -2];
    expect(singleNumber(nums)).toBe(-2);
  });

  it('should handle zero', () => {
    const nums = [0, 1, 1];
    expect(singleNumber(nums)).toBe(0);
  });

  it('should handle array with large numbers', () => {
    const nums = [1000000, 1000000, 2000000];
    expect(singleNumber(nums)).toBe(2000000);
  });

  it('should handle array with multiple pairs and single number', () => {
    const nums = [7, 3, 5, 4, 5, 3, 4];
    expect(singleNumber(nums)).toBe(7);
  });
});
