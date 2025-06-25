export function twoSum(nums: number[], target: number): number[] {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i] as number[];
    }
    map.set(nums[i], i);
  }
  return [-1, -1];
}
