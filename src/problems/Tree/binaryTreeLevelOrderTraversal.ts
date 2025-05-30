import type { TreeNode } from '@/utils/TreeNode';

export function levelOrder(root: TreeNode | null): number[][] {
  const queue: TreeNode[] = [];
  if (root !== null) {
    queue.push(root);
  }
  const res: number[][] = [];
  while (queue.length > 0) {
    const len = queue.length;
    const tmp: number[] = [];
    for (let i = 0; i < len; i++) {
      const node = queue.shift()!;
      tmp.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    res.push(tmp);
  }
  return res;
};
