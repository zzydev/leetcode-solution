import { describe, expect, it } from 'vitest';
import { mergeKLists } from '@/problems/LinkedList/mergeKSortedLists';
import { ListNode } from '@/utils/ListNode';

describe('mergeKLists', () => {
  it('should return null for empty input', () => {
    expect(mergeKLists([])).toBeNull();
  });

  it('should return null if all lists are null', () => {
    expect(mergeKLists([null, null, null])).toBeNull();
  });

  it('should handle single list', () => {
    const list = ListNode.fromArray([1, 2, 3]);
    expect(mergeKLists([list])).toEqual(list);
  });

  it('should merge two sorted lists', () => {
    const lists = [
      ListNode.fromArray([1, 4, 5]),
      ListNode.fromArray([1, 3, 4]),
    ];
    const merged = mergeKLists(lists);
    expect(ListNode.toArray(merged)).toEqual([1, 1, 3, 4, 4, 5]);
  });

  it('should merge three sorted lists', () => {
    const lists = [
      ListNode.fromArray([1, 4, 5]),
      ListNode.fromArray([1, 3, 4]),
      ListNode.fromArray([2, 6]),
    ];
    const merged = mergeKLists(lists);
    expect(ListNode.toArray(merged)).toEqual([1, 1, 2, 3, 4, 4, 5, 6]);
  });

  it('should handle lists with different lengths', () => {
    const lists = [
      ListNode.fromArray([1, 2]),
      ListNode.fromArray([3, 4, 5, 6]),
      ListNode.fromArray([7]),
    ];
    const merged = mergeKLists(lists);
    expect(ListNode.toArray(merged)).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  it('should handle lists with some null values', () => {
    const lists = [
      null,
      ListNode.fromArray([1, 3, 5]),
      null,
      ListNode.fromArray([2, 4, 6]),
      null,
    ];
    const merged = mergeKLists(lists);
    expect(ListNode.toArray(merged)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('should handle all lists being empty', () => {
    const lists = [
      ListNode.fromArray([]),
      ListNode.fromArray([]),
      ListNode.fromArray([]),
    ];
    expect(mergeKLists(lists)).toBeNull();
  });

  it('should handle lists with duplicate values', () => {
    const lists = [
      ListNode.fromArray([1, 1, 2]),
      ListNode.fromArray([1, 2, 3]),
    ];
    const merged = mergeKLists(lists);
    expect(ListNode.toArray(merged)).toEqual([1, 1, 1, 2, 2, 3]);
  });

  it('should handle negative values', () => {
    const lists = [
      ListNode.fromArray([-10, -5, 0]),
      ListNode.fromArray([-3, 2, 5]),
      ListNode.fromArray([-2, 1, 3]),
    ];
    const merged = mergeKLists(lists);
    expect(ListNode.toArray(merged)).toEqual([-10, -5, -3, -2, 0, 1, 2, 3, 5]);
  });
});
