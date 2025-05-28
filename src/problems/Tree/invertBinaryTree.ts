import {TreeNode}  from '@/utils/TreeNode'
export function invertTree(root: TreeNode | null): TreeNode | null {
    if (root === null) {
      return null;
    }
    invertTree(root.left);
    invertTree(root.right);
    [root.left, root.right] = [root.right, root.left];
    return root;
};