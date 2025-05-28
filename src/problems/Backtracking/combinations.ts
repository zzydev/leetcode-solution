export function combine(n: number, k: number): number[][] {
  const res: number[][] = [];
  const path: number[] = [];
  dfs(1);
  return res;

  function dfs(index: number) {
    if (path.length === k) {
      res.push([...path]);
      return;
    }
    for (let i = index; i <= n; i++) {
      path.push(i);
      dfs(i + 1);
      path.pop();
    }
  }
};
