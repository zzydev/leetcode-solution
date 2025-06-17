export function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>();
  const res: string[][] = [];

  for (const str of strs) {
    const sortedStr = str.split('').sort().join('');
    if (!map.has(sortedStr)) {
      map.set(sortedStr, []);
    }
    map.get(sortedStr)?.push(str);
  }

  for (const item of map.values()) {
    res.push(item);
  }

  return res;
}
