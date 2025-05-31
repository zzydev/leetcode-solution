import { describe, expect, it } from 'vitest';
import { kClosest } from '@/problems/Heap/kClosestPointsToOrigin';

describe('kClosest', () => {
  it('should return closest points when k is 1', () => {
    const points = [[1, 3], [-2, 2]];
    const k = 1;
    expect(kClosest(points, k)).toEqual([[-2, 2]]);
  });

  it('should handle multiple points with same distance', () => {
    const points = [[1, 1], [-1, -1], [2, 2]];
    const k = 2;
    const result = kClosest(points, k);
    expect(result.length).toBe(2);
    expect(result).toContainEqual([1, 1]);
    expect(result).toContainEqual([-1, -1]);
  });

  it('should return all points when k equals array length', () => {
    const points = [[3, 3], [5, -1], [-2, 4]];
    const k = 3;
    const result = kClosest(points, k);
    expect(result.length).toBe(3);
    points.forEach((point) => {
      expect(result).toContainEqual(point);
    });
  });

  it('should handle points with negative coordinates', () => {
    const points = [[-4, 3], [5, -12], [10, 8]];
    const k = 2;
    const result = kClosest(points, k);
    expect(result.length).toBe(2);
    expect(result).toContainEqual([-4, 3]);
    expect(result).toContainEqual([10, 8]);
  });

  it('should handle origin as one of the points', () => {
    const points = [[0, 0], [1, 1], [2, 2]];
    const k = 2;
    const result = kClosest(points, k);
    expect(result.length).toBe(2);
    expect(result).toContainEqual([0, 0]);
    expect(result).toContainEqual([1, 1]);
  });

  it('should return empty array for empty input', () => {
    const points: number[][] = [];
    const k = 0;
    expect(kClosest(points, k)).toEqual([]);
  });

  it('should handle k = 0', () => {
    const points = [[1, 1]];
    const k = 0;
    expect(kClosest(points, k)).toEqual([]);
  });

  it('should handle large distances', () => {
    const points = [[100, 0], [0, 100], [50, 50]];
    const k = 2;
    const result = kClosest(points, k);
    expect(result.length).toBe(2);
    expect(result).toContainEqual([50, 50]);
    expect(result.some(p => p[0] === 100 || p[1] === 100)).toBe(true);
  });

  it('should handle points with decimal coordinates', () => {
    const points = [[0.5, 0.5], [1.5, 1.5], [0.1, 0.1]];
    const k = 2;
    const result = kClosest(points, k);
    expect(result.length).toBe(2);
    expect(result).toContainEqual([0.1, 0.1]);
    expect(result).toContainEqual([0.5, 0.5]);
  });
});
