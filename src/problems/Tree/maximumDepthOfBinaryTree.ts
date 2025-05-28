import type { TreeNode } from '@/utils/TreeNode';

export function maxDepth(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }
  const leftMaxDepth = maxDepth(root.left);
  const rightMaxDepth = maxDepth(root.right);
  return Math.max(leftMaxDepth, rightMaxDepth) + 1;
};
