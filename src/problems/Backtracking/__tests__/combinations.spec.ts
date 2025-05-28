import { describe, expect, it } from 'vitest';
import { combine } from '@/problems/Backtracking/combinations';

describe('combine', () => {
  it('should return empty array when n < k', () => {
    expect(combine(3, 4)).toEqual([]);
  });

  it('should return all elements when k equals n', () => {
    expect(combine(3, 3)).toEqual([[1, 2, 3]]);
  });

  it('should generate all combinations for k=1', () => {
    expect(combine(4, 1)).toEqual([[1], [2], [3], [4]]);
  });

  it('should generate all combinations for k=2, n=3', () => {
    const result = combine(3, 2);
    expect(result).toHaveLength(3);
    expect(result).toEqual(expect.arrayContaining([
      [1, 2], [1, 3], [2, 3]
    ]));
  });

  it('should generate all combinations for k=2, n=4', () => {
    const result = combine(4, 2);
    expect(result).toHaveLength(6);
    expect(result).toEqual(expect.arrayContaining([
      [1, 2], [1, 3], [1, 4],
      [2, 3], [2, 4], [3, 4]
    ]));
  });

  it('should generate all combinations for k=3, n=5', () => {
    const result = combine(5, 3);
    expect(result).toHaveLength(10);
    expect(result).toEqual(expect.arrayContaining([
      [1, 2, 3], [1, 2, 4], [1, 2, 5],
      [1, 3, 4], [1, 3, 5], [1, 4, 5],
      [2, 3, 4], [2, 3, 5], [2, 4, 5],
      [3, 4, 5]
    ]));
  });

  it('should handle edge case n=1, k=1', () => {
    expect(combine(1, 1)).toEqual([[1]]);
  });
});    