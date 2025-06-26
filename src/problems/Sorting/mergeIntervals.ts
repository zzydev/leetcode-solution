export function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0] - b[0]);
  const res: number[][] = [];
  let curL = intervals[0][0];
  let curR = intervals[0][1];
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] <= curR) {
      if (intervals[i][1] >= curR) {
        curR = intervals[i][1];
      }
    } else {
      res.push([curL, curR]);
      curL = intervals[i][0];
      curR = intervals[i][1];
    }
  }
  res.push([curL, curR]);
  return res;
}
