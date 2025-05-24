import { describe, expect, it } from 'vitest';
import { reverseKGroup } from '@/problems/LinkedList/reverseNodesInK-Group';
import { ListNode } from '@/utils/ListNode';

describe('reverseKGroup', () => {
  it('should handle empty list', () => {
    expect(reverseKGroup(null, 2)).toBeNull();
  });

  it('should return single node list unchanged when k=1', () => {
    const list = ListNode.fromArray([1]);
    const result = reverseKGroup(list, 1);
    expect(ListNode.toArray(result)).toEqual([1]);
  });

  it('should reverse groups of 2 nodes', () => {
    const list = ListNode.fromArray([1, 2, 3, 4, 5]);
    const result = reverseKGroup(list, 2);
    expect(ListNode.toArray(result)).toEqual([2, 1, 4, 3, 5]);
  });

  it('should reverse groups of 3 nodes', () => {
    const list = ListNode.fromArray([1, 2, 3, 4, 5]);
    const result = reverseKGroup(list, 3);
    expect(ListNode.toArray(result)).toEqual([3, 2, 1, 4, 5]);
  });

  it('should handle when list length is multiple of k', () => {
    const list = ListNode.fromArray([1, 2, 3, 4, 5, 6]);
    const result = reverseKGroup(list, 3);
    expect(ListNode.toArray(result)).toEqual([3, 2, 1, 6, 5, 4]);
  });

  it('should leave remainder nodes unchanged', () => {
    const list = ListNode.fromArray([1, 2, 3, 4, 5]);
    const result = reverseKGroup(list, 3);
    expect(ListNode.toArray(result)).toEqual([3, 2, 1, 4, 5]);
  });

  it('should return original list when k > list length', () => {
    const list = ListNode.fromArray([1, 2, 3]);
    const result = reverseKGroup(list, 4);
    expect(ListNode.toArray(result)).toEqual([1, 2, 3]);
  });

  it('should handle k equal to list length', () => {
    const list = ListNode.fromArray([1, 2, 3, 4]);
    const result = reverseKGroup(list, 4);
    expect(ListNode.toArray(result)).toEqual([4, 3, 2, 1]);
  });

  it('should not modify list when k=1', () => {
    const list = ListNode.fromArray([1, 2, 3, 4, 5]);
    const result = reverseKGroup(list, 1);
    expect(ListNode.toArray(result)).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle list with duplicate values', () => {
    const list = ListNode.fromArray([1, 1, 2, 2, 3, 3]);
    const result = reverseKGroup(list, 2);
    expect(ListNode.toArray(result)).toEqual([1, 1, 2, 2, 3, 3]);
  });
});
