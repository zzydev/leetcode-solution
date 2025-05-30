import { describe, expect, it } from 'vitest';
import { levelOrder } from '@/problems/Tree/binaryTreeLevelOrderTraversal';
import { TreeNode } from '@/utils/TreeNode';

describe('levelOrder', () => {
  it('should return empty array for empty tree', () => {
    expect(levelOrder(null)).toEqual([]);
  });

  it('should return single level for root-only tree', () => {
    const root = new TreeNode(1);
    expect(levelOrder(root)).toEqual([[1]]);
  });

  it('should handle two levels', () => {
    //     1
    //    / \
    //   2   3
    const root = TreeNode.fromArray([1, 2, 3]);
    expect(levelOrder(root)).toEqual([[1], [2, 3]]);
  });

  it('should handle three levels', () => {
    //       1
    //      / \
    //     2   3
    //    / \
    //   4   5
    const root = TreeNode.fromArray([1, 2, 3, 4, 5]);
    expect(levelOrder(root)).toEqual([[1], [2, 3], [4, 5]]);
  });

  it('should handle missing nodes', () => {
    //     1
    //    / \
    //   2   3
    //    \
    //     5
    const root = TreeNode.fromArray([1, 2, 3, null, 5]);
    expect(levelOrder(root)).toEqual([[1], [2, 3], [5]]);
  });

  it('should handle skewed tree', () => {
    //     1
    //      \
    //       2
    //        \
    //         3
    const root = TreeNode.fromArray([1, null, 2, null, 3]);
    expect(levelOrder(root)).toEqual([[1], [2], [3]]);
  });

  it('should handle deeper tree', () => {
    //       3
    //      / \
    //     9  20
    //       /  \
    //      15   7
    const root = TreeNode.fromArray([3, 9, 20, null, null, 15, 7]);
    expect(levelOrder(root)).toEqual([[3], [9, 20], [15, 7]]);
  });

  it('should handle tree with varying level sizes', () => {
    //       1
    //      / \
    //     2   3
    //    /   / \
    //   4   5   6
    const root = TreeNode.fromArray([1, 2, 3, 4, null, 5, 6]);
    expect(levelOrder(root)).toEqual([[1], [2, 3], [4, 5, 6]]);
  });

  it('should handle complex tree structure', () => {
    //         1
    //        / \
    //       2   3
    //      / \   \
    //     4   5   6
    //        /   / \
    //       7   8   9
    const root = TreeNode.fromArray([1, 2, 3, 4, 5, null, 6, null, null, 7, null, 8, 9]);
    expect(levelOrder(root)).toEqual([
      [1],
      [2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]);
  });
});
