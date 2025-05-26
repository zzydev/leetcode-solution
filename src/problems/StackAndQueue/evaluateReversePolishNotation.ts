export function evalRPN(tokens: string[]): number {
  const stack: number[] = [];
  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i] === '+' || tokens[i] === '-' || tokens[i] === '*' || tokens[i] === '/') {
      const num2: number = stack.pop()!;
      const num1: number = stack.pop()!;
      if (tokens[i] === '+') {
        stack.push(num1 + num2);
      }
      if (tokens[i] === '-') {
        stack.push(num1 - num2);
      }
      if (tokens[i] === '*') {
        stack.push(num1 * num2);
      }
      if (tokens[i] === '/') {
        stack.push(Number.parseInt(String(num1 / num2)));
      }
    }
    else {
      stack.push(+tokens[i]);
    }
  }
  const res = stack.pop()!;
  return res;
};
