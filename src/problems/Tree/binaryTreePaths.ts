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
  for (const str of left) {
    res.push(`${root.val}->${str}`);
  }
  const right = binaryTreePaths(root.right);
  for (const str of right) {
    res.push(`${root.val}->${str}`);
  }
  return res;
}
