import { describe, expect, it } from 'vitest';
import { sortColors } from '@/problems/TwoPointers/sortColors';

function isSortedColors(arr: number[]): boolean {
  let i = 0;
  while (i < arr.length && arr[i] === 0) i++;
  while (i < arr.length && arr[i] === 1) i++;
  while (i < arr.length && arr[i] === 2) i++;
  return i === arr.length;
}

describe('sortColors', () => {
  it('should handle empty array', () => {
    const arr: number[] = [];
    sortColors(arr);
    expect(arr).toEqual([]);
  });

  it('should handle single element array', () => {
    const arr = [1];
    sortColors(arr);
    expect(arr).toEqual([1]);
  });

  it('should sort array with all same elements', () => {
    const arr = [0, 0, 0];
    sortColors(arr);
    expect(arr).toEqual([0, 0, 0]);
  });

  it('should sort array with two colors', () => {
    const arr = [1, 0, 1, 0];
    sortColors(arr);
    expect(arr).toEqual([0, 0, 1, 1]);
  });

  it('should sort array with all three colors', () => {
    const arr = [1, 2, 0, 1, 2, 0];
    sortColors(arr);
    expect(isSortedColors(arr)).toBe(true);
  });

  it('should sort large random array', () => {
    const arr = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 3));
    sortColors(arr);
    expect(isSortedColors(arr)).toBe(true);
  });
});
