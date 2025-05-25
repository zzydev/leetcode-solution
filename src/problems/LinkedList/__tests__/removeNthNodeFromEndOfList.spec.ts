import { describe, expect, it } from 'vitest';
import { removeNthFromEnd } from '@/problems/LinkedList/removeNthNodeFromEndOfList';
import { ListNode } from '@/utils/ListNode';

describe('removeNthFromEnd', () => {
  it('should return null when removing the only node', () => {
    const list = ListNode.fromArray([1]);
    const result = removeNthFromEnd(list, 1);
    expect(result).toBeNull();
  });

  it('should remove the last node', () => {
    const list = ListNode.fromArray([1, 2, 3, 4]);
    const result = removeNthFromEnd(list, 1);
    expect(ListNode.toArray(result)).toEqual([1, 2, 3]);
  });

  it('should remove the first node', () => {
    const list = ListNode.fromArray([1, 2, 3, 4]);
    const result = removeNthFromEnd(list, 4);
    expect(ListNode.toArray(result)).toEqual([2, 3, 4]);
  });

  it('should remove middle node', () => {
    const list = ListNode.fromArray([1, 2, 3, 4, 5]);
    const result = removeNthFromEnd(list, 3);
    expect(ListNode.toArray(result)).toEqual([1, 2, 4, 5]);
  });

  it('should handle removing second node from end', () => {
    const list = ListNode.fromArray([1, 2, 3, 4]);
    const result = removeNthFromEnd(list, 2);
    expect(ListNode.toArray(result)).toEqual([1, 2, 4]);
  });
});
