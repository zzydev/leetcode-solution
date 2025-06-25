import { describe, expect, it } from 'vitest';
import { topKFrequent } from '@/problems/Heap/topKFrequentElements';

describe('topKFrequent', () => {
  it('should return top k frequent elements for basic case', () => {
    const nums = [1, 1, 1, 2, 2, 3];
    const k = 2;
    const result = topKFrequent(nums, k);
    expect(result.length).toBe(2);
    expect(result).toContain(1);
    expect(result).toContain(2);
  });

  it('should handle all elements being the same', () => {
    const nums = [5, 5, 5, 5, 5];
    const k = 1;
    expect(topKFrequent(nums, k)).toEqual([5]);
  });

  it('should handle each element appearing once', () => {
    const nums = [1, 2, 3, 4, 5];
    const k = 3;
    const result = topKFrequent(nums, k);
    expect(result.length).toBe(3);
    nums.forEach((num) => {
      if (result.includes(num)) {
        expect(result.filter((r) => r === num).length).toBe(1);
      }
    });
  });

  it('should handle k equal to the number of unique elements', () => {
    const nums = [4, 4, 5, 5, 6, 6];
    const k = 3;
    const result = topKFrequent(nums, k);
    expect(result.sort()).toEqual([4, 5, 6].sort());
  });

  it('should handle negative numbers', () => {
    const nums = [-1, -1, 2, 2, 2];
    const k = 2;
    const result = topKFrequent(nums, k);
    expect(result.length).toBe(2);
    expect(result).toContain(2);
    expect(result).toContain(-1);
  });

  it('should handle zero', () => {
    const nums = [0, 0, 0, 1, 1];
    const k = 2;
    const result = topKFrequent(nums, k);
    expect(result.length).toBe(2);
    expect(result).toContain(0);
    expect(result).toContain(1);
  });

  it('should handle multiple elements with the same frequency', () => {
    const nums = [1, 2, 2, 3, 3, 4, 4];
    const k = 3;
    const result = topKFrequent(nums, k);
    expect(result.sort()).toEqual([2, 3, 4].sort());
  });

  it('should handle k equal to 1', () => {
    const nums = [3, 3, 3, 2, 2, 1];
    const k = 1;
    expect(topKFrequent(nums, k)).toEqual([3]);
  });

  it('should handle large numbers', () => {
    const nums = [1000000, 1000000, 500000];
    const k = 1;
    expect(topKFrequent(nums, k)).toEqual([1000000]);
  });

  it('should handle single element array', () => {
    const nums = [5];
    const k = 1;
    expect(topKFrequent(nums, k)).toEqual([5]);
  });

  it('should handle empty array', () => {
    const nums: number[] = [];
    const k = 0;
    expect(topKFrequent(nums, k)).toEqual([]);
  });

  it('should handle array with different frequencies', () => {
    const nums = [7, 7, 7, 8, 8, 9];
    const k = 2;
    const result = topKFrequent(nums, k);
    expect(result.length).toBe(2);
    expect(result).toContain(7);
    expect(result).toContain(8);
  });

  it('should handle k larger than the number of unique elements', () => {
    const nums = [1, 1, 2, 2, 3];
    const k = 4;
    const result = topKFrequent(nums, k);
    expect(result.sort()).toEqual([1, 2, 3].sort());
  });
});
