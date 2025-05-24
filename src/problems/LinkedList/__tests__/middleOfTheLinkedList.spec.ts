import { describe, expect, it } from 'vitest';
import { middleNode } from '@/problems/LinkedList/middleOfTheLinkedList';
import { ListNode } from '@/utils/ListNode';

describe('middleNode', () => {
  it('should return null for empty list', () => {
    expect(middleNode(null)).toBeNull();
  });

  it('should return the single node for list with one element', () => {
    const list = ListNode.fromArray([1]);
    const result = middleNode(list);
    expect(ListNode.toArray(result)).toEqual([1]);
  });

  it('should return second middle node for even-length list', () => {
    const list = ListNode.fromArray([1, 2, 3, 4]);
    const result = middleNode(list);
    expect(ListNode.toArray(result)).toEqual([3, 4]);
  });

  it('should return exact middle node for odd-length list', () => {
    const list = ListNode.fromArray([1, 2, 3, 4, 5]);
    const result = middleNode(list);
    expect(ListNode.toArray(result)).toEqual([3, 4, 5]);
  });

  it('should handle two-node list', () => {
    const list = ListNode.fromArray([1, 2]);
    const result = middleNode(list);
    expect(ListNode.toArray(result)).toEqual([2]);
  });

  it('should handle large odd-length list', () => {
    const list = ListNode.fromArray([...Array.from({ length: 999 }).keys()]); // 0...998
    const result = middleNode(list);
    expect(result?.val).toBe(499); // 中间值应该是499
  });

  it('should handle large even-length list', () => {
    const list = ListNode.fromArray([...Array.from({ length: 1000 }).keys()]); // 0...999
    const result = middleNode(list);
    expect(result?.val).toBe(500); // 第二个中间节点从500开始
  });

  it('should return correct sublist from middle', () => {
    const list = ListNode.fromArray([1, 2, 3, 4, 5, 6]);
    const result = middleNode(list);
    // 验证返回的确实是原链表的子链表（不是新创建的链表）
    expect(result).toBe(list?.next?.next?.next);
    expect(ListNode.toArray(result)).toEqual([4, 5, 6]);
  });
});
