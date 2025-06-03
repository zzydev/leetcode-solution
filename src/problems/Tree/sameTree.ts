import type { TreeNode } from '@/utils/TreeNode';

export function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p === q)
    return true;
  if (p === null || q === null)
    return false;
  return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
