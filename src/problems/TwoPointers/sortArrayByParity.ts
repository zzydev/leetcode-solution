export function sortArrayByParity(nums: number[]): number[] {
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    while (nums[l] % 2 === 0) {
      l++;
    }
    while (nums[r] % 2 === 1) {
      r--;
    }
    if (l < r) {
      [nums[l], nums[r]] = [nums[r], nums[l]];
      l++;
      r--;
    }
  }
  return nums;
}
