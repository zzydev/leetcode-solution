import { describe, expect, it } from 'vitest';
import { searchRange } from '@/problems/BinarySearch/findFirstAndLastPositionOfElementInSortedArray';

describe('searchRange', () => {
  it('should return [-1, -1] for empty array', () => {
    const nums: number[] = [];
    const target = 5;
    expect(searchRange(nums, target)).toEqual([-1, -1]);
  });

  it('should return [-1, -1] if target is not found', () => {
    const nums = [1, 3, 5, 7];
    const target = 4;
    expect(searchRange(nums, target)).toEqual([-1, -1]);
  });

  it('should find single occurrence', () => {
    const nums = [5, 7, 7, 8, 8, 10];
    const target = 10;
    expect(searchRange(nums, target)).toEqual([5, 5]);
  });

  it('should find first and last occurrence', () => {
    const nums = [5, 7, 7, 8, 8, 10];
    const target = 8;
    expect(searchRange(nums, target)).toEqual([3, 4]);
  });

  it('should handle multiple occurrences at the beginning', () => {
    const nums = [5, 5, 5, 7, 8];
    const target = 5;
    expect(searchRange(nums, target)).toEqual([0, 2]);
  });

  it('should handle multiple occurrences at the end', () => {
    const nums = [1, 3, 8, 8, 8];
    const target = 8;
    expect(searchRange(nums, target)).toEqual([2, 4]);
  });

  it('should handle all elements being the target', () => {
    const nums = [3, 3, 3, 3];
    const target = 3;
    expect(searchRange(nums, target)).toEqual([0, 3]);
  });

  it('should handle target smaller than all elements', () => {
    const nums = [2, 3, 4, 5];
    const target = 1;
    expect(searchRange(nums, target)).toEqual([-1, -1]);
  });

  it('should handle target larger than all elements', () => {
    const nums = [2, 3, 4, 5];
    const target = 6;
    expect(searchRange(nums, target)).toEqual([-1, -1]);
  });

  it('should handle array with single element (target present)', () => {
    const nums = [5];
    const target = 5;
    expect(searchRange(nums, target)).toEqual([0, 0]);
  });

  it('should handle array with single element (target absent)', () => {
    const nums = [5];
    const target = 3;
    expect(searchRange(nums, target)).toEqual([-1, -1]);
  });

  it('should handle target in the middle with duplicates', () => {
    const nums = [1, 2, 3, 3, 3, 4, 5];
    const target = 3;
    expect(searchRange(nums, target)).toEqual([2, 4]);
  });
});
