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
    map.set(num, (map.get(num)! + 1));
  }
  let k = 0;
  for (let i = 0; i < arr2.length; i++) {
    const cnt = map.get(arr2[i]) ?? 0;
    for (let j = 0; j < cnt; j++) {
      res[k + j] = arr2[i];
    }
    k += cnt;
  }
  arr1.sort((a, b) => a - b);
  for (let i = 0; i < arr1.length; i++) {
    if (!map.has(arr1[i])) {
      res[k++] = arr1[i];
    }
  }
  return res;
};
