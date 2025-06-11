export function myAtoi(s: string): number {
  let i = 0;
  let minus = 1;
  let res = 0;
  const len = s.length;
  const INT_MAX = 2 ** 31 - 1;
  const INT_MIN = -(2 ** 31);
  while (i < len && s[i] === ' ') i++;
  if (i === len)
    return 0;
  if (i < len && s[i] === '+') {
    i++;
  }
  else if (i < len && s[i] === '-') {
    i++;
    minus = -minus;
  }
  while (i < len && isAlpha(s[i])) {
    const num = Number.parseInt(s[i]);
    if (minus > 0 && res * 10 + num > INT_MAX)
      return INT_MAX;
    if (minus < 0 && -res * 10 - num < INT_MIN)
      return INT_MIN;
    res = res * 10 + num;
    i++;
  }
  res *= minus;
  return res;
};

function isAlpha(str: string): boolean {
  if (str >= '0' && str <= '9')
    return true;
  return false;
}
