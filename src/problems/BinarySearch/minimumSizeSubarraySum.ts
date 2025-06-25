export function minSubArrayLen(target: number, nums: number[]): number {
  let l = 1;
  let r = nums.length + 1;
  while (l < r) {
    const m = l + ((r - l) >> 1);
    const isPossible = hasSubarrayWithSumAtLeast(nums, m, target);
    if (isPossible < 0) {
      l = m + 1;
    } else {
      r = m;
    }
  }
  return l > nums.length ? 0 : l;
}

function hasSubarrayWithSumAtLeast(
  nums: number[],
  len: number,
  target: number,
) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (i < len - 1) {
      continue;
    }
    if (sum >= target) {
      return 0;
    }
    sum -= nums[i - (len - 1)];
  }
  return -1;
}
