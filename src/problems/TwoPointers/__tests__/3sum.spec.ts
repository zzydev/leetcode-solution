import { describe, expect, it } from 'vitest';
import { threeSum } from '@/problems/TwoPointers/3sum';

describe('threeSum', () => {
  it('should return empty array for empty input', () => {
    const nums: number[] = [];
    expect(threeSum(nums)).toEqual([]);
  });

  it('should return empty array for less than three elements', () => {
    const nums = [1, 2];
    expect(threeSum(nums)).toEqual([]);
  });

  it('should handle array with all zeros', () => {
    const nums = [0, 0, 0];
    expect(threeSum(nums)).toEqual([[0, 0, 0]]);
  });

  it('should handle array with multiple zeros', () => {
    const nums = [0, 0, 0, 0];
    expect(threeSum(nums)).toEqual([[0, 0, 0]]);
  });

  it('should find triplets with negative numbers', () => {
    const nums = [-1, 0, 1, 2, -1, -4];
    expect(threeSum(nums)).toEqual([
      [-1, -1, 2],
      [-1, 0, 1],
    ]);
  });

  it('should handle array with duplicates that do not form valid triplets', () => {
    const nums = [1, 1, -2];
    expect(threeSum(nums)).toEqual([[-2, 1, 1]]);
  });

  it('should handle array with large numbers', () => {
    const nums = [1000000, -1000000, 0];
    expect(threeSum(nums)).toEqual([[-1000000, 0, 1000000]]);
  });

  it('should handle array with multiple valid triplets', () => {
    const nums = [-2, 0, 1, 1, 2];
    expect(threeSum(nums)).toEqual([
      [-2, 0, 2],
      [-2, 1, 1],
    ]);
  });

  it('should handle array with no valid triplets', () => {
    const nums = [1, 2, 3];
    expect(threeSum(nums)).toEqual([]);
  });

  it('should handle array with negative numbers and no valid triplets', () => {
    const nums = [-1, -2, -3];
    expect(threeSum(nums)).toEqual([]);
  });

  it('should handle array with both positive and negative numbers but no valid triplets', () => {
    const nums = [1, -1, 2, -2];
    expect(threeSum(nums)).toEqual([]);
  });

  it('should handle array with zeros and other numbers but no valid triplets', () => {
    const nums = [0, 1, 2];
    expect(threeSum(nums)).toEqual([]);
  });

  it('should handle array with complex combinations', () => {
    const nums = [-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6];
    expect(threeSum(nums)).toEqual([
      [-4, -2, 6],
      [-4, 0, 4],
      [-4, 1, 3],
      [-4, 2, 2],
      [-2, -2, 4],
      [-2, 0, 2],
    ]);
  });

  it('should handle array with multiple duplicates', () => {
    const nums = [-1, -1, -1, 2, 2, 2];
    expect(threeSum(nums)).toEqual([[-1, -1, 2]]);
  });
});
