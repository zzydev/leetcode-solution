import type { TreeNode } from '@/utils/TreeNode';

export function isSymmetric(root: TreeNode | null): boolean {
  if (root === null) {
    return true;
  }
  return compare(root.left, root.right);
  function compare(left: TreeNode | null, right: TreeNode | null): boolean {
    if (left === null && right !== null) {
      return false;
    } else if (left !== null && right === null) {
      return false;
    } else if (left === null && right === null) {
      return true;
    } else if (left !== null && right !== null && left.val !== right.val) {
      return false;
    } else {
      if (left === null || right === null) {
        return false;
      }
      return compare(left.left, right.right) && compare(left.right, right.left);
    }
  }
}
