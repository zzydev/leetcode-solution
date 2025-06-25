export function mySqrt(x: number): number {
  let l = 0;
  let r = x;
  while (l < r) {
    const m = l + ((r - l) >> 1);
    const cmp = cmpSqrt(x, m);
    if (cmp < 0) {
      l = m + 1;
    } else {
      r = m;
    }
  }
  if (l * l === x) {
    return l;
  }
  return l - 1;
}

function cmpSqrt(x: number, m: number): -1 | 0 | 1 {
  if (m * m < x) {
    return -1;
  } else if (m * m === x) {
    return 0;
  } else {
    return 1;
  }
}
