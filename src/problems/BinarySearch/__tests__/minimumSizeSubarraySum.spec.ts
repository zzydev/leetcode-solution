import { describe, expect, it } from 'vitest';
import { minSubArrayLen } from '@/problems/BinarySearch/minimumSizeSubarraySum';

describe('minSubArrayLen', () => {
  it('should return 0 for empty array', () => {
    const target = 1;
    const nums: number[] = [];
    expect(minSubArrayLen(target, nums)).toBe(0);
  });

  it('should return 0 when target is not achievable', () => {
    const target = 100;
    const nums = [1, 2, 3];
    expect(minSubArrayLen(target, nums)).toBe(0);
  });

  it('should handle single element array', () => {
    const target = 1;
    const nums = [1];
    expect(minSubArrayLen(target, nums)).toBe(1);
  });

  it('should handle single element array where target is not achievable', () => {
    const target = 2;
    const nums = [1];
    expect(minSubArrayLen(target, nums)).toBe(0);
  });

  it('should find subarray with sum equal to target', () => {
    const target = 7;
    const nums = [2, 3, 1, 2, 4, 3];
    expect(minSubArrayLen(target, nums)).toBe(2);
  });

  it('should find subarray with sum greater than target', () => {
    const target = 4;
    const nums = [1, 4, 4];
    expect(minSubArrayLen(target, nums)).toBe(1);
  });

  it('should handle subarray at the beginning', () => {
    const target = 6;
    const nums = [10, 5, 13, 4, 8, 4, 5, 11, 14, 9, 16, 10, 20, 8];
    expect(minSubArrayLen(target, nums)).toBe(1);
  });

  it('should handle subarray at the end', () => {
    const target = 6;
    const nums = [1, 1, 1, 1, 1, 1, 6];
    expect(minSubArrayLen(target, nums)).toBe(1);
  });

  it('should handle multiple valid subarrays', () => {
    const target = 7;
    const nums = [2, 3, 4, 2, 1, 3];
    expect(minSubArrayLen(target, nums)).toBe(2);
  });

  it('should handle all elements being the target', () => {
    const target = 1;
    const nums = [1, 1, 1, 1];
    expect(minSubArrayLen(target, nums)).toBe(1);
  });

  it('should handle case where entire array is the minimal subarray', () => {
    const target = 15;
    const nums = [1, 2, 3, 4, 5];
    expect(minSubArrayLen(target, nums)).toBe(5);
  });

  it('should handle case where no subarray exists', () => {
    const target = 11;
    const nums = [1, 1, 1, 1, 1, 1, 1, 1];
    expect(minSubArrayLen(target, nums)).toBe(0);
  });

  it('should handle large numbers', () => {
    const target = 1000;
    const nums = [100, 200, 300, 400, 500];
    expect(minSubArrayLen(target, nums)).toBe(3);
  });

  it('should handle large array', () => {
    const target = 1000000000;
    const nums = Array.from({ length: 100000 }).fill(1) as number[];
    expect(minSubArrayLen(target, nums)).toBe(0);
  });
});
