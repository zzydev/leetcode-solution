import { describe, expect, it } from 'vitest';
import { isPalindrome, isPalindrome1 } from '@/problems/LinkedList/palindromeLinkedList';
import { ListNode } from '@/utils/ListNode';

const isPalindromeFunctions = [
  { name: 'isPalindrome', fn: isPalindrome },
  { name: 'isPalindrome1', fn: isPalindrome1 },
];

isPalindromeFunctions.forEach(({ name, fn }) => {
  describe(`${name}`, () => {
    it('空链表应返回 true', () => {
      expect(fn(null)).toBe(true);
    });

    it('单节点链表应返回 true', () => {
      const list = ListNode.fromArray([1]);
      expect(fn(list)).toBe(true);
    });

    it('应识别简单回文链表', () => {
      const list = ListNode.fromArray([1, 2, 2, 1]);
      expect(fn(list)).toBe(true);
    });

    it('应识别奇数长度回文链表', () => {
      const list = ListNode.fromArray([1, 2, 3, 2, 1]);
      expect(fn(list)).toBe(true);
    });

    it('应检测非回文链表', () => {
      const list = ListNode.fromArray([1, 2, 3]);
      expect(fn(list)).toBe(false);
    });

    it('应处理两节点回文链表', () => {
      const list = ListNode.fromArray([1, 1]);
      expect(fn(list)).toBe(true);
    });

    it('应处理两节点非回文链表', () => {
      const list = ListNode.fromArray([1, 2]);
      expect(fn(list)).toBe(false);
    });

    it('应识别长回文链表', () => {
      const list = ListNode.fromArray([1, 2, 3, 4, 5, 5, 4, 3, 2, 1]);
      expect(fn(list)).toBe(true);
    });

    it('应检测长非回文链表', () => {
      const list = ListNode.fromArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);
      expect(fn(list)).toBe(false);
    });

    it('应处理全相同值链表', () => {
      const list = ListNode.fromArray([2, 2, 2, 2, 2]);
      expect(fn(list)).toBe(true);
    });

    it('应处理含负数的回文链表', () => {
      const list = ListNode.fromArray([-1, 2, 2, -1]);
      expect(fn(list)).toBe(true);
    });
  });
});
