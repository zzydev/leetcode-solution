import { Heap } from '@/utils/Heap';

export function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map<number, number>();
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  const minHeap = new Heap<[number, number]>((a, b) => a[1] < b[1]);

  for (const [num, freq] of map.entries()) {
    minHeap.insert([num, freq]);
    while (minHeap.size() > k) {
      minHeap.extract();
    }
  }

  const result: number[] = [];
  while (!minHeap.isEmpty()) {
    const [num] = minHeap.extract() as [number, number];
    result.unshift(num);
  }
  return result;
}
