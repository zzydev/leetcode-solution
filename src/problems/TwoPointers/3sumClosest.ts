export function threeSumClosest(nums: number[], target: number): number {
  let ans = nums[0] + nums[1] + nums[2];
  nums.sort((a, b) => a - b);
  const len = nums.length;
  for (let i = 0; i < len - 2; i++) {
    let l = i + 1;
    let r = len - 1;
    while (l < r) {
      if (
        Math.abs(nums[i] + nums[l] + nums[r] - target) < Math.abs(ans - target)
      ) {
        ans = nums[i] + nums[l] + nums[r];
      }
      if (nums[i] + nums[l] + nums[r] === target) {
        return target;
      } else if (nums[i] + nums[l] + nums[r] > target) {
        r--;
      } else {
        l++;
      }
    }
  }
  return ans;
}
