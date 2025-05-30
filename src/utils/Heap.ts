type CompareFunction<T> = (a: T, b: T) => boolean;

export class Heap<T> {
  protected data: T[] = [];
  protected compare: CompareFunction<T>;

  constructor(compare?: CompareFunction<T>) {
    this.compare = compare || ((a, b) => a > b);
  }

  private getParentIndex(index: number): number {
    if (index === 0)
      throw new Error('index-0 doesn\'t have parent');
    return Math.floor((index - 1) / 2);
  }

  private getLeftChildIndex(index: number): number {
    return 2 * index + 1;
  }

  private getRightChildIndex(index: number): number {
    return 2 * index + 2;
  }

  private siftUp(index: number): void {
    let currentIndex = index;
    const element = this.data[currentIndex];

    while (currentIndex > 0) {
      const parentIndex = this.getParentIndex(currentIndex);
      const parentElement = this.data[parentIndex];

      if (!this.compare(element, parentElement)) {
        break;
      }

      this.data[currentIndex] = parentElement;
      currentIndex = parentIndex;
    }

    this.data[currentIndex] = element;
  }

  private siftDown(index: number): void {
    const element = this.data[index];
    const size = this.size();

    while (this.getLeftChildIndex(index) < size) {
      let childIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);

      if (rightChildIndex < size && this.compare(this.data[rightChildIndex], this.data[childIndex])) {
        childIndex = rightChildIndex;
      }

      if (!this.compare(this.data[childIndex], element)) {
        break;
      }

      this.data[index] = this.data[childIndex];
      index = childIndex;
    }

    this.data[index] = element;
  }

  public insert(element: T): void {
    this.data.push(element);
    this.siftUp(this.size() - 1);
  }

  public extract(): T | null {
    if (this.size() === 0) {
      return null;
    }

    const root = this.data[0];
    const lastElement = this.data.pop()!;

    if (this.size() > 0) {
      this.data[0] = lastElement;
      this.siftDown(0);
    }

    return root;
  }

  public peek(): T | null {
    return this.size() > 0 ? this.data[0] : null;
  }

  public size(): number {
    return this.data.length;
  }

  public isEmpty(): boolean {
    return this.size() === 0;
  }

  public static heapify<T>(elements: T[], compare?: CompareFunction<T>): Heap<T> {
    const heap = new Heap<T>(compare);
    heap.data = [...elements];

    if (heap.size() <= 1)
      return heap;

    const startIndex = Math.floor((heap.size() - 2) / 2);
    for (let i = startIndex; i >= 0; i--) {
      heap.siftDown(i);
    }

    return heap;
  }

  public toArray(): T[] {
    return [...this.data];
  }
}

export class MaxHeap<T> extends Heap<T> {
  constructor() {
    super((a, b) => a > b);
  }
}

export class MinHeap<T> extends Heap<T> {
  constructor() {
    super((a, b) => a < b);
  }
}
