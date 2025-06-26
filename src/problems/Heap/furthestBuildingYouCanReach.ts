import { MaxHeap } from '@/utils/Heap';

export function furthestBuilding(
  heights: number[],
  bricks: number,
  ladders: number,
): number {
  const maxHeap = new MaxHeap<number>();
  let totalBricksUsed = 0;
  let lastPos = 0;
  let prevHeight = heights[0];
  for (let i = 1; i < heights.length; i++) {
    const curHeight = heights[i];
    if (prevHeight > curHeight) {
      lastPos = i;
    } else {
      const delta = curHeight - prevHeight;
      maxHeap.insert(delta);
      totalBricksUsed += delta;
      if (totalBricksUsed > bricks && ladders > 0) {
        const largestDiff = maxHeap.extract();
        if (largestDiff === null) {
          break;
        }
        totalBricksUsed -= largestDiff;
        ladders--;
      }
      if (totalBricksUsed <= bricks) {
        lastPos = i;
      } else {
        break;
      }
    }
    prevHeight = curHeight;
  }
  return lastPos;
}
