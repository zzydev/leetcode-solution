export function originalDigits(s: string): string {
  const nums = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  const order: number[] = [0, 8, 3, 2, 6, 4, 5, 1, 7, 9];
  const cnt = new Map<string, number>();

  for (const c of s) {
    cnt.set(c, (cnt.get(c) ?? 0) + 1);
  }

  let res: string = '';

  function canForm(word: string): boolean {
    for (const c of word) {
      if ((cnt.get(c) ?? 0) <= 0) {
        return false;
      }
    }
    return true;
  }

  for (const num of order) {
    const word = nums[num];
    while (canForm(word)) {
      res += num.toString();
      for (const c of word) {
        cnt.set(c, (cnt.get(c) ?? 0) - 1);
      }
    }
  }

  return res.split('').sort().join('');
}
