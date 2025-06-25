export function peakIndexInMountainArray(arr: number[]): number {
  if (arr === null || arr.length < 3) {
    return -1;
  }
  let l = 1;
  let r = arr.length - 1;
  while (l < r) {
    const m = l + ((r - l) >> 1);
    const direction = getSlopeDirection(arr, m);
    if (direction < 0) {
      l = m + 1;
    } else {
      r = m;
    }
  }
  return l;
}

function getSlopeDirection(nums: number[], i: number) {
  if (nums[i - 1] < nums[i] && nums[i] < nums[i + 1]) {
    return -1; // ascending
  } else if (nums[i - 1] < nums[i] && nums[i] > nums[i + 1]) {
    return 0; // peak
  } else {
    return 1; // descending
  }
}
