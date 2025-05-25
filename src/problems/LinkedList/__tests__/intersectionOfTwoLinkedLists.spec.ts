import { describe, expect, it } from 'vitest';
import { getIntersectionNode } from '@/problems/LinkedList/intersectionOfTwoLinkedLists';
import { ListNode } from '@/utils/ListNode';

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
    const common = ListNode.fromArray([8, 9, 10]);
    const listA = ListNode.fromArray([1, 2, 3]);
    const listB = ListNode.fromArray([4, 5]);

    // Connect lists to common part
    listA!.next!.next!.next = common;
    listB!.next!.next = common;

    expect(getIntersectionNode(listA, listB)).toBe(common);
  });

  it('should find intersection at last node', () => {
    const common = ListNode.fromArray([7]);
    const listA = ListNode.fromArray([1, 2, 3, 4, 5]);
    const listB = ListNode.fromArray([6, 7, 8]);

    listA!.next!.next!.next!.next!.next = common;
    listB!.next!.next!.next = common;

    expect(getIntersectionNode(listA, listB)).toBe(common);
  });

  it('should handle lists of different lengths', () => {
    const common = ListNode.fromArray([20, 21]);
    const listA = ListNode.fromArray([1, 2, 3, 4, 5]);
    const listB = ListNode.fromArray([6, 7]);

    listA!.next!.next!.next!.next!.next = common;
    listB!.next!.next = common;

    expect(getIntersectionNode(listA, listB)).toBe(common);
  });

  it('should handle large lists', () => {
    const common = ListNode.fromArray([...Array.from({ length: 100 }).keys()]);
    const listA = ListNode.fromArray([...Array.from({ length: 50 }).keys()]);
    const listB = ListNode.fromArray([...Array.from({ length: 75 }).keys()]);

    // Connect to common part
    let lastA = listA;
    while (lastA!.next) lastA = lastA!.next;
    lastA!.next = common;

    let lastB = listB;
    while (lastB!.next) lastB = lastB!.next;
    lastB!.next = common;

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
