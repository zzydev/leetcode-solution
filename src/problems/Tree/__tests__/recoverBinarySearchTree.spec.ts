import { describe, expect, it } from 'vitest';
import { recoverTree } from '@/problems/Tree/recoverBinarySearchTree';
import { TreeNode } from '@/utils/TreeNode';

describe('recoverTree', () => {
  it('should handle empty tree', () => {
    const root = null;
    recoverTree(root);
    expect(root).toBeNull();
  });

  it('should handle single node tree', () => {
    const root = new TreeNode(1);
    const original = TreeNode.fromArray([1]);
    recoverTree(root);
    expect(root).toEqual(original);
  });

  it('should swap adjacent nodes', () => {
    const root = TreeNode.fromArray([2, 1, 3]);
    const original = TreeNode.fromArray([2, 1, 3]);
    if (root && root.left) {
      [root.left.val, root.val] = [root.val, root.left.val];
    }
    recoverTree(root);
    expect(root).toEqual(original);
  });

  it('should swap non-adjacent nodes', () => {
    const root = TreeNode.fromArray([3, 1, null, null, 2]);
    const original = TreeNode.fromArray([3, 1, null, null, 2]);
    if (root && root.left && root.left.right) {
      [root.left.val, root.left.right.val] = [
        root.left.right.val,
        root.left.val,
      ];
    }
    recoverTree(root);
    expect(root).toEqual(original);
  });

  it('should handle right subtree swap', () => {
    const root = TreeNode.fromArray([1, null, 4, 3]);
    const original = TreeNode.fromArray([1, null, 4, 3]);
    if (root && root.right && root.right.left) {
      [root.right.val, root.right.left.val] = [
        root.right.left.val,
        root.right.val,
      ];
    }
    recoverTree(root);
    expect(root).toEqual(original);
  });

  it('should handle edge case with two nodes swapped', () => {
    const root = TreeNode.fromArray([1, null, 2]);
    const original = TreeNode.fromArray([1, null, 2]);
    if (root && root.right) {
      [root.val, root.right.val] = [root.right.val, root.val];
    }
    recoverTree(root);
    expect(root).toEqual(original);
  });

  it('should handle tree with negative values', () => {
    const root = TreeNode.fromArray([-1, -2, 0]);
    const original = TreeNode.fromArray([-1, -2, 0]);
    if (root && root.left) {
      [root.val, root.left.val] = [root.left.val, root.val];
    }
    recoverTree(root);
    expect(root).toEqual(original);
  });
});
