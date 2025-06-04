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
    // Original:   1, 2, 3
    // Swapped:    1, 3, 2
    // After fix:  1, 2, 3
    const root = TreeNode.fromArray([2, 1, 3]);
    const original = TreeNode.fromArray([2, 1, 3]);
    // Swap 1 and 3 to create invalid BST
    [root!.left!.val, root!.val] = [root!.val, root!.left!.val];
    recoverTree(root);
    expect(root).toEqual(original);
  });

  it('should swap non-adjacent nodes', () => {
    // Original:   1, 2, 3, 4
    // Swapped:    4, 2, 3, 1
    // After fix:  1, 2, 3, 4
    const root = TreeNode.fromArray([3, 1, 4, null, null, 2]);
    const original = TreeNode.fromArray([3, 1, 4, null, null, 2]);
    // Swap 1 and 4 to create invalid BST
    [root!.left!.val, root!.right!.val] = [root!.right!.val, root!.left!.val];
    recoverTree(root);
    expect(root).toEqual(original);
  });

  it('should handle left subtree swap', () => {
    // Original:   3, 2, 1
    // Swapped:    3, 1, 2
    // After fix:  3, 2, 1
    const root = TreeNode.fromArray([3, 1, null, null, 2]);
    const original = TreeNode.fromArray([3, 1, null, null, 2]);
    // Swap 1 and 2 to create invalid BST
    [root!.left!.right!.val, root!.left!.val] = [root!.left!.val, root!.left!.right!.val];
    recoverTree(root);
    expect(root).toEqual(original);
  });

  it('should handle right subtree swap', () => {
    // Original:   1, 3, 4
    // Swapped:    1, 4, 3
    // After fix:  1, 3, 4
    const root = TreeNode.fromArray([1, null, 4, 3]);
    const original = TreeNode.fromArray([1, null, 4, 3]);
    // Swap 3 and 4 to create invalid BST
    [root!.right!.val, root!.right!.left!.val] = [root!.right!.left!.val, root!.right!.val];
    recoverTree(root);
    expect(root).toEqual(original);
  });

  it('should handle tree with duplicate values', () => {
    // Original:   2, 2, 2
    // Swapped:    2, 2, 2 (no change)
    const root = TreeNode.fromArray([2, 2, 2]);
    const original = TreeNode.fromArray([2, 2, 2]);
    recoverTree(root);
    expect(root).toEqual(original);
  });

  it('should handle edge case with two nodes swapped', () => {
    // Original:   2, 1
    // Swapped:    1, 2
    // After fix:  2, 1
    const root = TreeNode.fromArray([1, null, 2]);
    const original = TreeNode.fromArray([1, null, 2]);
    // Swap root and right child
    [root!.val, root!.right!.val] = [root!.right!.val, root!.val];
    recoverTree(root);
    expect(root).toEqual(original);
  });

  it('should handle tree with negative values', () => {
    // Original:   -2, -1, 0
    // Swapped:    -1, -2, 0
    // After fix:  -2, -1, 0
    const root = TreeNode.fromArray([-1, -2, 0]);
    const original = TreeNode.fromArray([-1, -2, 0]);
    // Swap root and left child
    [root!.val, root!.left!.val] = [root!.left!.val, root!.val];
    recoverTree(root);
    expect(root).toEqual(original);
  });
});
