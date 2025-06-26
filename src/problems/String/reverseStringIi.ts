export function reverseStr(s: string, k: number): string {
  const arr = s.split('');
  for (let i = 0; i < arr.length; i += 2 * k) {
    if (i + k <= arr.length) {
      reversePartOfString(arr, i, i + k - 1);
      continue;
    }
    reversePartOfString(arr, i, arr.length - 1);
  }
  return arr.join('');
}

function reversePartOfString(str: string[], start: number, end: number) {
  while (start < end) {
    [str[start], str[end]] = [str[end], str[start]];
    start++;
    end--;
  }
}
