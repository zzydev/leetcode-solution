export function addStrings(num1: string, num2: string): string {
  let idx1 = 0;
  let idx2 = 0;
  let carry = 0;
  let res = '';
  const arr1: string[] = num1.split('').reverse();
  const arr2: string[] = num2.split('').reverse();

  while (idx1 < arr1.length || idx2 < arr2.length || carry !== 0) {
    if (idx1 < arr1.length) {
      carry += (arr1[idx1++].charCodeAt(0) - '0'.charCodeAt(0));
    }
    if (idx2 < arr2.length) {
      carry += (arr2[idx2++].charCodeAt(0) - '0'.charCodeAt(0));
    }
    res = (carry % 10) + res;
    carry = Math.floor(carry / 10);
  }
  return res || '0';
};
