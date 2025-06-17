export function CheckPermutation(s1: string, s2: string): boolean {
  if (s1.length !== s2.length) {
    return false;
  }
  const map = new Map<string, number>();
  for (let i = 0; i < s1.length; i++) {
    map.set(s1[i], (map.get(s1[i]) ?? 0) + 1);
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
};
