import { describe, expect, it } from 'vitest';
import { sumOfLeftLeaves } from '@/problems/Tree/sumOfLeftLeaves';
import { TreeNode } from '@/utils/TreeNode';

describe('sumOfLeftLeaves', () => {
  it('should return 0 for empty tree', () => {
    expect(sumOfLeftLeaves(null)).toBe(0);
  });

  it('should return 0 if no left leaves exist', () => {
    //     1
    //      \
    //       2
    const root = TreeNode.fromArray([1, null, 2]);
    expect(sumOfLeftLeaves(root)).toBe(0);
  });

  it('should return sum of left leaves', () => {
    //     3
    //    / \
    //   9  20
    //     /  \
    //    15   7
    const root = TreeNode.fromArray([3, 9, 20, null, null, 15, 7]);
    expect(sumOfLeftLeaves(root)).toBe(24); // 9 + 15
  });

  it('should not include right leaves', () => {
    //     1
    //    / \
    //   2   3
    //  / \
    // 4   5
    const root = TreeNode.fromArray([1, 2, 3, 4, 5]);
    expect(sumOfLeftLeaves(root)).toBe(4);
  });

  it('should handle left nodes that are not leaves', () => {
    //     1
    //    /
    //   2
    //  /
    // 3
    const root = TreeNode.fromArray([1, 2, null, 3]);
    expect(sumOfLeftLeaves(root)).toBe(3);
  });

  it('should handle tree with multiple levels', () => {
    //       1
    //      / \
    //     2   3
    //    / \   \
    //   4   5   6
    //  /       /
    // 7       8
    const root = TreeNode.fromArray([
      1,
      2,
      3,
      4,
      5,
      null,
      6,
      7,
      null,
      null,
      null,
      8,
    ]);
    expect(sumOfLeftLeaves(root)).toBe(15); // 7 + 8
  });

  it('should return 0 if all left nodes are not leaves', () => {
    //     1
    //    /
    //   2
    //    \
    //     3
    const root = TreeNode.fromArray([1, 2, null, null, 3]);
    expect(sumOfLeftLeaves(root)).toBe(0);
  });

  it('should handle single node tree', () => {
    const root = new TreeNode(1);
    expect(sumOfLeftLeaves(root)).toBe(0);
  });

  it('should handle tree with left leaves at different levels', () => {
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
    expect(sumOfLeftLeaves(root)).toBe(6);
  });
});
