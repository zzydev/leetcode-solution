import { describe, expect, it } from 'vitest';
import { threeSumClosest } from '@/problems/TwoPointers/3sumClosest';

describe('threeSumClosest', () => {
  it('should handle array with exactly three elements', () => {
    const nums = [1, 2, 3];
    const target = 6;
    expect(threeSumClosest(nums, target)).toBe(6);
  });

  it('should handle array with exactly three elements not summing to target', () => {
    const nums = [1, 2, 3];
    const target = 5;
    expect(threeSumClosest(nums, target)).toBe(6);
  });

  it('should handle array with multiple elements and exact sum', () => {
    const nums = [-1, 2, 1, -4];
    const target = 2;
    expect(threeSumClosest(nums, target)).toBe(2);
  });

  it('should handle array with multiple elements and no exact sum', () => {
    const nums = [-1, 2, 1, -4];
    const target = 1;
    expect(threeSumClosest(nums, target)).toBe(2);
  });

  it('should handle array with all positive numbers', () => {
    const nums = [1, 2, 4, 8, 16];
    const target = 10;
    expect(threeSumClosest(nums, target)).toBe(11);
  });

  it('should handle array with all negative numbers', () => {
    const nums = [-1, -2, -4, -8, -16];
    const target = -10;
    expect(threeSumClosest(nums, target)).toBe(-11);
  });

  it('should handle array with positive and negative numbers', () => {
    const nums = [-3, -2, -5, 3, -4];
    const target = -1;
    expect(threeSumClosest(nums, target)).toBe(-2);
  });

  it('should handle array with duplicates', () => {
    const nums = [0, 0, 0, 0];
    const target = 1;
    expect(threeSumClosest(nums, target)).toBe(0);
  });

  it('should handle array with large numbers', () => {
    const nums = [100, 200, 300, 400];
    const target = 900;
    expect(threeSumClosest(nums, target)).toBe(900);
  });

  it('should handle array with large negative numbers', () => {
    const nums = [-100, -200, -300, -400];
    const target = -900;
    expect(threeSumClosest(nums, target)).toBe(-900);
  });

  it('should handle target being zero', () => {
    const nums = [1, 2, -3, 4];
    const target = 0;
    expect(threeSumClosest(nums, target)).toBe(0);
  });

  it('should handle array with multiple valid triplets', () => {
    const nums = [1, 1, 1, 0];
    const target = -100;
    expect(threeSumClosest(nums, target)).toBe(2);
  });

  it('should handle array with very large numbers', () => {
    const nums = [1000, 2000, 3000];
    const target = 1000000;
    expect(threeSumClosest(nums, target)).toBe(6000);
  });

  it('should handle array with multiple valid triplets and choose the closest', () => {
    const nums = [0, 2, 1, -3];
    const target = 1;
    expect(threeSumClosest(nums, target)).toBe(0);
  });
});
