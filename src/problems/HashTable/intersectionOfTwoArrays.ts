export function intersection(nums1: number[], nums2: number[]): number[] {
  const set = new Set();
  const res: number[] = [];
  for (const num of nums1) {
    set.add(num);
  }
  for (const num of nums2) {
    if (set.has(num)) {
      res.push(num);
      set.delete(num);
    }
  }
  return res;
}
