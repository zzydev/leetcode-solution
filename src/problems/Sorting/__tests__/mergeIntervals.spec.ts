import { describe, expect, it } from 'vitest';
import { merge } from '@/problems/Sorting/mergeIntervals';

describe('merge', () => {
  it('should handle single interval', () => {
    expect(merge([[1, 3]])).toEqual([[1, 3]]);
  });

  it('should merge overlapping intervals', () => {
    expect(
      merge([
        [1, 3],
        [2, 6],
      ]),
    ).toEqual([[1, 6]]);
    expect(
      merge([
        [1, 4],
        [0, 4],
      ]),
    ).toEqual([[0, 4]]);
    expect(
      merge([
        [1, 4],
        [2, 3],
      ]),
    ).toEqual([[1, 4]]);
  });

  it('should merge adjacent intervals', () => {
    expect(
      merge([
        [1, 4],
        [5, 6],
      ]),
    ).toEqual([
      [1, 4],
      [5, 6],
    ]);
    expect(
      merge([
        [1, 5],
        [6, 10],
      ]),
    ).toEqual([
      [1, 5],
      [6, 10],
    ]);
  });

  it('should not merge non-overlapping intervals', () => {
    expect(
      merge([
        [1, 3],
        [4, 6],
      ]),
    ).toEqual([
      [1, 3],
      [4, 6],
    ]);
    expect(
      merge([
        [1, 2],
        [3, 4],
        [5, 6],
      ]),
    ).toEqual([
      [1, 2],
      [3, 4],
      [5, 6],
    ]);
  });

  it('should handle intervals in non-sorted order', () => {
    expect(
      merge([
        [3, 5],
        [1, 4],
      ]),
    ).toEqual([[1, 5]]);
    expect(
      merge([
        [8, 10],
        [15, 18],
        [1, 3],
        [2, 6],
      ]),
    ).toEqual([
      [1, 6],
      [8, 10],
      [15, 18],
    ]);
  });

  it('should handle intervals with the same start time', () => {
    expect(
      merge([
        [1, 3],
        [1, 5],
      ]),
    ).toEqual([[1, 5]]);
    expect(
      merge([
        [2, 4],
        [2, 8],
      ]),
    ).toEqual([[2, 8]]);
  });

  it('should handle intervals with the same end time', () => {
    expect(
      merge([
        [1, 3],
        [2, 3],
      ]),
    ).toEqual([[1, 3]]);
    expect(
      merge([
        [0, 5],
        [3, 5],
      ]),
    ).toEqual([[0, 5]]);
  });

  it('should handle intervals with zero duration', () => {
    expect(
      merge([
        [1, 1],
        [2, 2],
      ]),
    ).toEqual([
      [1, 1],
      [2, 2],
    ]);
    expect(
      merge([
        [1, 1],
        [1, 2],
      ]),
    ).toEqual([[1, 2]]);
  });

  it('should handle intervals with negative numbers', () => {
    expect(
      merge([
        [-3, -1],
        [-2, 2],
      ]),
    ).toEqual([[-3, 2]]);
    expect(
      merge([
        [-5, -1],
        [0, 5],
      ]),
    ).toEqual([
      [-5, -1],
      [0, 5],
    ]);
  });

  it('should handle intervals with large numbers', () => {
    expect(
      merge([
        [1000000, 2000000],
        [1500000, 2500000],
      ]),
    ).toEqual([[1000000, 2500000]]);
    expect(
      merge([
        [1000000, 2000000],
        [3000000, 4000000],
      ]),
    ).toEqual([
      [1000000, 2000000],
      [3000000, 4000000],
    ]);
  });

  it('should handle intervals where one completely covers another', () => {
    expect(
      merge([
        [1, 10],
        [2, 5],
      ]),
    ).toEqual([[1, 10]]);
    expect(
      merge([
        [0, 100],
        [50, 60],
      ]),
    ).toEqual([[0, 100]]);
  });

  it('should handle multiple merges', () => {
    expect(
      merge([
        [1, 4],
        [2, 5],
        [6, 8],
        [7, 10],
      ]),
    ).toEqual([
      [1, 5],
      [6, 10],
    ]);
    expect(
      merge([
        [1, 3],
        [2, 6],
        [8, 10],
        [15, 18],
      ]),
    ).toEqual([
      [1, 6],
      [8, 10],
      [15, 18],
    ]);
  });
});
