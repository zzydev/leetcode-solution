import type { TreeNode } from '@/utils/TreeNode';

export function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  const res: number[][] = [];
  const path: number[] = [];
  if (root === null) {
    return res;
  }
  path.push(root.val);
  dfs(root, targetSum - root.val);
  return res;

  function dfs(root: TreeNode, sum: number) {
    if (root.left === null && root.right === null && sum === 0) {
      res.push([...path]);
      return;
    }
    if (root.left === null && root.right === null) {
      return;
    }
    if (root.left !== null) {
      path.push(root.left.val);
      sum -= root.left.val;
      dfs(root.left, sum);
      sum += root.left.val;
      path.pop();
    }
    if (root.right !== null) {
      path.push(root.right.val);
      sum -= root.right.val;
      dfs(root.right, sum);
      sum += root.right.val;
      path.pop();
    }
  }
}
