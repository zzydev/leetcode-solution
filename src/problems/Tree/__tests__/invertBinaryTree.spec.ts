import { describe, expect, it } from 'vitest';
import { invertTree } from '@/problems/Tree/invertBinaryTree';
import { TreeNode } from '@/utils/TreeNode';

describe('invertTree', () => {
  it('should return null for empty tree', () => {
    expect(invertTree(null)).toBeNull();
  });

  it('should return same node for single node tree', () => {
    const root = new TreeNode(1);
    const inverted = invertTree(root);
    expect(inverted).toBe(root);
    expect(inverted?.val).toBe(1);
    expect(inverted?.left).toBeNull();
    expect(inverted?.right).toBeNull();
  });

  it('should invert tree with two levels', () => {
    //     1
    //    / \
    //   2   3
    // 变为
    //     1
    //    / \
    //   3   2
    const root = TreeNode.fromArray([1, 2, 3]);
    const inverted = invertTree(root);
    expect(inverted?.toArray()).toEqual([1, 3, 2]);
  });

  it('should handle tree with three levels', () => {
    //       4
    //      / \
    //     2   7
    //    / \ / \
    //   1  3 6  9
    // 变为
    //       4
    //      / \
    //     7   2
    //    / \ / \
    //   9  6 3  1
    const root = TreeNode.fromArray([4, 2, 7, 1, 3, 6, 9]);
    const inverted = invertTree(root);
    expect(inverted?.toArray()).toEqual([4, 7, 2, 9, 6, 3, 1]);
  });

  it('should handle tree with uneven branches', () => {
    //     1
    //    / \
    //   2   3
    //  /     \
    // 4       5
    // 变为
    //     1
    //    / \
    //   3   2
    //  /     \
    // 5       4
    const root = TreeNode.fromArray([1, 2, 3, 4, null, null, 5]);
    const inverted = invertTree(root);
    expect(inverted?.toArray()).toEqual([1, 3, 2, 5, null, null, 4]);
  });

  it('should handle tree with only left children', () => {
    //     1
    //    /
    //   2
    //  /
    // 3
    // 变为
    //     1
    //      \
    //       2
    //        \
    //         3
    const root = TreeNode.fromArray([1, 2, null, 3]);
    const inverted = invertTree(root);
    expect(inverted?.toArray()).toEqual([1, null, 2, null, 3]);
  });

  it('should handle tree with only right children', () => {
    //     1
    //      \
    //       2
    //        \
    //         3
    // 变为
    //     1
    //    /
    //   2
    //  /
    // 3
    const root = TreeNode.fromArray([1, null, 2, null, 3]);
    const inverted = invertTree(root);
    expect(inverted?.toArray()).toEqual([1, 2, null, 3]);
  });

  it('should handle complex tree structure', () => {
    //       1
    //      / \
    //     2   3
    //    / \
    //   4   5
    //  /     \
    // 6       7
    // 变为
    //       1
    //      / \
    //     3   2
    //        / \
    //       5   4
    //      /     \
    //     7       6
    const root = TreeNode.fromArray([1, 2, 3, 4, 5, null, null, 6, null, null, 7]);
    const inverted = invertTree(root);
    expect(inverted?.toArray()).toEqual([1, 3, 2, null, null, 5, 4, 7, null, null, 6]);
  });
});
