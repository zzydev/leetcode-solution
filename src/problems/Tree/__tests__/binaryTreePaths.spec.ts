import { describe, expect, it } from 'vitest';
import { binaryTreePaths } from '@/problems/Tree/binaryTreePaths';
import { TreeNode } from '@/utils/TreeNode';

describe('binaryTreePaths', () => {
  it('should return empty array for empty tree', () => {
    expect(binaryTreePaths(null)).toEqual([]);
  });

  it('should return single path for tree with only root', () => {
    const root = new TreeNode(1);
    expect(binaryTreePaths(root)).toEqual(['1']);
  });

  it('should return all paths for simple tree', () => {
    //     1
    //    / \
    //   2   3
    const root = TreeNode.fromArray([1, 2, 3]);
    expect(binaryTreePaths(root)).toEqual(['1->2', '1->3']);
  });

  it('should include paths to all leaf nodes', () => {
    //       1
    //      / \
    //     2   3
    //    /
    //   5
    const root = TreeNode.fromArray([1, 2, 3, 5]);
    expect(binaryTreePaths(root)).toEqual(['1->2->5', '1->3']);
  });

  it('should handle tree with multiple levels', () => {
    //       1
    //      / \
    //     2   3
    //    / \
    //   4   5
    const root = TreeNode.fromArray([1, 2, 3, 4, 5]);
    expect(binaryTreePaths(root)).toEqual(['1->2->4', '1->2->5', '1->3']);
  });

  it('should handle tree with only left children', () => {
    //     1
    //    /
    //   2
    //  /
    // 3
    const root = TreeNode.fromArray([1, 2, null, 3]);
    expect(binaryTreePaths(root)).toEqual(['1->2->3']);
  });

  it('should handle tree with only right children', () => {
    //     1
    //      \
    //       2
    //        \
    //         3
    const root = TreeNode.fromArray([1, null, 2, null, 3]);
    expect(binaryTreePaths(root)).toEqual(['1->2->3']);
  });

  it('should handle tree with uneven branches', () => {
    //     1
    //    / \
    //   2   3
    //    \
    //     5
    const root = TreeNode.fromArray([1, 2, 3, null, 5]);
    expect(binaryTreePaths(root)).toEqual(['1->2->5', '1->3']);
  });

  it('should handle tree with null nodes in the middle', () => {
    //     1
    //    / \
    //   2   3
    //  / \
    // 4   null
    const root = TreeNode.fromArray([1, 2, 3, 4, null]);
    expect(binaryTreePaths(root)).toEqual(['1->2->4', '1->3']);
  });

  it('should handle tree with negative values', () => {
    //      -1
    //      / \
    //    -2   3
    //    /
    //  -4
    const root = TreeNode.fromArray([-1, -2, 3, -4]);
    expect(binaryTreePaths(root)).toEqual(['-1->-2->-4', '-1->3']);
  });
});
