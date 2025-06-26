export class SortedStack {
  stack: number[];
  tmp: number[];
  constructor() {
    this.stack = [];
    this.tmp = [];
  }

  push(val: number): void {
    while (this.stack.length !== 0 && this.peek() < val) {
      const element = this.stack.pop();
      if (element === undefined) {
        throw new Error('Stack is empty');
      }
      this.tmp.push(element);
    }
    this.stack.push(val);
    while (this.tmp.length !== 0) {
      const element = this.tmp.pop();
      if (element === undefined) {
        throw new Error('Stack is empty');
      }
      this.stack.push(element);
    }
  }

  pop(): void {
    if (this.isEmpty()) {
      throw new Error('Stack is empty');
    }
    this.stack.pop();
  }

  peek(): number {
    if (this.isEmpty()) {
      return -1;
    }
    return this.stack[this.stack.length - 1];
  }

  isEmpty(): boolean {
    return this.stack.length === 0;
  }
}
