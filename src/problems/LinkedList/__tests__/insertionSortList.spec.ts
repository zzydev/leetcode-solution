import { describe, expect, it } from 'vitest';
import { insertionSortList } from '@/problems/LinkedList/insertionSortList';
import { ListNode } from '@/utils/ListNode';

describe('insertionSortList', () => {
  it('should handle empty list', () => {
    const head = ListNode.fromArray([]);
    const result = insertionSortList(head);
    expect(ListNode.toArray(result)).toEqual([]);
  });

  it('should handle list with single node', () => {
    const head = ListNode.fromArray([5]);
    const result = insertionSortList(head);
    expect(ListNode.toArray(result)).toEqual([5]);
  });

  it('should sort list with two nodes', () => {
    const head = ListNode.fromArray([3, 1]);
    const result = insertionSortList(head);
    expect(ListNode.toArray(result)).toEqual([1, 3]);
  });

  it('should sort list with three nodes', () => {
    const head = ListNode.fromArray([3, 2, 1]);
    const result = insertionSortList(head);
    expect(ListNode.toArray(result)).toEqual([1, 2, 3]);
  });

  it('should sort list with multiple nodes', () => {
    const head = ListNode.fromArray([4, 2, 1, 3]);
    const result = insertionSortList(head);
    expect(ListNode.toArray(result)).toEqual([1, 2, 3, 4]);
  });

  it('should sort list with negative numbers', () => {
    const head = ListNode.fromArray([-1, -2, -3]);
    const result = insertionSortList(head);
    expect(ListNode.toArray(result)).toEqual([-3, -2, -1]);
  });

  it('should sort list with mixed positive and negative numbers', () => {
    const head = ListNode.fromArray([-1, 2, -3, 4, -5]);
    const result = insertionSortList(head);
    expect(ListNode.toArray(result)).toEqual([-5, -3, -1, 2, 4]);
  });

  it('should sort list with duplicates', () => {
    const head = ListNode.fromArray([1, 2, 2, 1, 3]);
    const result = insertionSortList(head);
    expect(ListNode.toArray(result)).toEqual([1, 1, 2, 2, 3]);
  });

  it('should sort list with already sorted elements', () => {
    const head = ListNode.fromArray([1, 2, 3, 4, 5]);
    const result = insertionSortList(head);
    expect(ListNode.toArray(result)).toEqual([1, 2, 3, 4, 5]);
  });

  it('should sort list with reverse sorted elements', () => {
    const head = ListNode.fromArray([5, 4, 3, 2, 1]);
    const result = insertionSortList(head);
    expect(ListNode.toArray(result)).toEqual([1, 2, 3, 4, 5]);
  });

  it('should sort list with large numbers', () => {
    const head = ListNode.fromArray([1000, 200, 30, 4]);
    const result = insertionSortList(head);
    expect(ListNode.toArray(result)).toEqual([4, 30, 200, 1000]);
  });

  it('should sort list with zeros', () => {
    const head = ListNode.fromArray([0, 0, 0, 0]);
    const result = insertionSortList(head);
    expect(ListNode.toArray(result)).toEqual([0, 0, 0, 0]);
  });

  it('should sort list with single element followed by zeros', () => {
    const head = ListNode.fromArray([1, 0, 0, 0]);
    const result = insertionSortList(head);
    expect(ListNode.toArray(result)).toEqual([0, 0, 0, 1]);
  });

  it('should sort list with large number of elements', () => {
    const values = Array.from({ length: 100 })
      .fill(0)
      .map((_, i) => 100 - i);
    const head = ListNode.fromArray(values);
    const result = insertionSortList(head);
    expect(ListNode.toArray(result)).toEqual(values.sort((a, b) => a - b));
  });

  it('should sort list with alternating elements', () => {
    const head = ListNode.fromArray([1, 3, 2, 4, 3, 5]);
    const result = insertionSortList(head);
    expect(ListNode.toArray(result)).toEqual([1, 2, 3, 3, 4, 5]);
  });
});
