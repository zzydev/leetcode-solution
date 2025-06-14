import { describe, expect, it } from 'vitest';
import { intersection } from '@/problems/HashTable/intersectionOfTwoArrays';

describe('intersection', () => {
  it('should return empty array for empty inputs', () => {
    expect(intersection([], [])).toEqual([]);
  });

  it('should return empty array if one input is empty', () => {
    expect(intersection([1, 2, 3], [])).toEqual([]);
    expect(intersection([], [4, 5, 6])).toEqual([]);
  });

  it('should return intersection of two arrays with unique elements', () => {
    expect(intersection([1, 2, 3], [2, 3, 4])).toEqual([2, 3]);
  });

  it('should return unique elements in the intersection', () => {
    expect(intersection([4, 9, 5], [9, 4, 9, 8, 4]).sort()).toEqual([4, 9]);
  });

  it('should handle arrays with duplicates', () => {
    expect(intersection([1, 2, 2, 1], [2, 2])).toEqual([2]);
  });

  it('should handle arrays with no intersection', () => {
    expect(intersection([1, 3, 5], [2, 4, 6])).toEqual([]);
  });

  it('should handle arrays with same elements', () => {
    expect(intersection([1, 2, 3], [1, 2, 3])).toEqual([1, 2, 3]);
  });

  it('should handle arrays with negative numbers', () => {
    expect(intersection([-1, -2, 3], [-2, 4, -1])).toEqual([-2, -1]);
  });

  it('should handle arrays with large numbers', () => {
    expect(intersection([1000000, 2000000], [2000000, 3000000])).toEqual([2000000]);
  });

  it('should handle arrays with different orders', () => {
    expect(intersection([3, 1, 2], [2, 1, 3]).sort()).toEqual([1, 2, 3]);
  });

  it('should handle arrays with one common element', () => {
    expect(intersection([1, 2, 3], [3, 4, 5])).toEqual([3]);
  });

  it('should handle arrays with multiple common elements', () => {
    expect(intersection([1, 2, 3, 4], [3, 4, 5, 6])).toEqual([3, 4]);
  });

  it('should handle arrays with different lengths', () => {
    expect(intersection([1, 2, 3, 4, 5], [3, 4])).toEqual([3, 4]);
  });

  it('should handle arrays with all duplicates', () => {
    expect(intersection([2, 2, 2], [2, 2, 2])).toEqual([2]);
  });

  it('should handle arrays with some duplicates', () => {
    expect(intersection([1, 2, 2, 3], [2, 3, 3, 4])).toEqual([2, 3]);
  });

  it('should handle arrays with complex elements', () => {
    expect(intersection([1, 2, 3, 4], [3, 4, 5, 6, 7, 8, 9, 10])).toEqual([3, 4]);
  });
});
