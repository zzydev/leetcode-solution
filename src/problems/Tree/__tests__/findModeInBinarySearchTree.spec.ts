import { describe, expect, it } from 'vitest';
import { findMode } from '@/problems/Tree/findModeInBinarySearchTree';
import { TreeNode } from '@/utils/TreeNode';

describe('findMode', () => {
  it('should return empty array for empty tree', () => {
    expect(findMode(null)).toEqual([0]);
  });

  it('should handle single node tree', () => {
    const root = new TreeNode(5);
    expect(findMode(root)).toEqual([5]);
  });

  it('should handle BST with all unique values', () => {
    //     2
    //    / \
    //   1   3
    const root = TreeNode.fromArray([2, 1, 3]);
    expect(findMode(root).sort()).toEqual([1, 2, 3].sort());
  });

  it('should handle BST with single mode', () => {
    //     2
    //    / \
    //   2   3
    const root = TreeNode.fromArray([2, 2, 3]);
    expect(findMode(root)).toEqual([2]);
  });

  it('should handle BST with multiple modes', () => {
    //     2
    //    / \
    //   1   3
    //        \
    //         3
    const root = new TreeNode(2);
    root.left = new TreeNode(1);
    root.right = new TreeNode(3);
    root.right.right = new TreeNode(3);
    expect(findMode(root).sort()).toEqual([3].sort());
  });

  it('should handle BST with left-skewed structure', () => {
    //       2
    //      /
    //     2
    //    /
    //   1
    const root = new TreeNode(2);
    root.left = new TreeNode(2);
    root.left.left = new TreeNode(1);
    expect(findMode(root)).toEqual([2]);
  });

  it('should handle BST with right-skewed structure', () => {
    //     2
    //      \
    //       3
    //        \
    //         3
    const root = new TreeNode(2);
    root.right = new TreeNode(3);
    root.right.right = new TreeNode(3);
    expect(findMode(root)).toEqual([3]);
  });

  it('should handle BST with multiple modes and same frequency', () => {
    //       4
    //      / \
    //     2   5
    //    / \
    //   1   3
    const root = TreeNode.fromArray([4, 2, 5, 1, 3]);
    expect(findMode(root).sort()).toEqual([1, 2, 3, 4, 5].sort());
  });

  it('should handle BST with all nodes having the same value', () => {
    //     5
    //    / \
    //   5   5
    const root = TreeNode.fromArray([5, 5, 5]);
    expect(findMode(root)).toEqual([5]);
  });

  it('should handle BST with negative values', () => {
    //      -1
    //      / \
    //    -2   0
    //    /    /
    //  -2    0
    const root = new TreeNode(-1);
    root.left = new TreeNode(-2);
    root.right = new TreeNode(0);
    root.left.left = new TreeNode(-2);
    root.right.left = new TreeNode(0);
    expect(findMode(root).sort()).toEqual([-2, 0].sort());
  });
});
