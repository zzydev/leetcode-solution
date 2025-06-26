export function merge(A: number[], m: number, B: number[], n: number): void {
  let k = m + n - 1;
  let i = m - 1;
  let j = n - 1;
  while (i >= 0 && j >= 0) {
    if (A[i] >= B[j]) {
      A[k--] = A[i--];
    } else {
      A[k--] = B[j--];
    }
  }
  while (i >= 0) {
    A[k--] = A[i--];
  }
  while (j >= 0) {
    A[k--] = B[j--];
  }
}
