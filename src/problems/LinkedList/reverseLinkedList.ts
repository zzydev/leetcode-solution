import type { ListNode } from '@/utils/ListNode';

export function reverseList(head: ListNode | null): ListNode | null {
  let newHead: ListNode | null = null;
  let p = head;
  while (p != null) {
    const tmp = p.next;
    p.next = newHead;
    newHead = p;
    p = tmp;
  }
  return newHead;
}
