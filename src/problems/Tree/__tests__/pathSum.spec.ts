import { describe, expect, it } from 'vitest';
import { hasPathSum } from '@/problems/Tree/pathSum';
import { TreeNode } from '@/utils/TreeNode';

describe('hasPathSum', () => {
  it('should return false for empty tree', () => {
    expect(hasPathSum(null, 0)).toBe(false);
  });

  it('should handle tree with only root node', () => {
    const root = new TreeNode(5);
    expect(hasPathSum(root, 5)).toBe(true);
    expect(hasPathSum(root, 10)).toBe(false);
  });

  it('should return true for valid path in simple tree', () => {
    //     5
    //    / \
    //   4   8
    //  /   / \
    // 11  13  4
    const root = TreeNode.fromArray([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]);
    expect(hasPathSum(root, 22)).toBe(true); // 5 -> 4 -> 11 -> 2
  });

  it('should return false if no valid path exists', () => {
    const root = TreeNode.fromArray([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]);
    expect(hasPathSum(root, 20)).toBe(false);
  });

  it('should consider path ending at leaf nodes only', () => {
    //     1
    //    /
    //   2
    const root = TreeNode.fromArray([1, 2]);
    expect(hasPathSum(root, 1)).toBe(false); // 1 is not a leaf
  });

  it('should handle negative values', () => {
    //      -2
    //       \
    //       -3
    const root = TreeNode.fromArray([-2, null, -3]);
    expect(hasPathSum(root, -5)).toBe(true);
  });

  it('should handle multiple valid paths', () => {
    //     1
    //    / \
    //   2   3
    //  / \
    // 4   5
    const root = TreeNode.fromArray([1, 2, 3, 4, 5]);
    expect(hasPathSum(root, 8)).toBe(true); // 1 -> 2 -> 5
    expect(hasPathSum(root, 7)).toBe(true); // 1 -> 2 -> 4
    expect(hasPathSum(root, 4)).toBe(true); // 1 -> 3
  });

  it('should return false for all invalid sums', () => {
    const root = TreeNode.fromArray([1, 2, 3, 4, 5]);
    expect(hasPathSum(root, 1)).toBe(false);
    expect(hasPathSum(root, 2)).toBe(false);
    expect(hasPathSum(root, 3)).toBe(false);
    expect(hasPathSum(root, 10)).toBe(false);
  });

  it('should handle single node with zero sum', () => {
    const root = new TreeNode(0);
    expect(hasPathSum(root, 0)).toBe(true);
  });

  it('should handle deeper tree structure', () => {
    //       5
    //      / \
    //     4   8
    //    /   / \
    //   11  13  4
    //  /  \      \
    // 7    2      1
    const root = TreeNode.fromArray([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]);
    expect(hasPathSum(root, 27)).toBe(true); // 5 -> 8 -> 13
    expect(hasPathSum(root, 18)).toBe(true); // 5 -> 4 -> 11 -> 7
    expect(hasPathSum(root, 12)).toBe(false);
  });
});
