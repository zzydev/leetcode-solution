export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val: number = 0, left: TreeNode | null = null, right: TreeNode | null = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  static fromArray(arr: (number | null)[]): TreeNode | null {
    if (arr.length === 0 || arr[0] === null) return null;
    
    const root = new TreeNode(arr[0]);
    const queue: TreeNode[] = [root];
    let i = 1;
    
    while (queue.length > 0 && i < arr.length) {
      const current = queue.shift()!;
      
      if (i < arr.length && arr[i] !== null) {
        current.left = new TreeNode(arr[i]!);
        queue.push(current.left);
      }
      i++;
      
      if (i < arr.length && arr[i] !== null) {
        current.right = new TreeNode(arr[i]!);
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
      
      result.push(current!.val);
      
      queue.push(current!.left);
      queue.push(current!.right);
    }
    
    while (result.length > 0 && result[result.length - 1] === null) {
      result.pop();
    }
    
    return result;
  }
}    