import { isDigit } from '@/utils/isDigit';

export function calculate(s: string): number {
  const nums: number[] = [];
  const ops: string[] = [];
  const len = s.length;
  let i = 0;
  while (i < len) {
    const c = s[i];
    if (c === ' ') {
      i++;
    }
    else if (isDigit(c)) {
      let num = 0;
      while (i < len && isDigit(s[i])) {
        num = num * 10 + s[i].charCodeAt(0) - '0'.charCodeAt(0);
        i++;
      }
      nums.push(num);
    }
    else {
      if (ops.length === 0 || prior(c, ops[ops.length - 1])) {
        ops.push(c);
      }
      else {
        while (ops.length !== 0 && !prior(c, ops[ops.length - 1])) {
          fetchAndCal(nums, ops);
        }
        ops.push(c);
      }
      i++;
    }
  }
  while (ops.length !== 0) {
    fetchAndCal(nums, ops);
  }
  return nums.pop()!;
};

function prior(a: string, b: string) {
  if ((a === '*' || a === '/') && (b === '+' || b === '-')) {
    return true;
  }
  else {
    return false;
  }
}

function fetchAndCal(nums: number[], ops: string[]) {
  const num2 = nums.pop();
  const num1 = nums.pop();
  const op = ops.pop();
  const ret = cal(op!, num1!, num2!);
  nums.push(ret);
}

function cal(op: string, num1: number, num2: number): number {
  switch (op) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      if (num2 === 0) {
        throw new Error('Division by zero is not allowed');
      }
      return Number.parseInt(String(num1 / num2));
    default:
      throw new Error(`Invalid operator: ${op}`);
  }
}
