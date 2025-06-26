import type { TreeNode } from '@/utils/TreeNode';
import { isSameTree } from './sameTree';

export function isSubtree(
  root: TreeNode | null,
  subRoot: TreeNode | null,
): boolean {
  if (root === subRoot || subRoot === null) {
    return true;
  }
  if (root === null) {
    return false;
  }
  return (
    isSameTree(root, subRoot) ||
    isSubtree(root.left, subRoot) ||
    isSubtree(root.right, subRoot)
  );
}
