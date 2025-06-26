import { describe, expect, it } from 'vitest';
import { getIntersectionNode } from '@/problems/LinkedList/intersectionOfTwoLinkedLists';
import { ListNode } from '@/utils/ListNode';

// 辅助函数：安全地连接链表
function connectLists(
  head: ListNode | null,
  tail: ListNode | null,
): ListNode | null {
  if (!head || !tail) return null;

  let current = head;
  while (current.next) {
    current = current.next;
  }
  current.next = tail;
  return head;
}

// 辅助函数：创建相交链表
function createIntersectingLists(
  aPrefix: number[],
  bPrefix: number[],
  common: number[],
): {
  listA: ListNode | null;
  listB: ListNode | null;
  intersection: ListNode | null;
} {
  const commonNode = ListNode.fromArray(common);
  const listA = connectLists(ListNode.fromArray(aPrefix), commonNode);
  const listB = connectLists(ListNode.fromArray(bPrefix), commonNode);

  return { listA, listB, intersection: commonNode };
}

describe('getIntersectionNode', () => {
  it('should return null for two empty lists', () => {
    expect(getIntersectionNode(null, null)).toBeNull();
  });

  it('should return null when one list is empty', () => {
    const listA = ListNode.fromArray([1, 2, 3]);
    expect(getIntersectionNode(listA, null)).toBeNull();
    expect(getIntersectionNode(null, listA)).toBeNull();
  });

  it('should return null for non-intersecting lists', () => {
    const listA = ListNode.fromArray([1, 2, 3]);
    const listB = ListNode.fromArray([4, 5, 6]);
    expect(getIntersectionNode(listA, listB)).toBeNull();
  });

  it('should find intersection at first node', () => {
    const common = ListNode.fromArray([10, 11, 12]);
    const listA = common;
    const listB = common;
    expect(getIntersectionNode(listA, listB)).toBe(common);
  });

  it('should find intersection at middle node', () => {
    const { listA, listB, intersection } = createIntersectingLists(
      [1, 2, 3],
      [4, 5],
      [8, 9, 10],
    );

    expect(getIntersectionNode(listA, listB)).toBe(intersection);
  });

  it('should find intersection at last node', () => {
    const { listA, listB, intersection } = createIntersectingLists(
      [1, 2, 3, 4, 5],
      [6, 7, 8],
      [7],
    );

    expect(getIntersectionNode(listA, listB)).toBe(intersection);
  });

  it('should handle lists of different lengths', () => {
    const { listA, listB, intersection } = createIntersectingLists(
      [1, 2, 3, 4, 5],
      [6, 7],
      [20, 21],
    );

    expect(getIntersectionNode(listA, listB)).toBe(intersection);
  });

  it('should handle large lists', () => {
    const common = ListNode.fromArray([...Array.from({ length: 100 }).keys()]);
    const listA = ListNode.fromArray([...Array.from({ length: 50 }).keys()]);
    const listB = ListNode.fromArray([...Array.from({ length: 75 }).keys()]);

    // 安全连接链表
    connectLists(listA, common);
    connectLists(listB, common);

    expect(getIntersectionNode(listA, listB)).toBe(common);
  });

  it('should handle lists with same prefix but no intersection', () => {
    const listA = ListNode.fromArray([1, 2, 3, 4]);
    const listB = ListNode.fromArray([1, 2, 3, 5]);
    expect(getIntersectionNode(listA, listB)).toBeNull();
  });

  it('should handle lists with duplicate values but no intersection', () => {
    const listA = ListNode.fromArray([1, 2, 2, 3]);
    const listB = ListNode.fromArray([2, 2, 3]);
    expect(getIntersectionNode(listA, listB)).toBeNull();
  });
});
