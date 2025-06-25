export function threeSum(nums: number[]): number[][] {
  const res = [] as number[][];
  nums.sort((a, b) => a - b);
  const len = nums.length;
  if (len < 3) {
    return res;
  }
  for (let i = 0; i < len - 2; i++) {
    if (i !== 0 && nums[i] === nums[i - 1]) continue;
    for (let j = i + 1, k = len - 1; j < k; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      while (j < k - 1 && nums[i] + nums[j] + nums[k - 1] >= 0) {
        k--;
      }
      if (nums[i] + nums[j] + nums[k] === 0) {
        res.push([nums[i], nums[j], nums[k]]);
      }
    }
  }
  return res;
}
