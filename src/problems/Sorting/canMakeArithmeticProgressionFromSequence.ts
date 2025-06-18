export function canMakeArithmeticProgression(arr: number[]): boolean {
  arr.sort((a, b) => a - b);
  for (let i = 2; i < arr.length; i++) {
    if ((arr[i] - arr[i - 1]) !== (arr[1] - arr[0])) {
      return false;
    }
  }
  return true;
};
