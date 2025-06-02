import { MaxHeap, MinHeap } from "@/utils/Heap";

export class MedianFinder {
    constructor() {
        
    }
    private left = new MaxHeap<number>();
    private right = new MinHeap<number>();
    addNum(num: number): void {
        this.left.insert(num);
        while (this.left.size() > this.right.size()) {
          let l = this.left.extract()!;
          this.right.insert(l);
        }
        if (!this.left.isEmpty() && !this.right.isEmpty()) {
          while (this.right.peek()! < this.left.peek()!) {
            let l = this.left.extract()!;
            let r = this.right.extract()!;
            this.left.insert(r);
            this.right.insert(l);
          }
        }
    }

    findMedian(): number {
        if (this.left.size() === this.right.size()) {
          if (!this.left.isEmpty()) {
            return (this.left.peek()! + this.right.peek()!) / 2;
          } else {
            return 0;
          }
        } else {
          return this.right.isEmpty() ? 0 : this.right.peek()!;
        }
    }
}
