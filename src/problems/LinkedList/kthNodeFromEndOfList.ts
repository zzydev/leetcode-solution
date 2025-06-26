import { ListNode } from '@/utils/ListNode';

export function kthToLast(head: ListNode | null, k: number): number {
  const dummyHead = new ListNode();
  dummyHead.next = head;
  let slow: ListNode | null = dummyHead;
  let fast: ListNode | null = dummyHead;
  while (k-- && fast !== null) {
    fast = fast.next;
  }
  while (fast !== null && slow !== null) {
    fast = fast.next;
    slow = slow.next;
  }
  if (slow === null) {
    throw new Error('k is larger than the length of the linked list');
  }
  return slow.val;
}
