export class MyStack {
  queue: number[];
  cacheQueue: number[];
  constructor() {
    this.queue = [];
    this.cacheQueue = [];
  }

  push(x: number): void {
    this.queue.push(x);
  }

  pop(): number {
    if (this.empty()) {
      throw new Error('Stack is empty');
    }
    while (this.queue.length > 1) {
      const element = this.queue.shift();
      if (element !== undefined) {
        this.cacheQueue.push(element);
      }
    }
    const t = this.queue.pop();
    if (t === undefined) {
      throw new Error('Stack is empty');
    }
    [this.queue, this.cacheQueue] = [this.cacheQueue, this.queue];
    return t;
  }

  top(): number {
    const t = this.pop();
    this.push(t);
    return t;
  }

  empty(): boolean {
    return this.queue.length === 0;
  }
}
