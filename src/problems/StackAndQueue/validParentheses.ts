export function isValid(s: string): boolean {
  const stack: string[] = [];
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === '(' || c === '{' || c === '[') {
      stack.push(c);
    }
    else if (c === ')') {
      if (stack.length === 0 || stack[stack.length - 1] !== '(') {
        return false;
      }
      stack.pop();
    }
    else if (c === '}') {
      if (stack.length === 0 || stack[stack.length - 1] !== '{') {
        return false;
      }
      stack.pop();
    }
    else if (c === ']') {
      if (stack.length === 0 || stack[stack.length - 1] !== '[') {
        return false;
      }
      stack.pop();
    }
    else {
      return false;
    }
  }
  return stack.length === 0;
};
