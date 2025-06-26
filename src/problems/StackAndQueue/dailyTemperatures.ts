export function dailyTemperatures(temperatures: number[]): number[] {
  const len = temperatures.length;
  const stack: number[] = [];
  const res: number[] = Array.from({ length: len }).fill(0) as number[];
  for (let i = 0; i < len; i++) {
    while (
      stack.length !== 0 &&
      temperatures[stack[stack.length - 1]] < temperatures[i]
    ) {
      const index = stack.pop() as number;
      res[index] = i - index;
    }
    stack.push(i);
  }
  return res;
}
