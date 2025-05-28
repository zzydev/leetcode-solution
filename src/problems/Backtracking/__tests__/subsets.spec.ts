import { describe, expect, it } from 'vitest';
import { subsets } from '@/problems/Backtracking/subsets';

describe('subsets', () => {
  it('should return empty subset for empty array', () => {
    expect(subsets([])).toEqual([[]]);
  });

  it('should generate subsets for single element array', () => {
    expect(subsets([1])).toEqual([[], [1]]);
  });

  it('should generate all subsets for two elements', () => {
    const result = subsets([1, 2]);
    expect(result).toHaveLength(4);
    expect(result).toEqual(expect.arrayContaining([
      [], [1], [2], [1, 2]
    ]));
  });

  it('should generate all subsets for three elements', () => {
    const result = subsets([1, 2, 3]);
    expect(result).toHaveLength(8);
    expect(result).toEqual(expect.arrayContaining([
      [], [1], [2], [3],
      [1, 2], [1, 3], [2, 3], [1, 2, 3]
    ]));
  });

  it('should handle arrays with duplicates (assuming input has unique elements)', () => {
    // 注意：本题假设输入元素唯一，若有重复元素需额外处理
    const result = subsets([0, 1, 2]);
    expect(result).toHaveLength(8);
    expect(result).toEqual(expect.arrayContaining([
      [], [0], [1], [2],
      [0, 1], [0, 2], [1, 2], [0, 1, 2]
    ]));
  });

  it('should generate subsets in any order', () => {
    const result = subsets([3, 2, 1]);
    expect(result).toHaveLength(8);
    // 使用 Set 转换验证元素存在性，忽略顺序
    const resultSets = result.map(s => new Set(s));
    expect(resultSets).toContainEqual(new Set([]));
    expect(resultSets).toContainEqual(new Set([1]));
    expect(resultSets).toContainEqual(new Set([2]));
    expect(resultSets).toContainEqual(new Set([3]));
    expect(resultSets).toContainEqual(new Set([1, 2]));
    expect(resultSets).toContainEqual(new Set([1, 3]));
    expect(resultSets).toContainEqual(new Set([2, 3]));
    expect(resultSets).toContainEqual(new Set([1, 2, 3]));
  });
});    