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
      this.cacheQueue.push(this.queue.shift()!);
    }
    const t = this.queue.pop()!;
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
