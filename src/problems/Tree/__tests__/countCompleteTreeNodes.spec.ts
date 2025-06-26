import { describe, expect, it } from 'vitest';
import { countNodes } from '@/problems/Tree/countCompleteTreeNodes';
import { TreeNode } from '@/utils/TreeNode';

describe('countNodes', () => {
  it('should return 0 for empty tree', () => {
    expect(countNodes(null)).toBe(0);
  });

  it('should return 1 for tree with only root', () => {
    const root = new TreeNode(1);
    expect(countNodes(root)).toBe(1);
  });

  it('should count nodes for perfect binary tree of height 2', () => {
    //     1
    //    / \
    //   2   3
    const root = TreeNode.fromArray([1, 2, 3]);
    expect(countNodes(root)).toBe(3);
  });

  it('should count nodes for perfect binary tree of height 3', () => {
    //       1
    //      / \
    //     2   3
    //    / \ / \
    //   4  5 6  7
    const root = TreeNode.fromArray([1, 2, 3, 4, 5, 6, 7]);
    expect(countNodes(root)).toBe(7);
  });

  it('should count nodes for complete tree with last level partially filled', () => {
    //       1
    //      / \
    //     2   3
    //    / \ /
    //   4  5 6
    const root = TreeNode.fromArray([1, 2, 3, 4, 5, 6]);
    expect(countNodes(root)).toBe(6);
  });

  it('should count nodes for complete tree with only left subtree', () => {
    //     1
    //    /
    //   2
    //  /
    // 3
    const root = TreeNode.fromArray([1, 2, null, 3]);
    expect(countNodes(root)).toBe(3);
  });

  it('should count nodes for complete tree with last level filled leftmost', () => {
    //       1
    //      / \
    //     2   3
    //    / \ / \
    //   4  5 6  7
    //  /
    // 8
    const root = TreeNode.fromArray([1, 2, 3, 4, 5, 6, 7, 8]);
    expect(countNodes(root)).toBe(8);
  });

  it('should count nodes for large complete tree', () => {
    // A complete tree with 15 nodes (perfect tree of height 3)
    const root = TreeNode.fromArray([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
    ]);
    expect(countNodes(root)).toBe(15);
  });

  it('should count nodes for edge case with two nodes', () => {
    //     1
    //    /
    //   2
    const root = TreeNode.fromArray([1, 2]);
    expect(countNodes(root)).toBe(2);
  });
});
