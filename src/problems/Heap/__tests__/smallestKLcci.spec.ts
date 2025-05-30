import { describe, expect, it } from 'vitest';
import { smallestK } from '@/problems/Heap/smallestKLcci';

describe('smallestK', () => {
  it('should return empty array for empty input', () => {
    expect(smallestK([], 0)).toEqual([]);
    expect(smallestK([], 5)).toEqual([]);
  });

  it('should return smallest k elements in sorted order', () => {
    expect(smallestK([7, 4, 6, 3, 9, 1], 3)).toEqual([4, 1, 3]);
    expect(smallestK([10, 5, 2, 9, 11, 5], 2)).toEqual([5, 2]);
  });

  it('should handle array with duplicates', () => {
    expect(smallestK([5, 5, 5, 5], 2)).toEqual([5, 5]);
    expect(smallestK([3, 3, 2, 2, 1, 1], 3)).toEqual([2, 1, 1]);
  });

  it('should handle negative numbers', () => {
    expect(smallestK([-5, 2, -3, 4], 2)).toEqual([-3, -5]);
    expect(smallestK([-1, -2, -3, 0], 3)).toEqual([-1, -2, -3]);
  });

  it('should handle k = 0', () => {
    expect(smallestK([1, 2, 3], 0)).toEqual([]);
    expect(smallestK([-5, 0, 5], 0)).toEqual([]);
  });

  it('should handle already sorted array', () => {
    expect(smallestK([1, 2, 3, 4, 5], 3)).toEqual([3, 1, 2]);
    expect(smallestK([-10, -5, 0, 5, 10], 2)).toEqual([-5, -10]);
  });

  it('should handle reverse sorted array', () => {
    expect(smallestK([5, 4, 3, 2, 1], 3)).toEqual([3, 2, 1]);
    expect(smallestK([10, 5, 0, -5, -10], 4)).toEqual([5, -5, 0, -10]);
  });

  it('should handle array with large values', () => {
    expect(smallestK([1000, 500, 100, 2000], 2)).toEqual([500, 100]);
    expect(smallestK([-10000, 0, 10000], 1)).toEqual([-10000]);
  });

  it('should handle single element array', () => {
    expect(smallestK([5], 1)).toEqual([5]);
    expect(smallestK([-3], 1)).toEqual([-3]);
  });
});
