import { describe, expect, it } from 'vitest';
import { kthToLast } from '@/problems/LinkedList/kthNodeFromEndOfList';
import { ListNode } from '@/utils/ListNode';

describe('kthToLast', () => {
  it('should return the only element for single-node list with k=1', () => {
    const list = ListNode.fromArray([5]);
    expect(kthToLast(list, 1)).toBe(5);
  });

  it('should return last element when k=1', () => {
    const list = ListNode.fromArray([1, 2, 3, 4, 5]);
    expect(kthToLast(list, 1)).toBe(5);
  });

  it('should return first element when k equals list length', () => {
    const list = ListNode.fromArray([10, 20, 30, 40]);
    expect(kthToLast(list, 4)).toBe(10);
  });

  it('should return middle element', () => {
    const list = ListNode.fromArray([1, 2, 3, 4, 5, 6, 7]);
    expect(kthToLast(list, 4)).toBe(4);
  });

  it('should work with large lists', () => {
    const arr = [...Array.from({ length: 1000 }).keys()].map(i => i + 1); // 1到1000
    const list = ListNode.fromArray(arr);
    expect(kthToLast(list, 1)).toBe(1000); // 最后一个
    expect(kthToLast(list, 500)).toBe(501); // 中间
    expect(kthToLast(list, 1000)).toBe(1); // 第一个
  });

  it('should handle lists with duplicate values', () => {
    const list = ListNode.fromArray([2, 2, 3, 3, 3, 4]);
    expect(kthToLast(list, 2)).toBe(3);
    expect(kthToLast(list, 4)).toBe(3);
  });
});
