import { describe, expect, it } from 'vitest';
import { relativeSortArray } from '@/problems/HashTable/relativeSortArray';

describe('relativeSortArray', () => {
  it('should handle empty arrays', () => {
    expect(relativeSortArray([], [])).toEqual([]);
  });

  it('should handle arrays with single element', () => {
    expect(relativeSortArray([1], [1])).toEqual([1]);
  });

  it('should sort according to target order', () => {
    const arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19];
    const arr2 = [2, 1, 4, 3, 9, 6];
    expect(relativeSortArray(arr1, arr2)).toEqual([
      2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19,
    ]);
  });

  it('should handle elements not in arr2 at the end in ascending order', () => {
    const arr1 = [28, 6, 22, 8, 44, 17];
    const arr2 = [22, 28, 8, 6];
    expect(relativeSortArray(arr1, arr2)).toEqual([22, 28, 8, 6, 17, 44]);
  });

  it('should handle duplicates in arr1', () => {
    const arr1 = [10, 20, 20, 10, 30, 40];
    const arr2 = [10, 20];
    expect(relativeSortArray(arr1, arr2)).toEqual([10, 10, 20, 20, 30, 40]);
  });

  it('should handle arr2 being a subset of arr1', () => {
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = [2, 4];
    expect(relativeSortArray(arr1, arr2)).toEqual([2, 4, 1, 3, 5]);
  });

  it('should handle arr1 and arr2 being identical', () => {
    const arr1 = [5, 4, 3, 2, 1];
    const arr2 = [5, 4, 3, 2, 1];
    expect(relativeSortArray(arr1, arr2)).toEqual([5, 4, 3, 2, 1]);
  });

  it('should handle arr2 being empty', () => {
    const arr1 = [5, 3, 4, 2, 1];
    const arr2: number[] = [];
    expect(relativeSortArray(arr1, arr2)).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle arr1 containing negative numbers', () => {
    const arr1 = [-1, 2, -3, 4, -5];
    const arr2 = [2, 4];
    expect(relativeSortArray(arr1, arr2)).toEqual([2, 4, -5, -3, -1]);
  });

  it('should handle arr1 containing zeros', () => {
    const arr1 = [0, 1, 0, 2, 0, 3];
    const arr2 = [0];
    expect(relativeSortArray(arr1, arr2)).toEqual([0, 0, 0, 1, 2, 3]);
  });

  it('should handle large numbers', () => {
    const arr1 = [1000, 2000, 3000, 2000, 1000];
    const arr2 = [2000, 1000];
    expect(relativeSortArray(arr1, arr2)).toEqual([
      2000, 2000, 1000, 1000, 3000,
    ]);
  });

  it('should handle arr1 and arr2 with all same elements but different order', () => {
    const arr1 = [3, 1, 2];
    const arr2 = [2, 3, 1];
    expect(relativeSortArray(arr1, arr2)).toEqual([2, 3, 1]);
  });

  it('should handle arr1 with elements not in arr2 and sort them at the end', () => {
    const arr1 = [2, 1, 2, 5, 7, 1, 9, 3, 6, 8, 8];
    const arr2 = [2, 1, 8, 3];
    expect(relativeSortArray(arr1, arr2)).toEqual([
      2, 2, 1, 1, 8, 8, 3, 5, 6, 7, 9,
    ]);
  });

  it('should handle arr1 with multiple elements not in arr2', () => {
    const arr1 = [10, 2, 5, 4, 9, 6, 7, 8];
    const arr2 = [2, 4, 10];
    expect(relativeSortArray(arr1, arr2)).toEqual([2, 4, 10, 5, 6, 7, 8, 9]);
  });
});
