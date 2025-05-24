import { describe, expect, it } from 'vitest';
import { oddEvenList } from '@/problems/LinkedList/oddEvenLinkedList';
import { ListNode } from '@/utils/ListNode';

describe('oddEvenList', () => {
  it('should handle empty list', () => {
    expect(oddEvenList(null)).toBeNull();
  });

  it('should return single node list unchanged', () => {
    const list = ListNode.fromArray([1]);
    const result = oddEvenList(list);
    expect(ListNode.toArray(result)).toEqual([1]);
  });

  it('should process two-node list correctly', () => {
    const list = ListNode.fromArray([1, 2]);
    const result = oddEvenList(list);
    expect(ListNode.toArray(result)).toEqual([1, 2]);
  });

  it('should rearrange odd-even list', () => {
    const list = ListNode.fromArray([1, 2, 3, 4, 5]);
    const result = oddEvenList(list);
    expect(ListNode.toArray(result)).toEqual([1, 3, 5, 2, 4]);
  });

  it('should handle even-length list', () => {
    const list = ListNode.fromArray([2, 1, 3, 5, 6, 4, 7]);
    const result = oddEvenList(list);
    expect(ListNode.toArray(result)).toEqual([2, 3, 6, 7, 1, 5, 4]);
  });

  it('should maintain original node order for odd positions', () => {
    const list = ListNode.fromArray([10, 20, 30, 40, 50]);
    const result = oddEvenList(list);
    const values = ListNode.toArray(result);
    expect(values.slice(0, 3)).toEqual([10, 30, 50]); // 验证奇数位节点顺序
  });

  it('should maintain original node order for even positions', () => {
    const list = ListNode.fromArray([5, 4, 3, 2, 1]);
    const result = oddEvenList(list);
    const values = ListNode.toArray(result);
    expect(values.slice(3)).toEqual([4, 2]); // 验证偶数位节点顺序
  });

  it('should handle large lists', () => {
    const list = ListNode.fromArray([...Array.from({ length: 100 }).keys()]); // 0到99
    const result = oddEvenList(list);
    const values = ListNode.toArray(result);

    // 验证前50个是奇数位节点（0,2,4...98）
    expect(values.slice(0, 50)).toEqual([...Array.from({ length: 50 }).keys()].map(i => i * 2));

    // 验证后50个是偶数位节点（1,3,5...99）
    expect(values.slice(50)).toEqual([...Array.from({ length: 50 }).keys()].map(i => i * 2 + 1));
  });

  it('should not create new nodes', () => {
    const list = ListNode.fromArray([1, 2, 3, 4]);
    const result = oddEvenList(list);

    // 验证是原节点重组而非新建
    expect(ListNode.toArray(result)).toEqual([1, 3, 2, 4]);
    expect(result).toBe(list); // 头节点不变
  });
});
