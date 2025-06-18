import { describe, expect, it } from 'vitest';
import { canMakeArithmeticProgression } from '@/problems/Sorting/canMakeArithmeticProgressionFromSequence';

describe('canMakeArithmeticProgression', () => {
  it('should return true for an empty array', () => {
    expect(canMakeArithmeticProgression([])).toBe(true);
  });

  it('should return true for an array with one element', () => {
    expect(canMakeArithmeticProgression([5])).toBe(true);
  });

  it('should return true for an array with two elements', () => {
    expect(canMakeArithmeticProgression([3, 5])).toBe(true);
  });

  it('should return true for a valid arithmetic progression', () => {
    expect(canMakeArithmeticProgression([3, 5, 7])).toBe(true);
    expect(canMakeArithmeticProgression([1, 2, 3, 4])).toBe(true);
    expect(canMakeArithmeticProgression([5, 10, 15, 20])).toBe(true);
    expect(canMakeArithmeticProgression([-5, -3, -1])).toBe(true);
  });

  it('should return false for an invalid arithmetic progression', () => {
    expect(canMakeArithmeticProgression([1, 3, 7])).toBe(false);
    expect(canMakeArithmeticProgression([1, 2, 4, 8])).toBe(false);
    expect(canMakeArithmeticProgression([5, 10, 16, 20])).toBe(false);
    expect(canMakeArithmeticProgression([-5, -3, 0])).toBe(false);
  });

  it('should handle arrays with duplicate elements', () => {
    expect(canMakeArithmeticProgression([2, 2, 2, 2])).toBe(true);
    expect(canMakeArithmeticProgression([1, 1, 2])).toBe(false);
    expect(canMakeArithmeticProgression([0, 0, 0, 1])).toBe(false);
  });

  it('should handle arrays with negative common difference', () => {
    expect(canMakeArithmeticProgression([5, 3, 1])).toBe(true);
    expect(canMakeArithmeticProgression([10, 5, 0, -5])).toBe(true);
    expect(canMakeArithmeticProgression([-1, -3, -5])).toBe(true);
  });

  it('should handle arrays with zero common difference', () => {
    expect(canMakeArithmeticProgression([0, 0, 0])).toBe(true);
    expect(canMakeArithmeticProgression([-2, -2, -2])).toBe(true);
  });

  it('should handle arrays with mixed positive and negative numbers', () => {
    expect(canMakeArithmeticProgression([-3, 0, 3])).toBe(true);
    expect(canMakeArithmeticProgression([-10, -5, 0, 5])).toBe(true);
    expect(canMakeArithmeticProgression([-5, 0, 3])).toBe(false);
  });

  it('should handle arrays with large numbers', () => {
    expect(canMakeArithmeticProgression([1000, 2000, 3000])).toBe(true);
    expect(canMakeArithmeticProgression([1000000, 2000000, 3000000])).toBe(true);
    expect(canMakeArithmeticProgression([1000, 2000, 3001])).toBe(false);
  });

  it('should handle arrays with decimal numbers', () => {
    expect(canMakeArithmeticProgression([0.5, 1.0, 1.5])).toBe(true);
    expect(canMakeArithmeticProgression([-0.5, 0, 0.5])).toBe(true);
    expect(canMakeArithmeticProgression([0.5, 1.0, 1.6])).toBe(false);
  });

  it('should handle arrays with both integers and decimals', () => {
    expect(canMakeArithmeticProgression([1, 1.5, 2])).toBe(true);
    expect(canMakeArithmeticProgression([-2, -1.5, -1])).toBe(true);
    expect(canMakeArithmeticProgression([1, 1.5, 2.1])).toBe(false);
  });

  it('should handle arrays with varying common differences', () => {
    expect(canMakeArithmeticProgression([1, 3, 5, 7, 9])).toBe(true);
    expect(canMakeArithmeticProgression([10, 8, 6, 4, 2])).toBe(true);
    expect(canMakeArithmeticProgression([1, 3, 6, 10])).toBe(false);
  });

  it('should handle arrays with out-of-order elements', () => {
    expect(canMakeArithmeticProgression([3, 1, 5])).toBe(true);
    expect(canMakeArithmeticProgression([4, 1, 7])).toBe(true);
    expect(canMakeArithmeticProgression([5, 3, 1])).toBe(true);
    expect(canMakeArithmeticProgression([1, 2, 4, 3])).toBe(true);
  });

  it('should handle arrays with large number of elements', () => {
    const arr = Array.from({ length: 1000 }).fill(0).map((_, i) => i * 2);
    expect(canMakeArithmeticProgression(arr)).toBe(true);
    arr[500] = 999;
    expect(canMakeArithmeticProgression(arr)).toBe(false);
  });
});
