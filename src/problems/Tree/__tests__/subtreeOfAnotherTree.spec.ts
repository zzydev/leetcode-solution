import { describe, expect, it } from 'vitest';
import { isSubtree } from '@/problems/Tree/subtreeOfAnotherTree';
import { TreeNode } from '@/utils/TreeNode';

describe('isSubtree', () => {
  it('should return true if both trees are empty', () => {
    const root = null;
    const subRoot = null;
    expect(isSubtree(root, subRoot)).toBe(true);
  });

  it('should return false if root is empty and subRoot is not', () => {
    const root = null;
    const subRoot = TreeNode.fromArray([1]);
    expect(isSubtree(root, subRoot)).toBe(false);
  });

  it('should return true if subRoot is empty', () => {
    const root = TreeNode.fromArray([1]);
    const subRoot = null;
    expect(isSubtree(root, subRoot)).toBe(true);
  });

  it('should return true if subRoot is the same as root', () => {
    const root = TreeNode.fromArray([3, 4, 5, 1, 2]);
    const subRoot = TreeNode.fromArray([3, 4, 5, 1, 2]);
    expect(isSubtree(root, subRoot)).toBe(true);
  });

  it('should return true for valid subtree', () => {
    const root = TreeNode.fromArray([3, 4, 5, 1, 2]);
    const subRoot = TreeNode.fromArray([4, 1, 2]);
    expect(isSubtree(root, subRoot)).toBe(true);
  });

  it('should return false for invalid subtree (different structure)', () => {
    const root = TreeNode.fromArray([3, 4, 5, 1, 2]);
    const subRoot = TreeNode.fromArray([4, 1]);
    expect(isSubtree(root, subRoot)).toBe(false);
  });

  it('should return false for invalid subtree (different values)', () => {
    const root = TreeNode.fromArray([3, 4, 5, 1, 2]);
    const subRoot = TreeNode.fromArray([4, 1, 3]);
    expect(isSubtree(root, subRoot)).toBe(false);
  });

  it('should handle subtree with null nodes', () => {
    const root = TreeNode.fromArray([3, 4, 5, 1, null, 2]);
    const subRoot = TreeNode.fromArray([4, 1, null, null, 2]);
    expect(isSubtree(root, subRoot)).toBe(false);
  });

  it('should handle nested valid subtree', () => {
    const root = TreeNode.fromArray([3, 4, 5, 1, 2, null, null, null, null, 0]);
    const subRoot = TreeNode.fromArray([4, 1, 2]);
    expect(isSubtree(root, subRoot)).toBe(false);
  });

  it('should handle case where subRoot is part of root but not a subtree', () => {
    const root = TreeNode.fromArray([1, 1]);
    const subRoot = TreeNode.fromArray([1]);
    expect(isSubtree(root, subRoot)).toBe(true);
  });

  it('should handle larger trees', () => {
    const root = TreeNode.fromArray([1, 2, 3, 4, 5, 6, 7]);
    const subRoot = TreeNode.fromArray([2, 4, 5]);
    expect(isSubtree(root, subRoot)).toBe(true);
  });

  it('should handle different root values', () => {
    const root = TreeNode.fromArray([1, 2, 3]);
    const subRoot = TreeNode.fromArray([2, 1, 3]);
    expect(isSubtree(root, subRoot)).toBe(false);
  });

  it('should handle subtree with different depth', () => {
    const root = TreeNode.fromArray([1, 2, 3, 4]);
    const subRoot = TreeNode.fromArray([2, 4]);
    expect(isSubtree(root, subRoot)).toBe(true);
  });
});
