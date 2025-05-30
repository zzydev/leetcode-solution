import { Heap } from '@/utils/Heap';

export function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
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
    result.unshift(minHeap.extract()![0]);
  }
  return result;
}
