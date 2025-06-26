import { describe, expect, it } from 'vitest';
import { sortArrayByParity } from '@/problems/TwoPointers/sortArrayByParity';

describe('sortArrayByParity', () => {
  it('should handle empty array', () => {
    expect(sortArrayByParity([])).toEqual([]);
  });

  it('should handle single element array', () => {
    expect(sortArrayByParity([1])).toEqual([1]);
    expect(sortArrayByParity([2])).toEqual([2]);
  });

  it('should return same array if all even', () => {
    expect(sortArrayByParity([2, 4, 6, 8])).toEqual([2, 4, 6, 8]);
  });

  it('should return same array if all odd', () => {
    expect(sortArrayByParity([1, 3, 5, 7])).toEqual([1, 3, 5, 7]);
  });

  it('should group even numbers before odd numbers', () => {
    const result = sortArrayByParity([3, 1, 2, 4]);
    const evens = result.filter((n) => n % 2 === 0);
    const odds = result.filter((n) => n % 2 !== 0);

    expect(evens).toHaveLength(2);
    expect(evens).toContain(2);
    expect(evens).toContain(4);

    expect(odds).toHaveLength(2);
    expect(odds).toContain(3);
    expect(odds).toContain(1);
  });

  it('should handle mixed even and odd numbers', () => {
    const result = sortArrayByParity([5, 0, 1, 2, 3, 4]);
    const even = result.filter((n) => n % 2 === 0);
    const odd = result.filter((n) => n % 2 !== 0);
    expect(even).toHaveLength(3);
    expect(odd).toHaveLength(3);
    expect([...even, ...odd]).toEqual(result);
  });
});
