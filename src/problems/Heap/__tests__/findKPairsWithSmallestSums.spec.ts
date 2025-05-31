import { describe, expect, it } from 'vitest';
import { kSmallestPairs } from '@/problems/Heap/findKPairsWithSmallestSums';

describe('kSmallestPairs', () => {
  it('should return empty array when k is 0', () => {
    const nums1 = [1, 7, 11];
    const nums2 = [2, 4, 6];
    const k = 0;
    expect(kSmallestPairs(nums1, nums2, k)).toEqual([]);
  });

  it('should return pairs with smallest sums', () => {
    const nums1 = [1, 7, 11];
    const nums2 = [2, 4, 6];
    const k = 3;
    const expected = [
      [1, 2],
      [1, 4],
      [1, 6],
    ];
    expect(kSmallestPairs(nums1, nums2, k)).toEqual(expected);
  });

  it('should handle case where k is larger than possible pairs', () => {
    const nums1 = [1, 2];
    const nums2 = [3];
    const k = 3;
    const expected = [
      [1, 3],
      [2, 3],
    ];
    expect(kSmallestPairs(nums1, nums2, k)).toEqual(expected);
  });

  it('should handle arrays with negative numbers', () => {
    const nums1 = [-1, 2];
    const nums2 = [3, 4];
    const k = 2;
    const expected = [
      [-1, 3],
      [-1, 4],
    ];
    expect(kSmallestPairs(nums1, nums2, k)).toEqual(expected);
  });

  it('should handle k equal to number of possible pairs', () => {
    const nums1 = [1, 2, 3];
    const nums2 = [4, 5];
    const k = 6;
    const expected = [
      [1, 4],
      [2, 4],
      [1, 5],
      [2, 5],
      [3, 4],
      [3, 5],
    ];
    expect(kSmallestPairs(nums1, nums2, k)).toEqual(expected);
  });

  it('should handle case where one array is very long', () => {
    const nums1 = [1, 2, 3, 4, 5];
    const nums2 = [6];
    const k = 3;
    const expected = [
      [1, 6],
      [2, 6],
      [3, 6],
    ];
    expect(kSmallestPairs(nums1, nums2, k)).toEqual(expected);
  });

  it('should handle case where both arrays are single element', () => {
    const nums1 = [1];
    const nums2 = [2];
    const k = 1;
    const expected = [[1, 2]];
    expect(kSmallestPairs(nums1, nums2, k)).toEqual(expected);
  });

  it('should handle case where sum of pairs are equal', () => {
    const nums1 = [1, 1, 2];
    const nums2 = [1, 2, 3];
    const k = 2;
    const expected = [
      [1, 1],
      [1, 1],
    ];
    expect(kSmallestPairs(nums1, nums2, k)).toEqual(expected);
  });

  it('should handle case where arrays have zero elements', () => {
    const nums1: number[] = [];
    const nums2 = [1, 2, 3];
    const k = 2;
    expect(kSmallestPairs(nums1, nums2, k)).toEqual([]);
  });

  it('should handle large k with multiple possible pairs', () => {
    const nums1 = [1, 2, 4, 5, 6];
    const nums2 = [3, 5, 7, 9];
    const k = 3;
    const expected = [
      [1, 3],
      [2, 3],
      [1, 5],
    ];
    expect(kSmallestPairs(nums1, nums2, k)).toEqual(expected);
  });
});
