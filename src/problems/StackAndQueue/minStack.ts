export class MinStack {
  constructor(
    private stackDate: number[] = [],
    private stackMin: number[] = []
  ) {
    this.stackDate = [];
    this.stackMin = [];
  }
  push(val: number): void {
    if (this.stackMin.length === 0) {
      this.stackMin.push(val);
    } else if (val <= this.getMin()) {
      this.stackMin.push(val);
    }
    this.stackDate.push(val);
  }

  pop(): void {
    if (this.stackDate.length === 0) {
      throw new Error("Stack is empty");
    }
    let value = this.stackDate.pop();
    if (value === this.getMin()) {
      this.stackMin.pop();
    }
  }

  top(): number {
    return this.stackDate[this.stackDate.length - 1];
  }

  getMin(): number {
    return this.stackMin[this.stackMin.length - 1];
  }
}
