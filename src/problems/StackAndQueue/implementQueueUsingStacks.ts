export class MyQueue {
  stackPush: number[];
  stackPop: number[];
  constructor() {
    this.stackPush = [];
    this.stackPop = [];
  }

  pushToPop() {
    if (this.stackPop.length === 0) {
      while (this.stackPush.length !== 0) {
        this.stackPop.push(this.stackPush.pop()!);
      }
    }
  }

  push(x: number): void {
    this.stackPush.push(x);
    this.pushToPop();
  }

  pop(): number {
    if (this.empty()) {
      throw new Error('Queue is empty');
    }
    this.pushToPop();
    return this.stackPop.pop()!;
  }

  peek(): number {
    if (this.empty()) {
      throw new Error('Queue is empty');
    }
    this.pushToPop();
    return this.stackPop[this.stackPop.length - 1];
  }

  empty(): boolean {
    if (this.stackPush.length === 0 && this.stackPop.length === 0) {
      return true;
    }
    else {
      return false;
    }
  }
}
