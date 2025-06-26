export function removeDuplicates(s: string, k: number): string {
  const stack: Array<Pair> = [];
  const n = s.length;
  for (let i = 0; i < n; i++) {
    const c = s[i];
    if (stack.length === 0) {
      stack.push(new Pair(c, 1));
      continue;
    }
    // stack is not empty
    const top = stack[stack.length - 1];
    if (top.c !== c) {
      stack.push(new Pair(c, 1));
      continue;
    }
    if (top.count === k - 1) {
      stack.pop();
      continue;
    }
    top.count++;
  }
  let res = '';
  while (stack.length !== 0) {
    const p = stack.pop();
    if (p !== undefined) {
      for (let i = 0; i < p.count; i++) {
        res += p.c;
      }
    }
  }
  return res.split('').reverse().join('');
}

class Pair {
  c: string;
  count: number;
  constructor(c: string, count: number) {
    this.c = c;
    this.count = count;
  }
}
