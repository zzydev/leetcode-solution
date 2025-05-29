import type { TreeNode } from '@/utils/TreeNode';

export function sumOfLeftLeaves(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }
  let sum = 0;
  if (root.left !== null) {
    if (root.left.left === null && root.left.right === null) {
      sum += root.left.val;
    }
  }
  sum += sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
  return sum;
};
