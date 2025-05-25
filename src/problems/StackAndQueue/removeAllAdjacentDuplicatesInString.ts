export function removeDuplicates(s: string): string {
  const stack: string[] = [];
  for (const c of s) {
    if (c !== stack[stack.length - 1]) {
      stack.push(c);
    }
    else {
      stack.pop();
    }
  }
  return stack.join('');
};
