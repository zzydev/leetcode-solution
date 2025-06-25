import { describe, expect, it } from 'vitest';
import { peakIndexInMountainArray } from '@/problems/BinarySearch/peakIndexInAMountainArray';

describe('peakIndexInMountainArray', () => {
  it('should find peak in a small mountain array', () => {
    const arr = [0, 1, 0];
    expect(peakIndexInMountainArray(arr)).toBe(1);
  });

  it('should find peak in a larger mountain array', () => {
    const arr = [0, 2, 1, 0];
    expect(peakIndexInMountainArray(arr)).toBe(1);
  });

  it('should handle peak at the end of the array', () => {
    const arr = [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0,
    ];
    expect(peakIndexInMountainArray(arr)).toBe(10);
  });

  it('should handle array with repeated values after peak', () => {
    const arr = [0, 1, 0, 0, 0];
    expect(peakIndexInMountainArray(arr)).toBe(1);
  });

  it('should handle array with negative values', () => {
    const arr = [-10, -5, 0, 5, 3, 2, 1];
    expect(peakIndexInMountainArray(arr)).toBe(3);
  });

  it('should handle array with floating point values', () => {
    const arr = [0.1, 0.5, 1.0, 0.9, 0.8];
    expect(peakIndexInMountainArray(arr)).toBe(2);
  });

  it('should handle array with large values', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    expect(peakIndexInMountainArray(arr)).toBe(9);
  });

  it('should handle array with only three elements', () => {
    const arr = [1, 2, 1];
    expect(peakIndexInMountainArray(arr)).toBe(1);
  });

  it('should handle array with peak in the middle', () => {
    const arr = [1, 2, 3, 4, 5, 4, 3, 2, 1];
    expect(peakIndexInMountainArray(arr)).toBe(4);
  });
});
