import { describe, expect, it } from 'vitest';
import { isSymmetric } from '@/problems/Tree/symmetricTree';
import { TreeNode } from '@/utils/TreeNode';

describe('isSymmetric', () => {
  it('should return true for empty tree', () => {
    expect(isSymmetric(null)).toBe(true);
  });

  it('should return true for tree with only root', () => {
    const root = new TreeNode(1);
    expect(isSymmetric(root)).toBe(true);
  });

  it('should return true for symmetric tree', () => {
    //     1
    //    / \
    //   2   2
    //  / \ / \
    // 3  4 4  3
    const root = TreeNode.fromArray([1, 2, 2, 3, 4, 4, 3]);
    expect(isSymmetric(root)).toBe(true);
  });

  it('should return false for asymmetric tree', () => {
    //     1
    //    / \
    //   2   2
    //    \   \
    //     3   3
    const root = TreeNode.fromArray([1, 2, 2, null, 3, null, 3]);
    expect(isSymmetric(root)).toBe(false);
  });

  it('should return false for different node values', () => {
    //     1
    //    / \
    //   2   3
    const root = TreeNode.fromArray([1, 2, 3]);
    expect(isSymmetric(root)).toBe(false);
  });

  it('should handle more complex symmetric tree', () => {
    //       1
    //      / \
    //     2   2
    //    /     \
    //   3       3
    //  /         \
    // 4           4
    const root = TreeNode.fromArray([
      1,
      2,
      2,
      3,
      null,
      null,
      3,
      4,
      null,
      null,
      4,
    ]);
    expect(isSymmetric(root)).toBe(true);
  });

  it('should handle more complex asymmetric tree', () => {
    //       1
    //      / \
    //     2   2
    //    /     \
    //   3       4
    const root = TreeNode.fromArray([1, 2, 2, 3, null, null, 4]);
    expect(isSymmetric(root)).toBe(false);
  });

  it('should return false if one subtree is missing', () => {
    //     1
    //    / \
    //   2   null
    const root = TreeNode.fromArray([1, 2, null]);
    expect(isSymmetric(root)).toBe(false);
  });

  it('should return true for symmetric tree with null nodes', () => {
    //     1
    //    / \
    //   2   2
    //    \ /
    //    3 3
    const root = TreeNode.fromArray([1, 2, 2, null, 3, 3, null]);
    expect(isSymmetric(root)).toBe(true);
  });

  it('should return false for tree with different structure', () => {
    //     1
    //    / \
    //   2   2
    //  /   /
    // 3   3
    const root = TreeNode.fromArray([1, 2, 2, 3, null, 3, null]);
    expect(isSymmetric(root)).toBe(false);
  });
});
