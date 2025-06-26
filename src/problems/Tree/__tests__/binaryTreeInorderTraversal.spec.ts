import { describe, expect, it } from 'vitest';
import { inorderTraversal } from '@/problems/Tree/binaryTreeInorderTraversal';
import { TreeNode } from '@/utils/TreeNode';

describe('inorderTraversal', () => {
  it('should return empty array for empty tree', () => {
    expect(inorderTraversal(null)).toEqual([]);
  });

  it('should handle tree with only root', () => {
    const root = new TreeNode(1);
    expect(inorderTraversal(root)).toEqual([1]);
  });

  it('should traverse simple tree', () => {
    //     1
    //    / \
    //   2   3
    const root = TreeNode.fromArray([1, 2, 3]);
    expect(inorderTraversal(root)).toEqual([2, 1, 3]);
  });

  it('should handle left-skewed tree', () => {
    //     1
    //    /
    //   2
    //  /
    // 3
    const root = TreeNode.fromArray([1, 2, null, 3]);
    expect(inorderTraversal(root)).toEqual([3, 2, 1]);
  });

  it('should handle right-skewed tree', () => {
    //     1
    //      \
    //       2
    //        \
    //         3
    const root = TreeNode.fromArray([1, null, 2, null, 3]);
    expect(inorderTraversal(root)).toEqual([1, 2, 3]);
  });

  it('should traverse more complex tree', () => {
    //       1
    //      / \
    //     2   5
    //    / \
    //   3   4
    const root = TreeNode.fromArray([1, 2, 5, 3, 4]);
    expect(inorderTraversal(root)).toEqual([3, 2, 4, 1, 5]);
  });

  it('should handle tree with null nodes', () => {
    //     1
    //    / \
    //   2   3
    //    \
    //     4
    const root = TreeNode.fromArray([1, 2, 3, null, 4]);
    expect(inorderTraversal(root)).toEqual([2, 4, 1, 3]);
  });

  it('should handle tree with deeper structure', () => {
    //       1
    //      / \
    //     2   3
    //    /     \
    //   4       5
    //  /         \
    // 6           7
    const root = TreeNode.fromArray([
      1,
      2,
      3,
      4,
      null,
      null,
      5,
      6,
      null,
      null,
      7,
    ]);
    expect(inorderTraversal(root)).toEqual([6, 4, 2, 1, 3, 5, 7]);
  });

  it('should handle tree with both left and right branches', () => {
    //       1
    //      / \
    //     2   3
    //    / \ / \
    //   4  5 6  7
    const root = TreeNode.fromArray([1, 2, 3, 4, 5, 6, 7]);
    expect(inorderTraversal(root)).toEqual([4, 2, 5, 1, 6, 3, 7]);
  });
});
