import { Heap } from '@/utils/Heap';

export function kClosest(points: number[][], k: number): number[][] {
  const maxHeap = new Heap<number>((a, b) => {
    const x1 = points[a][0];
    const x2 = points[b][0];
    const y1 = points[a][1];
    const y2 = points[b][1];
    const d1 = x1 * x1 + y1 * y1;
    const d2 = x2 * x2 + y2 * y2;
    return d1 > d2;
  });
  for (let i = 0; i < points.length; i++) {
    maxHeap.insert(i);
    while (maxHeap.size() > k) {
      maxHeap.extract();
    }
  }
  const res: number[][] = [];
  while (!maxHeap.isEmpty()) {
    const idx = maxHeap.peek();
    if (idx !== null) {
      res.push([points[idx][0], points[idx][1]]);
      maxHeap.extract();
    }
  }
  return res;
}
