export function evalRPN(tokens: string[]): number {
  const stack: number[] = [];
  for (const token of tokens) {
    if (token === '+' || token === '-' || token === '*' || token === '/') {
      const num2 = stack.pop();
      const num1 = stack.pop();
      if (num1 === undefined || num2 === undefined) {
        throw new Error('Unexpected undefined value in stack');
      }
      if (token === '+') {
        stack.push(num1 + num2);
      }
      if (token === '-') {
        stack.push(num1 - num2);
      }
      if (token === '*') {
        stack.push(num1 * num2);
      }
      if (token === '/') {
        stack.push(Number.parseInt(String(num1 / num2)));
      }
    } else {
      stack.push(+token);
    }
  }
  return stack[0];
}
