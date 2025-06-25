export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(
    val: number = 0,
    left: TreeNode | null = null,
    right: TreeNode | null = null,
  ) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  static fromArray(arr: (number | null)[]): TreeNode | null {
    if (arr.length === 0 || arr[0] === null) return null;

    const root = new TreeNode(arr[0] as number);
    const queue: TreeNode[] = [root];
    let i = 1;

    while (queue.length > 0 && i < arr.length) {
      const current = queue.shift();
      if (!current) break; // 当队列中取出 null 时，理论上不会发生，这里做防御性处理

      if (i < arr.length && arr[i] !== null) {
        current.left = new TreeNode(arr[i] as number);
        queue.push(current.left);
      }
      i++;

      if (i < arr.length && arr[i] !== null) {
        current.right = new TreeNode(arr[i] as number);
        queue.push(current.right);
      }
      i++;
    }

    return root;
  }

  toArray(): (number | null)[] {
    const result: (number | null)[] = [];
    const queue: (TreeNode | null)[] = [this];

    while (queue.length > 0) {
      const current = queue.shift();
      if (current === null) {
        result.push(null);
        continue;
      }
      // 这里通过类型断言明确 current 是 TreeNode 类型，因为前面已排除 null 情况
      const node = current as TreeNode;
      result.push(node.val);
      queue.push(node.left);
      queue.push(node.right);
    }

    while (result.length > 0 && result[result.length - 1] === null) {
      result.pop();
    }

    return result;
  }
}
