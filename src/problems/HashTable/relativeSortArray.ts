export function relativeSortArray(arr1: number[], arr2: number[]): number[] {
  const map = new Map<number, number>();
  const res: number[] = [];
  for (const num of arr2) {
    map.set(num, 0);
  }
  for (const num of arr1) {
    if (!map.has(num)) {
      continue;
    }
    map.set(num, (map.get(num) ?? 0) + 1);
  }
  let k = 0;
  for (const num of arr2) {
    const cnt = map.get(num) ?? 0;
    for (let j = 0; j < cnt; j++) {
      res[k + j] = num;
    }
    k += cnt;
  }
  arr1.sort((a, b) => a - b);
  for (const num of arr1) {
    if (!map.has(num)) {
      res[k++] = num;
    }
  }
  return res;
}
