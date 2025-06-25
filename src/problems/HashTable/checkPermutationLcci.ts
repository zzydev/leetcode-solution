export function CheckPermutation(s1: string, s2: string): boolean {
  if (s1.length !== s2.length) {
    return false;
  }
  const map = new Map<string, number>();
  for (const c of s1) {
    map.set(c, (map.get(c) ?? 0) + 1);
  }
  for (const c of s2) {
    if (!map.has(c)) {
      return false;
    }
    const cnt = map.get(c) ?? 0;
    if (cnt === 0) {
      return false;
    }
    map.set(c, cnt - 1);
  }
  return true;
}
