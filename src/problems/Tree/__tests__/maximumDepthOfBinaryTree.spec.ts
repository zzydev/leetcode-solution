import { describe, expect, it } from 'vitest';
import { maxDepth } from '@/problems/Tree/maximumDepthOfBinaryTree';
import { TreeNode } from '@/utils/TreeNode';

describe('maxDepth', () => {
  it('should return 0 for empty tree', () => {
    expect(maxDepth(null)).toBe(0);
  });

  it('should return 1 for tree with only root', () => {
    const root = new TreeNode(1);
    expect(maxDepth(root)).toBe(1);
  });

  it('should return correct depth for balanced tree', () => {
    const root = TreeNode.fromArray([3, 9, 20, null, null, 15, 7]);
    expect(maxDepth(root)).toBe(3);
  });

  it('should return correct depth for left-skewed tree', () => {
    const root = TreeNode.fromArray([1, 2, null, 3, null, 4, null, null]);
    expect(maxDepth(root)).toBe(4);
  });

  it('should return correct depth for right-skewed tree', () => {
    const root = TreeNode.fromArray([1, null, 2, null, 3, null, 4]);
    expect(maxDepth(root)).toBe(4);
  });

  it('should handle tree with two levels', () => {
    const root = TreeNode.fromArray([1, 2, 3]);
    expect(maxDepth(root)).toBe(2);
  });

  it('should handle tree with uneven branches', () => {
    const root = TreeNode.fromArray([1, 2, 3, 4, null, null, 5, 6]);
    expect(maxDepth(root)).toBe(4);
  });

  it('should handle deeper tree structure', () => {
    const root = TreeNode.fromArray([1, 2, 3, 4, 5, 6, 7, 8]);
    expect(maxDepth(root)).toBe(4);
  });

  it('should handle tree with null nodes in the middle', () => {
    const root = TreeNode.fromArray([1, 2, null, 3, null, 4]);
    expect(maxDepth(root)).toBe(4);
  });
});
