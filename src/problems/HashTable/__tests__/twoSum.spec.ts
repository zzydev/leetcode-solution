import { describe, expect, it } from 'vitest';
import { twoSum } from '@/problems/HashTable/twoSum';

describe('twoSum', () => {
  it('should find indices for two numbers that add up to target', () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    expect(twoSum(nums, target)).toEqual([0, 1]);
  });

  it('should handle negative numbers', () => {
    const nums = [-3, 4, 3, 90];
    const target = 0;
    expect(twoSum(nums, target)).toEqual([0, 2]);
  });

  it('should handle duplicate numbers', () => {
    const nums = [3, 3];
    const target = 6;
    expect(twoSum(nums, target)).toEqual([0, 1]);
  });

  it('should handle target being zero', () => {
    const nums = [0, 4, 3, 0];
    const target = 0;
    expect(twoSum(nums, target)).toEqual([0, 3]);
  });

  it('should handle target being a negative number', () => {
    const nums = [1, -2, 3, -4];
    const target = -3;
    expect(twoSum(nums, target)).toEqual([0, 3]);
  });

  it('should handle target being a large number', () => {
    const nums = [1000000, 2000000, 3000000];
    const target = 5000000;
    expect(twoSum(nums, target)).toEqual([1, 2]);
  });

  it('should handle array with only two elements', () => {
    const nums = [5, 5];
    const target = 10;
    expect(twoSum(nums, target)).toEqual([0, 1]);
  });

  it('should handle unsorted array', () => {
    const nums = [3, 2, 4];
    const target = 6;
    expect(twoSum(nums, target)).toEqual([1, 2]);
  });

  it('should return indices in any order', () => {
    const nums = [10, 20, 30, 40];
    const target = 70;
    const result = twoSum(nums, target);
    expect(result).toEqual(expect.arrayContaining([2, 3]));
  });
});
