import { Heap } from '@/utils/Heap';

export function topKFrequent(words: string[], k: number): string[] {
  const map = new Map<string, number>();
  const minHeap = new Heap<[string, number]>((a, b) => {
    if (a[1] === b[1]) {
      return a[0] > b[0];
    }
    return a[1] < b[1];
  });

  for (let i = 0; i < words.length; i++) {
    map.set(words[i], (map.get(words[i]) || 0) + 1);
  }

  for (const [str, freq] of map.entries()) {
    minHeap.insert([str, freq]);
    while (minHeap.size() > k) {
      minHeap.extract();
    }
  }
  let res: string[] = [];
  while (minHeap.size() > 0) {
    res.push(minHeap.extract()![0]);
  }
  res = res.reverse();
  return res;
};




