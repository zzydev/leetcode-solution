export function subsets(nums: number[]): number[][] {
  const res: number[][] = [];
  const path: number[] = [];
  dfs(nums, 0);
  return res;

  function dfs(nums: number[], index: number) {
    res.push([...path]);
    if (index === nums.length) {
      return;
    }
    for (let i = index; i < nums.length; i++) {
      path.push(nums[i]);
      dfs(nums, i + 1);
      path.pop();
    }
  }
};
