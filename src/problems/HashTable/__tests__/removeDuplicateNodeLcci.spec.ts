import { describe, expect, it } from 'vitest';
import { removeDuplicateNodes } from '@/problems/HashTable/removeDuplicateNodeLcci';
import { ListNode } from '@/utils/ListNode';

describe('removeDuplicateNodes', () => {
  it('should handle empty list', () => {
    const head = ListNode.fromArray([]);
    const result = removeDuplicateNodes(head);
    expect(ListNode.toArray(result)).toEqual([]);
  });

  it('should handle single node', () => {
    const head = ListNode.fromArray([1]);
    const result = removeDuplicateNodes(head);
    expect(ListNode.toArray(result)).toEqual([1]);
  });

  it('should remove all duplicates', () => {
    const head = ListNode.fromArray([1, 2, 3, 2, 1]);
    const result = removeDuplicateNodes(head);
    expect(ListNode.toArray(result)).toEqual([1, 2, 3]);
  });

  it('should keep order of first occurrence', () => {
    const head = ListNode.fromArray([3, 2, 3, 1, 2, 1]);
    const result = removeDuplicateNodes(head);
    expect(ListNode.toArray(result)).toEqual([3, 2, 1]);
  });

  it('should handle all same elements', () => {
    const head = ListNode.fromArray([2, 2, 2, 2]);
    const result = removeDuplicateNodes(head);
    expect(ListNode.toArray(result)).toEqual([2]);
  });
});
