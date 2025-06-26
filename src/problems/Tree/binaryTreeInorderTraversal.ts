import type { TreeNode } from '@/utils/TreeNode';

class Command {
  constructor(
    public s: string,
    public node: TreeNode,
  ) {}
}
export function inorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = [];
  if (root === null) {
    return res;
  }
  const stack: Command[] = [];
  stack.push(new Command('go', root));
  while (stack.length > 0) {
    const command = stack.pop();
    if (command === undefined) {
      break;
    }
    if (command.s === 'print') {
      res.push(command.node.val);
    } else {
      if (command.node.right) {
        stack.push(new Command('go', command.node.right));
      }
      stack.push(new Command('print', command.node));
      if (command.node.left) {
        stack.push(new Command('go', command.node.left));
      }
    }
  }
  return res;
}
