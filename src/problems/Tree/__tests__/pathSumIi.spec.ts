import { describe, expect, it } from 'vitest';
import { pathSum } from '@/problems/Tree/pathSumIi';
import { TreeNode } from '@/utils/TreeNode';

describe('pathSum', () => {
  it('should return empty array for empty tree', () => {
    expect(pathSum(null, 0)).toEqual([]);
  });

  it('should return empty array if no valid paths exist', () => {
    const root = TreeNode.fromArray([1, 2, 3]);
    expect(pathSum(root, 5)).toEqual([]);
  });

  it('should return all valid paths', () => {
    //       5
    //      / \
    //     4   8
    //    /   / \
    //   11  13  4
    //  /  \    / \
    // 7    2  5   1
    const root = TreeNode.fromArray([
      5,
      4,
      8,
      11,
      null,
      13,
      4,
      7,
      2,
      null,
      null,
      5,
      1,
    ]);
    expect(pathSum(root, 22)).toEqual([
      [5, 4, 11, 2],
      [5, 8, 4, 5],
    ]);
  });

  it('should handle negative values', () => {
    //      -2
    //       \
    //       -3
    const root = TreeNode.fromArray([-2, null, -3]);
    expect(pathSum(root, -5)).toEqual([[-2, -3]]);
  });

  it('should return paths with correct order', () => {
    //     1
    //    / \
    //   2   3
    //  / \
    // 4   5
    const root = TreeNode.fromArray([1, 2, 3, 4, 5]);
    expect(pathSum(root, 8)).toEqual([[1, 2, 5]]);
    expect(pathSum(root, 7)).toEqual([[1, 2, 4]]);
  });

  it('should consider paths ending at leaf nodes only', () => {
    //     1
    //    /
    //   2
    //  /
    // 3
    const root = TreeNode.fromArray([1, 2, null, 3]);
    expect(pathSum(root, 3)).toEqual([]); // 1->2 is not a leaf path
  });

  it('should handle multiple valid paths', () => {
    //     1
    //    / \
    //   1   1
    //  / \ / \
    // 1  1 1  1
    const root = TreeNode.fromArray([1, 1, 1, 1, 1, 1, 1]);
    expect(pathSum(root, 3)).toEqual([
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
    ]);
  });

  it('should return empty array if target sum is zero but no valid paths exist', () => {
    const root = TreeNode.fromArray([1, 2]);
    expect(pathSum(root, 0)).toEqual([]);
  });

  it('should handle tree with single node', () => {
    const root = new TreeNode(1);
    expect(pathSum(root, 1)).toEqual([[1]]);
    expect(pathSum(root, 0)).toEqual([]);
  });

  it('should handle deeper tree structure', () => {
    //       5
    //      / \
    //     4   8
    //    /   / \
    //   11  13  4
    //  /  \    / \
    // 7    2  5   1
    //            /
    //           1
    const root = TreeNode.fromArray([
      5,
      4,
      8,
      11,
      null,
      13,
      4,
      7,
      2,
      null,
      null,
      5,
      1,
      null,
      null,
      null,
      1,
    ]);
    expect(pathSum(root, 26)).toEqual([[5, 8, 13]]);
  });
});
