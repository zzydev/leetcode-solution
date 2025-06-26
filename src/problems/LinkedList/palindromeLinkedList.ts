import type { ListNode } from '@/utils/ListNode';
import { middleNode } from './middleOfTheLinkedList';
import { reverseList } from './reverseLinkedList';

export function isPalindrome(head: ListNode | null): boolean {
  if (head == null) {
    return true;
  }
  const list: Array<ListNode> = [];
  let p: ListNode | null = head;
  while (p != null) {
    list.push(p);
    p = p.next;
  }
  let l = 0;
  let r = list.length - 1;
  while (l < r) {
    if (list[l].val !== list[r].val) {
      return false;
    }
    l++;
    r--;
  }
  return true;
}

export function isPalindrome1(head: ListNode | null): boolean {
  if (head == null || head.next == null) return true;
  const mid = middleNode(head);
  const right = reverseList(mid);
  let p = head;
  let q = right;
  while (q != null) {
    if (p.val !== q.val) {
      return false;
    }
    p = p.next as ListNode;
    q = q.next;
  }
  return true;
}
