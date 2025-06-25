import { MaxHeap } from '@/utils/Heap';

export function minRefuelStops(
  target: number,
  startFuel: number,
  stations: number[][],
): number {
  let i = 0;
  // 当前汽车的状态 curPos位置，fuelLeft还剩下多少汽油
  let curPos = 0;
  let fuelLeft = startFuel;
  // 副油箱
  let maxHeap = new MaxHeap<number>();
  // 从副油箱往汽车加油的次数
  let addFuelTimes = 0;
  while (curPos + fuelLeft < target) {
    // 默认期望的下一站，站点设置为target
    // 此时能加的汽油为0
    let pos = target;
    let fuel = 0;
    // 如果有位于target之前的站点, 那么更新
    // 加油站的位置，以及能加到副油箱的油量
    if (i < stations.length && stations[i][0] <= target) {
      pos = stations[i][0];
      fuel = stations[i][1];
    }
    // 如果当前汽车的状态，不能到达期望的下一站
    while (curPos + fuelLeft < pos) {
      // 拿出副油箱
      // 副油箱没有油了，
      if (maxHeap.isEmpty()) {
        return -1;
      }
      // 从副油箱里面拿出最大的汽油加上去
      const curMaxFuel = maxHeap.peek() ?? 0;
      maxHeap.extract();
      fuelLeft += curMaxFuel;
      // 加油次数++
      addFuelTimes++;
    }
    // 现在可以到达期望的下一站了
    // 不过需要把消耗的汽油扣掉
    const fuelCost = pos - curPos;
    // 更新当前汽车的状态
    fuelLeft -= fuelCost;
    curPos = pos;
    // 这个汽油站里面的汽油加到副油箱
    if (fuel > 0) {
      maxHeap.insert(fuel);
    }
    // 这个站就过去了
    i++;
  }
  return curPos + fuelLeft >= target ? addFuelTimes : -1;
}
