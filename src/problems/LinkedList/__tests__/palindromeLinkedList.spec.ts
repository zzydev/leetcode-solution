import { describe, expect, it } from 'vitest';
import { isPalindrome } from '@/problems/LinkedList/palindromeLinkedList';
import { ListNode } from '@/utils/ListNode';

describe('isPalindrome', () => {
  it('should return true for empty list', () => {
    expect(isPalindrome(null)).toBe(true);
  });

  it('should return true for single-node list', () => {
    const list = ListNode.fromArray([1]);
    expect(isPalindrome(list)).toBe(true);
  });

  it('should recognize simple palindrome', () => {
    const list = ListNode.fromArray([1, 2, 2, 1]);
    expect(isPalindrome(list)).toBe(true);
  });

  it('should recognize odd-length palindrome', () => {
    const list = ListNode.fromArray([1, 2, 3, 2, 1]);
    expect(isPalindrome(list)).toBe(true);
  });

  it('should detect non-palindrome list', () => {
    const list = ListNode.fromArray([1, 2, 3]);
    expect(isPalindrome(list)).toBe(false);
  });

  it('should handle two-node palindrome', () => {
    const list = ListNode.fromArray([1, 1]);
    expect(isPalindrome(list)).toBe(true);
  });

  it('should handle two-node non-palindrome', () => {
    const list = ListNode.fromArray([1, 2]);
    expect(isPalindrome(list)).toBe(false);
  });

  it('should recognize long palindrome', () => {
    const list = ListNode.fromArray([1, 2, 3, 4, 5, 5, 4, 3, 2, 1]);
    expect(isPalindrome(list)).toBe(true);
  });

  it('should detect long non-palindrome', () => {
    const list = ListNode.fromArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(isPalindrome(list)).toBe(false);
  });

  it('should handle list with all identical values', () => {
    const list = ListNode.fromArray([2, 2, 2, 2, 2]);
    expect(isPalindrome(list)).toBe(true);
  });

  it('should handle list with negative values', () => {
    const list = ListNode.fromArray([-1, 2, 2, -1]);
    expect(isPalindrome(list)).toBe(true);
  });
});
