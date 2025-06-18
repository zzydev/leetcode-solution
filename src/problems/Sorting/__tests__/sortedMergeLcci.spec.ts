import { describe, expect, it } from 'vitest';
import { merge } from '@/problems/Sorting/sortedMergeLcci';

describe('merge', () => {
  it('should handle empty B', () => {
    const A = [1, 2, 3, 0, 0, 0];
    const m = 3;
    const B: number[] = [];
    const n = 0;
    merge(A, m, B, n);
    expect(A).toEqual([1, 2, 3, 0, 0, 0]);
  });

  it('should merge B into empty A (all zeros)', () => {
    const A = [0, 0, 0];
    const m = 0;
    const B = [1, 2, 3];
    const n = 3;
    merge(A, m, B, n);
    expect(A).toEqual([1, 2, 3]);
  });

  it('should merge two sorted arrays correctly', () => {
    const A = [1, 2, 3, 0, 0];
    const m = 3;
    const B = [2, 5];
    const n = 2;
    merge(A, m, B, n);
    expect(A).toEqual([1, 2, 2, 3, 5]);
  });

  it('should handle all B elements smaller than A', () => {
    const A = [4, 5, 6, 0, 0, 0];
    const m = 3;
    const B = [1, 2, 3];
    const n = 3;
    merge(A, m, B, n);
    expect(A).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('should handle all B elements larger than A', () => {
    const A = [1, 2, 3, 0, 0, 0];
    const m = 3;
    const B = [4, 5, 6];
    const n = 3;
    merge(A, m, B, n);
    expect(A).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('should handle interleaved elements', () => {
    const A = [1, 3, 5, 0, 0, 0];
    const m = 3;
    const B = [2, 4, 6];
    const n = 3;
    merge(A, m, B, n);
    expect(A).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
