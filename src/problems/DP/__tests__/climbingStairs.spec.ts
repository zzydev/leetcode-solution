import { describe, expect, it } from 'vitest';
import { climbStairs } from '@/problems/DP/climbingStairs';

describe('climbStairs', () => {
  it('should return 1 for n = 1', () => {
    expect(climbStairs(1)).toBe(1);
  });

  it('should return 2 for n = 2', () => {
    expect(climbStairs(2)).toBe(2);
  });

  it('should return 3 for n = 3', () => {
    expect(climbStairs(3)).toBe(3);
  });

  it('should return 5 for n = 4', () => {
    expect(climbStairs(4)).toBe(5);
  });

  it('should return 8 for n = 5', () => {
    expect(climbStairs(5)).toBe(8);
  });

  it('should return 13 for n = 6', () => {
    expect(climbStairs(6)).toBe(13);
  });

  it('should return 21 for n = 7', () => {
    expect(climbStairs(7)).toBe(21);
  });

  it('should return 34 for n = 8', () => {
    expect(climbStairs(8)).toBe(34);
  });

  it('should return 55 for n = 9', () => {
    expect(climbStairs(9)).toBe(55);
  });

  it('should return 89 for n = 10', () => {
    expect(climbStairs(10)).toBe(89);
  });

  it('should handle larger values of n', () => {
    expect(climbStairs(20)).toBe(10946);
  });
});
