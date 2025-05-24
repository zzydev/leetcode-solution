import { describe, expect, it } from 'vitest';
import { mergeTwoLists } from '@/problems/LinkedList/mergeTwoSortedLists';
import { ListNode } from '@/utils/ListNode';

describe('mergeTwoLists', () => {
  it('should merge two empty lists', () => {
    expect(mergeTwoLists(null, null)).toBeNull();
  });

  it('should merge when one list is empty', () => {
    const list1 = ListNode.fromArray([1, 3, 5]);
    const expected = [1, 3, 5];

    const result = mergeTwoLists(list1, null);
    expect(ListNode.toArray(result)).toEqual(expected);

    const result2 = mergeTwoLists(null, list1);
    expect(ListNode.toArray(result2)).toEqual(expected);
  });

  it('should merge two lists of equal length', () => {
    const list1 = ListNode.fromArray([1, 3, 5]);
    const list2 = ListNode.fromArray([2, 4, 6]);
    const expected = [1, 2, 3, 4, 5, 6];

    const result = mergeTwoLists(list1, list2);
    expect(ListNode.toArray(result)).toEqual(expected);
  });

  it('should merge lists of different lengths', () => {
    const list1 = ListNode.fromArray([1, 3, 5, 7]);
    const list2 = ListNode.fromArray([2, 4, 6]);
    const expected = [1, 2, 3, 4, 5, 6, 7];

    const result = mergeTwoLists(list1, list2);
    expect(ListNode.toArray(result)).toEqual(expected);
  });

  it('should handle lists with duplicate values', () => {
    const list1 = ListNode.fromArray([1, 2, 2, 3]);
    const list2 = ListNode.fromArray([1, 3, 4]);
    const expected = [1, 1, 2, 2, 3, 3, 4];

    const result = mergeTwoLists(list1, list2);
    expect(ListNode.toArray(result)).toEqual(expected);
  });

  it('should merge single-element lists', () => {
    const list1 = ListNode.fromArray([2]);
    const list2 = ListNode.fromArray([1]);
    const expected1 = [1, 2];
    const expected2 = [2];

    const result1 = mergeTwoLists(list1, list2);
    expect(ListNode.toArray(result1)).toEqual(expected1);

    const result2 = mergeTwoLists(list1, null);
    expect(ListNode.toArray(result2)).toEqual(expected2);
  });

  it('should merge large lists', () => {
    const list1 = ListNode.fromArray(
      [...Array.from({ length: 1000 }).keys()].map(x => x * 2),
    ); // 0,2,4,...1998
    const list2 = ListNode.fromArray(
      [...Array.from({ length: 1000 }).keys()].map(x => x * 2 + 1),
    ); // 1,3,5,...1999
    const expected = [...Array.from({ length: 2000 }).keys()]; // 0,1,2,...1999

    const result = mergeTwoLists(list1, list2);
    expect(ListNode.toArray(result)).toEqual(expected);
  });
});
