import { MaxHeap, MinHeap } from '@/utils/Heap';

export class MedianFinder {
  constructor() {}
  private left = new MaxHeap<number>();
  private right = new MinHeap<number>();
  addNum(num: number): void {
    this.left.insert(num);
    while (this.left.size() > this.right.size()) {
      let l = this.left.extract();
      if (l === null) {
        return;
      }
      this.right.insert(l);
    }
    if (!this.left.isEmpty() && !this.right.isEmpty()) {
      while (
        (this.right.peek() ?? Number.MAX_SAFE_INTEGER) <
        (this.left.peek() ?? Number.MIN_SAFE_INTEGER)
      ) {
        let l = this.left.extract();
        let r = this.right.extract();
        if (l === null || r === null) {
          throw new Error('Heap extract returned null');
        }
        this.left.insert(r);
        this.right.insert(l);
      }
    }
  }

  findMedian(): number {
    if (this.left.size() === this.right.size()) {
      const leftPeek = this.left.peek();
      const rightPeek = this.right.peek();
      if (leftPeek !== null && rightPeek !== null) {
        return (leftPeek + rightPeek) / 2;
      } else {
        return 0;
      }
    } else {
      const rightPeek = this.right.peek();
      return rightPeek ?? 0;
    }
  }
}
