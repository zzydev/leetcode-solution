export class SortedStack {
  stack: number[];
  tmp: number[];
  constructor() {
    this.stack = [];
    this.tmp = [];
  }

  push(val: number): void {
    while (this.stack.length !== 0 && this.peek() < val) {
      this.tmp.push(this.stack.pop()!);
    }
    this.stack.push(val);
    while (this.tmp.length !== 0) {
      this.stack.push(this.tmp.pop()!);
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
