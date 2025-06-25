import { Heap } from '@/utils/Heap';

export function kSmallestPairs(
  nums1: number[],
  nums2: number[],
  k: number,
): number[][] {
  if (nums1.length === 0 || nums2.length === 0 || k <= 0) {
    return [];
  }
  const minHeap = new Heap<[number, number]>((a, b) => {
    return nums1[a[0]] + nums2[a[1]] < nums1[b[0]] + nums2[b[1]];
  });

  for (let i = 0; i < nums1.length; i++) {
    minHeap.insert([i, 0]);
  }

  const res: number[][] = [];
  for (let count = 0; count < k && !minHeap.isEmpty(); count++) {
    const pair = minHeap.extract();
    if (pair === null) break;
    const [i, j] = pair;
    res.push([nums1[i], nums2[j]]);

    if (j + 1 < nums2.length) {
      minHeap.insert([i, j + 1]);
    }
  }
  return res;
}
