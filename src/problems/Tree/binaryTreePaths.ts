import type { TreeNode } from '@/utils/TreeNode';

export function binaryTreePaths(root: TreeNode | null): string[] {
  const res: string[] = [];
  if (root === null) {
    return res;
  }
  if (root.left === null && root.right === null) {
    res.push(String(root.val));
    return res;
  }
  const left = binaryTreePaths(root.left);
  for (let i = 0; i < left.length; i++) {
    res.push(`${root.val}->${left[i]}`);
  }
  const right = binaryTreePaths(root.right);
  for (let i = 0; i < right.length; i++) {
    res.push(`${root.val}->${right[i]}`);
  }
  return res;
};
