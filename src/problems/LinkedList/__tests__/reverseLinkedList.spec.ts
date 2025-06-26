import { describe, expect, it } from 'vitest';
import { reverseList } from '@/problems/LinkedList/reverseLinkedList';
import { ListNode } from '@/utils/ListNode';

function getNthNode(head: ListNode | null, n: number): ListNode | null {
  let current = head;
  for (let i = 0; i < n && current; i++) {
    current = current.next;
  }
  return current;
}

describe('reverseList', () => {
  it('should return null for empty list', () => {
    expect(reverseList(null)).toBeNull();
  });

  it('should return the same node for single-node list', () => {
    const list = ListNode.fromArray([1]);
    const result = reverseList(list);
    expect(ListNode.toArray(result)).toEqual([1]);
  });

  it('should reverse a simple list', () => {
    const list = ListNode.fromArray([1, 2, 3]);
    const result = reverseList(list);
    expect(ListNode.toArray(result)).toEqual([3, 2, 1]);
  });

  it('should reverse a long list', () => {
    const list = ListNode.fromArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const result = reverseList(list);
    expect(ListNode.toArray(result)).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
  });

  it('should handle list with two nodes', () => {
    const list = ListNode.fromArray([1, 2]);
    const result = reverseList(list);
    expect(ListNode.toArray(result)).toEqual([2, 1]);
  });

  it('should properly reverse and not create new nodes', () => {
    const list = ListNode.fromArray([1, 2, 3]);
    const originalSecondNode = getNthNode(list, 1);
    const result = reverseList(list);

    const firstNode = result;
    const secondNode = firstNode?.next;
    const thirdNode = secondNode?.next;

    expect(thirdNode).toBe(list);
    expect(secondNode).toBe(originalSecondNode);
  });

  it('should handle list with duplicate values', () => {
    const list = ListNode.fromArray([1, 2, 2, 3, 3, 3]);
    const result = reverseList(list);
    expect(ListNode.toArray(result)).toEqual([3, 3, 3, 2, 2, 1]);
  });
});
