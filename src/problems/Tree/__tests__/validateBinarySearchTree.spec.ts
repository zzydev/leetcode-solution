import { describe, expect, it } from 'vitest';
import { isValidBST } from '@/problems/Tree/validateBinarySearchTree';
import { TreeNode } from '@/utils/TreeNode';

describe('isValidBST', () => {
  it('should return true for empty tree', () => {
    expect(isValidBST(null)).toBe(true);
  });

  it('should return true for single node tree', () => {
    const root = new TreeNode(1);
    expect(isValidBST(root)).toBe(true);
  });

  it('should return true for valid BST', () => {
    //     2
    //    / \
    //   1   3
    const root = TreeNode.fromArray([2, 1, 3]);
    expect(isValidBST(root)).toBe(true);
  });

  it('should return false for invalid BST with left node greater than root', () => {
    //     2
    //    / \
    //   3   1
    const root = TreeNode.fromArray([2, 3, 1]);
    expect(isValidBST(root)).toBe(false);
  });

  it('should return false for invalid BST with right node less than root', () => {
    //     5
    //    / \
    //   1   4
    //      / \
    //     3   6
    const root = TreeNode.fromArray([5, 1, 4, null, null, 3, 6]);
    expect(isValidBST(root)).toBe(false);
  });

  it('should handle deeper valid BST', () => {
    //       5
    //      / \
    //     1   7
    //        / \
    //       6   8
    const root = TreeNode.fromArray([5, 1, 7, null, null, 6, 8]);
    expect(isValidBST(root)).toBe(true);
  });

  it('should handle BST with duplicate values', () => {
    //     2
    //    / \
    //   2   3
    const root = TreeNode.fromArray([2, 2, 3]);
    expect(isValidBST(root)).toBe(false);
  });

  it('should handle left-skewed BST', () => {
    //           5
    //          /
    //         4
    //        /
    //       3
    //      /
    //     2
    //    /
    //   1
    const root = TreeNode.fromArray([5, 4, null, 3, null, 2, null, 1]);
    expect(isValidBST(root)).toBe(true);
  });

  it('should handle right-skewed BST', () => {
    //     1
    //      \
    //       2
    //        \
    //         3
    //          \
    //           4
    //            \
    //             5
    const root = TreeNode.fromArray([1, null, 2, null, 3, null, 4, null, 5]);
    expect(isValidBST(root)).toBe(true);
  });

  it('should return false for node violating BST property in subtree', () => {
    //       10
    //      /  \
    //     5   15
    //        / \
    //       6   20
    const root = TreeNode.fromArray([10, 5, 15, null, null, 6, 20]);
    expect(isValidBST(root)).toBe(false);
  });

  it('should handle BST with minimal and maximal values', () => {
    //     0
    //    / \
    //   -1  1
    const root = TreeNode.fromArray([0, -1, 1]);
    expect(isValidBST(root)).toBe(true);
  });

  it('should return false for BST with invalid in-order traversal', () => {
    //     3
    //    / \
    //   1   5
    //    \
    //     2
    const root = new TreeNode(3);
    root.left = new TreeNode(1);
    root.right = new TreeNode(5);
    root.left.right = new TreeNode(2);
    expect(isValidBST(root)).toBe(true);
  });

  it('should handle BST with large values', () => {
    //     2147483647
    const root = new TreeNode(2147483647);
    expect(isValidBST(root)).toBe(true);
  });

  it('should handle BST with negative values', () => {
    //     -2147483648
    //        \
    //         2147483647
    const root = new TreeNode(-2147483648);
    root.right = new TreeNode(2147483647);
    expect(isValidBST(root)).toBe(true);
  });
});
