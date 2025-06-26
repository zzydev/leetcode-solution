export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }
  const map_s = new Map();
  const map_t = new Map();
  for (const c of s) {
    map_s.set(c, ((map_s.get(c) as number) || 0) + 1);
  }
  for (const c of t) {
    map_t.set(c, ((map_t.get(c) as number) || 0) + 1);
  }

  for (const [key, value] of map_s.entries()) {
    if (map_t.get(key) !== value) {
      return false;
    }
  }
  return true;
}
