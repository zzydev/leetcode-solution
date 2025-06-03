import type { TreeNode } from '@/utils/TreeNode';

export function isValidBST(root: TreeNode | null): boolean {
  return preOrder(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
};

function preOrder(root: TreeNode | null, l: number, r: number): boolean {
  if (root === null) {
    return true;
  }
  if (!(l < root.val && root.val < r)) {
    return false;
  }
  return preOrder(root.left, l, root.val) && preOrder(root.right, root.val, r);
}
