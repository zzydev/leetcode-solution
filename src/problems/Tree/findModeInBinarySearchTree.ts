import type { TreeNode } from '@/utils/TreeNode';

export function findMode(root: TreeNode | null): number[] {
  if (root === null) {
    return [0];
  }
  let ans: number[] = [];
  let cnt = 0;
  let preValue = Number.MIN_SAFE_INTEGER;
  let ansCnt = 0;
  inorderTraversal(root);
  return ans;

  function inorderTraversal(root: TreeNode | null) {
    if (root !== null) {
      inorderTraversal(root.left);
      if (cnt === 0 || preValue === root.val) {
        cnt++;
        preValue = root.val;
      }
      else {
        preValue = root.val;
        cnt = 1;
      }
      if (cnt > ansCnt) {
        ans = [preValue];
        ansCnt = cnt;
      }
      else if (cnt === ansCnt) {
        ans.push(preValue);
      }
      inorderTraversal(root.right);
    }
  }
};
