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
        const element = this.stackPush.pop();
        if (element !== undefined) {
          this.stackPop.push(element);
        }
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
    const element = this.stackPop.pop();
    if (element === undefined) {
      throw new Error('Queue is empty');
    }
    return element;
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
    } else {
      return false;
    }
  }
}
