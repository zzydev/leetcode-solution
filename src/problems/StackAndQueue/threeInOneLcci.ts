export class TripleInOne {
  stack: number[];
  stackSize: number;
  top: number[];

  constructor(stackSize: number) {
    this.stack = Array.from({ length: stackSize * 3 }).fill(0) as number[];
    this.stackSize = stackSize;
    this.top = [0, stackSize, stackSize * 2];
  }

  push(stackNum: number, value: number): void {
    if (this.top[stackNum] < this.stackSize * (stackNum + 1)) {
      this.stack[this.top[stackNum]] = value;
      this.top[stackNum]++;
    }
  }

  pop(stackNum: number): number {
    if (this.isEmpty(stackNum)) return -1;
    const ret = this.stack[this.top[stackNum] - 1];
    this.top[stackNum]--;
    return ret;
  }

  peek(stackNum: number): number {
    if (this.isEmpty(stackNum)) return -1;
    return this.stack[this.top[stackNum] - 1];
  }

  isEmpty(stackNum: number): boolean {
    return this.top[stackNum] === stackNum * this.stackSize;
  }
}
