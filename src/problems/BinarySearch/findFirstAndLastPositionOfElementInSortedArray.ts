export function searchRange(nums: number[], target: number): number[] {
  const ans: number[] = [-1, -1];
  if (nums == null || nums.length <= 0) {
    return ans;
  }

  const l = lowerBound(nums, target);
  const r = upperBound(nums, target);
  if (l == r) {
    return ans;
  }
  ans[0] = l;
  ans[1] = r - 1;
  return ans;
}

function lowerBound(nums: number[], target: number) {
  let l: number = 0; let r = nums.length;
  while (l < r) {
    const m = l + ((r - l) >> 1);
    if (nums[m] < target) {
      l = m + 1;
    }
    else {
      r = m;
    }
  }
  return l;
}

function upperBound(nums: number[], target: number) {
  let l: number = 0; let r = nums.length;
  while (l < r) {
    const m = l + ((r - l) >> 1);
    if (nums[m] <= target) {
      l = m + 1;
    }
    else {
      r = m;
    }
  }
  return l;
}
