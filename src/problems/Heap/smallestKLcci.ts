import { MaxHeap } from '@/utils/Heap';

export function smallestK(arr: number[], k: number): number[] {
  if (k <= 0 || arr === null || arr.length === 0) {
    return [];
  }
  const maxHeap = new MaxHeap<number>();
  for (const a of arr) {
    maxHeap.insert(a);
    while (maxHeap.size() > k) {
      maxHeap.extract();
    }
  }
  return maxHeap.toArray();
}
