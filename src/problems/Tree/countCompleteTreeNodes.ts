import type { TreeNode } from '@/utils/TreeNode';

export function countNodes(root: TreeNode | null): number {
  if (root === null)
    return 0;
  return countNodes(root.left) + countNodes(root.right) + 1;
};
