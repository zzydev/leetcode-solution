import { describe, expect, it } from 'vitest';
import { furthestBuilding } from '@/problems/Heap/furthestBuildingYouCanReach';

describe('furthestBuilding', () => {
  it('should return 0 if no buildings are present', () => {
    const heights: number[] = [];
    const bricks = 0;
    const ladders = 0;
    expect(furthestBuilding(heights, bricks, ladders)).toBe(0);
  });

  it('should return 0 if only one building is present', () => {
    const heights = [10];
    const bricks = 0;
    const ladders = 0;
    expect(furthestBuilding(heights, bricks, ladders)).toBe(0);
  });

  it('should handle all buildings reachable with bricks', () => {
    const heights = [1, 2, 3, 4];
    const bricks = 4;
    const ladders = 0;
    expect(furthestBuilding(heights, bricks, ladders)).toBe(3);
  });

  it('should handle all buildings reachable with ladders', () => {
    const heights = [1, 5, 10, 12];
    const bricks = 0;
    const ladders = 2;
    expect(furthestBuilding(heights, bricks, ladders)).toBe(2);
  });

  it('should use ladders for largest gaps', () => {
    const heights = [4, 12, 2, 7, 3, 18, 20, 3, 19];
    const bricks = 10;
    const ladders = 2;
    expect(furthestBuilding(heights, bricks, ladders)).toBe(7);
  });

  it('should handle case where ladders are used first', () => {
    const heights = [1, 5, 10, 14, 18];
    const bricks = 10;
    const ladders = 1;
    expect(furthestBuilding(heights, bricks, ladders)).toBe(3);
  });

  it('should handle case where bricks are used first', () => {
    const heights = [1, 3, 5, 7, 9];
    const bricks = 10;
    const ladders = 0;
    expect(furthestBuilding(heights, bricks, ladders)).toBe(4);
  });

  it('should handle case where neither bricks nor ladders are available', () => {
    const heights = [1, 2, 3, 4];
    const bricks = 0;
    const ladders = 0;
    expect(furthestBuilding(heights, bricks, ladders)).toBe(0);
  });

  it('should handle case where bricks are used for smaller gaps', () => {
    const heights = [1, 3, 6, 7, 8];
    const bricks = 5;
    const ladders = 1;
    expect(furthestBuilding(heights, bricks, ladders)).toBe(4);
  });

  it('should handle descending heights', () => {
    const heights = [10, 9, 8, 7];
    const bricks = 0;
    const ladders = 0;
    expect(furthestBuilding(heights, bricks, ladders)).toBe(3);
  });

  it('should handle case where ladders are used for largest gaps even if they occur early', () => {
    const heights = [1, 100, 2, 3, 4];
    const bricks = 10;
    const ladders = 1;
    expect(furthestBuilding(heights, bricks, ladders)).toBe(4);
  });
});
