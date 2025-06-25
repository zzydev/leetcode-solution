import { isDigit } from '@/utils/isDigit';

export function letterCasePermutation(s: string): string[] {
  const res: string[] = [];
  let currentStr = '';
  dfs(0);
  return res;

  function dfs(index: number) {
    if (index === s.length) {
      res.push(currentStr);
      return;
    }
    const c = s[index];
    if (isDigit(c)) {
      currentStr += c;
      dfs(index + 1);

      currentStr = currentStr.slice(0, -1);
    } else {
      currentStr += c.toLocaleLowerCase();
      dfs(index + 1);
      currentStr = currentStr.slice(0, -1);

      currentStr += c.toLocaleUpperCase();
      dfs(index + 1);
      currentStr = currentStr.slice(0, -1);
    }
  }
}
