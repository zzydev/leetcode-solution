import { describe, expect, it } from 'vitest';
import { deleteDuplicates } from '@/problems/LinkedList/removeDuplicatesFromSortedList';
import { ListNode } from '@/utils/ListNode';

describe('deleteDuplicates', () => {
  it('should handle empty list', () => {
    expect(deleteDuplicates(null)).toBeNull();
  });

  it('should return single node list unchanged', () => {
    const list = ListNode.fromArray([1]);
    const result = deleteDuplicates(list);
    expect(ListNode.toArray(result)).toEqual([1]);
  });

  it('should remove consecutive duplicates', () => {
    const list = ListNode.fromArray([1, 1, 2]);
    const result = deleteDuplicates(list);
    expect(ListNode.toArray(result)).toEqual([1, 2]);
  });

  it('should remove multiple duplicates', () => {
    const list = ListNode.fromArray([1, 1, 2, 3, 3]);
    const result = deleteDuplicates(list);
    expect(ListNode.toArray(result)).toEqual([1, 2, 3]);
  });

  it('should handle all duplicates', () => {
    const list = ListNode.fromArray([1, 1, 1, 1]);
    const result = deleteDuplicates(list);
    expect(ListNode.toArray(result)).toEqual([1]);
  });

  it('should not modify already unique list', () => {
    const list = ListNode.fromArray([1, 2, 3, 4, 5]);
    const result = deleteDuplicates(list);
    expect(ListNode.toArray(result)).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle long list with scattered duplicates', () => {
    const list = ListNode.fromArray([1, 2, 2, 3, 4, 4, 4, 5, 5, 6]);
    const result = deleteDuplicates(list);
    expect(ListNode.toArray(result)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('should handle negative numbers', () => {
    const list = ListNode.fromArray([-5, -5, -3, -3, 0, 0, 5]);
    const result = deleteDuplicates(list);
    expect(ListNode.toArray(result)).toEqual([-5, -3, 0, 5]);
  });
});
