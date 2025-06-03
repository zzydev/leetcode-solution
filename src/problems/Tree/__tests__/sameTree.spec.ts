import { describe, expect, it } from 'vitest';
import { isSameTree } from '@/problems/Tree/sameTree';
import { TreeNode } from '@/utils/TreeNode';

describe('isSameTree', () => {
  it('should return true for two empty trees', () => {
    expect(isSameTree(null, null)).toBe(true);
  });

  it('should return false if one tree is empty and the other is not', () => {
    const p = TreeNode.fromArray([1]);
    const q = null;
    expect(isSameTree(p, q)).toBe(false);
    expect(isSameTree(q, p)).toBe(false);
  });

  it('should return true for two identical single-node trees', () => {
    const p = TreeNode.fromArray([1]);
    const q = TreeNode.fromArray([1]);
    expect(isSameTree(p, q)).toBe(true);
  });

  it('should return false for trees with different root values', () => {
    const p = TreeNode.fromArray([1]);
    const q = TreeNode.fromArray([2]);
    expect(isSameTree(p, q)).toBe(false);
  });

  it('should return true for two identical multi-node trees', () => {
    const p = TreeNode.fromArray([1, 2, 3]);
    const q = TreeNode.fromArray([1, 2, 3]);
    expect(isSameTree(p, q)).toBe(true);
  });

  it('should return false for trees with different structures', () => {
    const p = TreeNode.fromArray([1, 2]);
    const q = TreeNode.fromArray([1, null, 2]);
    expect(isSameTree(p, q)).toBe(false);
  });

  it('should return false for trees with different node values', () => {
    const p = TreeNode.fromArray([1, 2, 1]);
    const q = TreeNode.fromArray([1, 1, 2]);
    expect(isSameTree(p, q)).toBe(false);
  });

  it('should return true for deeper identical trees', () => {
    const p = TreeNode.fromArray([1, 2, 3, 4, 5]);
    const q = TreeNode.fromArray([1, 2, 3, 4, 5]);
    expect(isSameTree(p, q)).toBe(true);
  });

  it('should return false for trees with different depth', () => {
    const p = TreeNode.fromArray([1, 2, 3]);
    const q = TreeNode.fromArray([1, 2, 3, 4]);
    expect(isSameTree(p, q)).toBe(false);
  });

  it('should handle trees with null nodes', () => {
    const p = TreeNode.fromArray([1, null, 2]);
    const q = TreeNode.fromArray([1, null, 2]);
    expect(isSameTree(p, q)).toBe(true);
  });

  it('should return false for trees with different null placements', () => {
    const p = TreeNode.fromArray([1, 2, null]);
    const q = TreeNode.fromArray([1, null, 2]);
    expect(isSameTree(p, q)).toBe(false);
  });

  it('should handle larger identical trees', () => {
    const p = TreeNode.fromArray([1, 2, 3, 4, 5, 6, 7]);
    const q = TreeNode.fromArray([1, 2, 3, 4, 5, 6, 7]);
    expect(isSameTree(p, q)).toBe(true);
  });

  it('should handle larger non-identical trees', () => {
    const p = TreeNode.fromArray([1, 2, 3, 4, 5, 6, 7]);
    const q = TreeNode.fromArray([1, 2, 3, 4, 5, 6, 8]);
    expect(isSameTree(p, q)).toBe(false);
  });
});
