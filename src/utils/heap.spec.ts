import { beforeEach, describe, expect, it } from 'vitest';
import { Heap, MaxHeap, MinHeap } from './Heap';

describe('heap Data Structure', () => {
  describe('base Heap', () => {
    let heap: Heap<number>;

    beforeEach(() => {
      heap = new Heap<number>((a, b) => a > b); // 最大堆
    });

    it('should initialize empty', () => {
      expect(heap.isEmpty()).toBe(true);
      expect(heap.size()).toBe(0);
      expect(heap.peek()).toBeNull();
      expect(heap.extract()).toBeNull();
    });

    it('should insert and extract elements in correct order', () => {
      heap.insert(3);
      heap.insert(1);
      heap.insert(2);

      expect(heap.size()).toBe(3);
      expect(heap.peek()).toBe(3);
      const firstExtract = heap.extract();
      expect(firstExtract).toBe(3);
      expect(heap.size()).toBe(2);
      const secondExtract = heap.extract();
      expect(secondExtract).toBe(2);
      const thirdExtract = heap.extract();
      expect(thirdExtract).toBe(1);
      expect(heap.isEmpty()).toBe(true);
    });

    it('should handle duplicate elements', () => {
      heap.insert(2);
      heap.insert(2);
      heap.insert(2);

      expect(heap.size()).toBe(3);
      const firstDupExtract = heap.extract();
      expect(firstDupExtract).toBe(2);
      const secondDupExtract = heap.extract();
      expect(secondDupExtract).toBe(2);
      const thirdDupExtract = heap.extract();
      expect(thirdDupExtract).toBe(2);
      expect(heap.isEmpty()).toBe(true);
    });

    it('should maintain heap property after insertions', () => {
      const values = [5, 3, 8, 1, 4, 7, 10];
      values.forEach((val) => heap.insert(val));

      const extracted: number[] = [];
      while (!heap.isEmpty()) {
        const val = heap.extract();
        if (val !== null) {
          // 非空判断，避免插入 null 到数组
          extracted.push(val);
        }
      }

      expect(extracted).toEqual([10, 8, 7, 5, 4, 3, 1]);
    });

    it('should heapify an array', () => {
      const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5];
      const heapified = Heap.heapify(arr, (a, b) => a > b);

      const sorted: number[] = [];
      while (!heapified.isEmpty()) {
        const val = heapified.extract();
        if (val !== null) {
          // 非空判断
          sorted.push(val);
        }
      }

      expect(sorted).toEqual([9, 6, 5, 5, 4, 3, 2, 1, 1]);
    });

    it('should return array representation', () => {
      heap.insert(3);
      heap.insert(1);
      heap.insert(2);

      expect(heap.toArray()).toEqual([3, 1, 2]); // 堆的内部数组结构
    });
  });

  describe('maxHeap', () => {
    let maxHeap: MaxHeap<number>;

    beforeEach(() => {
      maxHeap = new MaxHeap<number>();
    });

    it('should extract elements in descending order', () => {
      maxHeap.insert(5);
      maxHeap.insert(3);
      maxHeap.insert(7);

      const firstMaxExtract = maxHeap.extract();
      expect(firstMaxExtract).toBe(7);
      const secondMaxExtract = maxHeap.extract();
      expect(secondMaxExtract).toBe(5);
      const thirdMaxExtract = maxHeap.extract();
      expect(thirdMaxExtract).toBe(3);
    });
  });

  describe('minHeap', () => {
    let minHeap: MinHeap<number>;

    beforeEach(() => {
      minHeap = new MinHeap<number>();
    });

    it('should extract elements in ascending order', () => {
      minHeap.insert(5);
      minHeap.insert(3);
      minHeap.insert(7);

      const firstMinExtract = minHeap.extract();
      expect(firstMinExtract).toBe(3);
      const secondMinExtract = minHeap.extract();
      expect(secondMinExtract).toBe(5);
      const thirdMinExtract = minHeap.extract();
      expect(thirdMinExtract).toBe(7);
    });
  });

  describe('edge Cases', () => {
    it('should handle heapify with empty array', () => {
      const heap = Heap.heapify<number>([]);
      expect(heap.isEmpty()).toBe(true);
      expect(heap.extract()).toBeNull();
    });

    it('should handle heapify with single element', () => {
      const heap = Heap.heapify([42]);
      expect(heap.size()).toBe(1);
      const singleExtract = heap.extract();
      expect(singleExtract).toBe(42);
    });

    it('should handle complex comparison function', () => {
      interface Person {
        name: string;
        age: number;
      }
      const heap = new Heap<Person>((a, b) => a.age < b.age); // 年龄最小的优先

      heap.insert({ name: 'Alice', age: 30 });
      heap.insert({ name: 'Bob', age: 25 });
      heap.insert({ name: 'Charlie', age: 35 });

      const firstPersonExtract = heap.extract();
      expect(firstPersonExtract?.name).toBe('Bob');
      const secondPersonExtract = heap.extract();
      expect(secondPersonExtract?.name).toBe('Alice');
      const thirdPersonExtract = heap.extract();
      expect(thirdPersonExtract?.name).toBe('Charlie');
    });
  });
});
