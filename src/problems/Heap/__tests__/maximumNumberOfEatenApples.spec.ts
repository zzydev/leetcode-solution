import { describe, expect, it } from 'vitest';
import { eatenApples } from '@/problems/Heap/maximumNumberOfEatenApples';

describe('eatenApples', () => {
  it('should return 0 if no apples are available', () => {
    const apples: number[] = [];
    const days: number[] = [];
    expect(eatenApples(apples, days)).toBe(0);
  });

  it('should handle single day with apples', () => {
    const apples = [3];
    const days = [2];
    expect(eatenApples(apples, days)).toBe(2);
  });

  it('should handle apples expiring on the same day they are available', () => {
    const apples = [1, 1, 1];
    const days = [1, 1, 1];
    expect(eatenApples(apples, days)).toBe(3);
  });

  it('should handle apples expiring in the future', () => {
    const apples = [1, 2, 3, 5, 2];
    const days = [3, 2, 1, 4, 2];
    expect(eatenApples(apples, days)).toBe(7);
  });

  it('should prioritize apples that expire earlier', () => {
    const apples = [3, 0, 0, 0, 2];
    const days = [3, 0, 0, 0, 2];
    expect(eatenApples(apples, days)).toBe(5);
  });

  it('should handle case where apples last multiple days', () => {
    const apples = [2, 1, 1, 4, 5];
    const days = [1, 3, 2, 4, 2];
    expect(eatenApples(apples, days)).toBe(7);
  });

  it('should handle apples that expire before they can be eaten', () => {
    const apples = [1, 1, 1, 1];
    const days = [1, 1, 1, 1];
    expect(eatenApples(apples, days)).toBe(4);
  });

  it('should handle large number of apples with varying expiration days', () => {
    const apples = [10, 10, 10, 10, 10];
    const days = [1, 2, 3, 4, 5];
    expect(eatenApples(apples, days)).toBe(9);
  });

  it('should handle case where no apples are available after the first day', () => {
    const apples = [5, 0, 0, 0];
    const days = [2, 0, 0, 0];
    expect(eatenApples(apples, days)).toBe(2);
  });

  it('should handle case where apples are available but expire too soon', () => {
    const apples = [1, 0, 3, 0];
    const days = [1, 0, 3, 0];
    expect(eatenApples(apples, days)).toBe(4);
  });

  it('should handle overlapping apple availability', () => {
    const apples = [2, 1, 1, 1];
    const days = [2, 1, 2, 1];
    expect(eatenApples(apples, days)).toBe(4);
  });
});
