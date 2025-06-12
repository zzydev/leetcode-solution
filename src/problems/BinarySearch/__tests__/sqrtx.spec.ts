import { describe, expect, it } from 'vitest';
import { mySqrt } from '@/problems/BinarySearch/sqrtx';

describe('mySqrt', () => {
  it('should return 0 for x = 0', () => {
    expect(mySqrt(0)).toBe(0);
  });

  it('should return 1 for x = 1 or 2 or 3', () => {
    expect(mySqrt(1)).toBe(1);
    expect(mySqrt(2)).toBe(1);
    expect(mySqrt(3)).toBe(1);
  });

  it('should correctly compute perfect squares', () => {
    expect(mySqrt(4)).toBe(2);
    expect(mySqrt(9)).toBe(3);
    expect(mySqrt(16)).toBe(4);
    expect(mySqrt(25)).toBe(5);
    expect(mySqrt(46339 * 46339)).toBe(46339);
    expect(mySqrt(46340 * 46340)).toBe(46340);
  });

  it('should return floor(sqrt(x)) for non-perfect squares', () => {
    expect(mySqrt(8)).toBe(2); // sqrt(8) ≈ 2.828 → floor = 2
    expect(mySqrt(24)).toBe(4); // sqrt(24) ≈ 4.899 → floor = 4
    expect(mySqrt(46339 * 46339 + 1)).toBe(46339);
    expect(mySqrt(46340 * 46340 - 1)).toBe(46339);
  });

  it('should handle large numbers efficiently', () => {
    expect(mySqrt(2147395600)).toBe(46340); // big square
    expect(mySqrt(2147483647)).toBe(46340); // max int input
  });
});
