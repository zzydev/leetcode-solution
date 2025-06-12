import { describe, expect, it } from 'vitest';
import { minEatingSpeed } from '@/problems/BinarySearch/kokoEatingBananas';

describe('minEatingSpeed', () => {
  it('should handle single pile and single hour', () => {
    const piles = [30];
    const h = 1;
    expect(minEatingSpeed(piles, h)).toBe(30);
  });

  it('should handle single pile and multiple hours', () => {
    const piles = [30];
    const h = 3;
    expect(minEatingSpeed(piles, h)).toBe(10);
  });

  it('should handle multiple piles and exact hours', () => {
    const piles = [3, 6, 7, 11];
    const h = 8;
    expect(minEatingSpeed(piles, h)).toBe(4);
  });

  it('should handle case where speed is the largest pile', () => {
    const piles = [30, 11, 23, 4, 20];
    const h = 5;
    expect(minEatingSpeed(piles, h)).toBe(30);
  });

  it('should handle case where speed is less than the largest pile', () => {
    const piles = [30, 11, 23, 4, 20];
    const h = 6;
    expect(minEatingSpeed(piles, h)).toBe(23);
  });

  it('should handle piles with same value', () => {
    const piles = [3, 3, 3, 3];
    const h = 4;
    expect(minEatingSpeed(piles, h)).toBe(3);
  });

  it('should handle piles with same value and extra hours', () => {
    const piles = [3, 3, 3, 3];
    const h = 6;
    expect(minEatingSpeed(piles, h)).toBe(3);
  });

  it('should handle large piles and hours', () => {
    const piles = [1000000000];
    const h = 2;
    expect(minEatingSpeed(piles, h)).toBe(500000000);
  });

  it('should handle multiple piles with large values', () => {
    const piles = [1000000000, 1000000000];
    const h = 3;
    expect(minEatingSpeed(piles, h)).toBe(1000000000);
  });

  it('should handle case where speed is minimal', () => {
    const piles = [3, 6, 7, 11];
    const h = 10;
    expect(minEatingSpeed(piles, h)).toBe(3);
  });

  it('should handle case where speed is between values', () => {
    const piles = [2, 2];
    const h = 4;
    expect(minEatingSpeed(piles, h)).toBe(1);
  });
});
