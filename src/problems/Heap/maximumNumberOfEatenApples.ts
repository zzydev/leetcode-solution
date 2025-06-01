import { Heap } from '@/utils/Heap';

export function eatenApples(apples: number[], days: number[]): number {
  const minHeap = new Heap<[number, number]>((a, b) => a[1] < b[1]);
  let res = 0;
  let i = 0;
  while (i < apples.length || !minHeap.isEmpty()) {
    // 第i天得到 num 个苹果
    // 会在 bad 那天坏掉
    if (i < apples.length) {
      const num = apples[i];
      const bad = i + days[i];
      if (num > 0) {
        minHeap.insert([num, bad]);
      }
    }
    // 把已经过期的都扔掉
    while (!minHeap.isEmpty() && minHeap.peek()![1] <= i) {
      minHeap.extract();
    }
    if (!minHeap.isEmpty()) {
      let [num, bad] = minHeap.extract()!;
      res++;
      if (--num > 0) {
        minHeap.insert([num, bad]);
      }
    }
    i++;
  }
  return res;
};
