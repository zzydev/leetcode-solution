export function dailyTemperatures(temperatures: number[]): number[] {
  const len = temperatures.length;
  const stack: number[] = [];
  const res: number[] = new Array(len).fill(0);
  for (let i = 0; i < len; i++) {
    while (stack.length !== 0 && temperatures[stack[stack.length - 1]] < temperatures[i]) {
      const index: number = stack.pop()!;
      res[index] = i - index;
    }
    stack.push(i);
  }
  return res;
};
