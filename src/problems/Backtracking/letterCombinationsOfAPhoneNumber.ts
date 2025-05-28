export function letterCombinations(digits: string): string[] {
  const letterMap = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
  const res: string[] = [];
  if (digits.length === 0) {
    return res;
  }
  dfs(0, '');
  return res;

  function dfs(index: number, currentStr: string) {
    if (index === digits.length) {
      res.push(currentStr);
      return;
    }
    const digit = Number.parseInt(digits[index]);
    const letters = letterMap[digit];
    const len = currentStr.length;
    for (let i = 0; i < letters.length; i++) {
      currentStr += letters[i];
      dfs(index + 1, currentStr);
      currentStr = currentStr.slice(0, len);
    }
  };
}
