import type { TreeNode } from '@/utils/TreeNode';

export function recoverTree(root: TreeNode | null): void {
  let first: TreeNode | null = null;
  let second: TreeNode | null = null;
  let pre: TreeNode | null = null;
  inorderTraversal(root);
  if (first !== null && second !== null) {
    swap(first, second);
  }

  function swap(first: TreeNode, second: TreeNode) {
    [first.val, second.val] = [second.val, first.val];
  }

  function check(cur: TreeNode) {
    if (pre !== null && pre.val > cur.val) {
      if (first === null) {
        first = pre;
      }
      second = cur;
    }
    pre = cur;
  }

  function inorderTraversal(root: TreeNode | null) {
    if (root !== null) {
      inorderTraversal(root.left);
      check(root);
      inorderTraversal(root.right);
    }
  }
}
