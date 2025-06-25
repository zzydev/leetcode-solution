export function minEatingSpeed(piles: number[], h: number): number {
  let l = 1;
  let r = Math.max(...piles);

  while (l < r) {
    const m = l + ((r - l) >> 1);
    const speedEval = evaluateSpeed(piles, h, m);
    if (speedEval < 0) {
      l = m + 1;
    } else {
      r = m;
    }
  }

  return l;
}

function evaluateSpeed(piles: number[], h: number, k: number): -1 | 0 | 1 {
  let time = 0;
  for (const p of piles) {
    time += Math.ceil(p / k);
  }

  if (time < h) return 1;
  if (time === h) return 0;
  return -1;
}
