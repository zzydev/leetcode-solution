import { ListNode } from '@/utils/ListNode';

export function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (head === null) {
    return null;
  }
  let dummyHead = new ListNode();
  dummyHead.next = head;
  let fast: ListNode | null = dummyHead;
  let slow: ListNode | null = dummyHead;
  while (n -- && fast !== null) {
    fast = fast.next;
  }
  fast = fast!.next;
  while (fast !== null) {
    fast  = fast.next;
    slow = slow!.next;
  }
  slow!.next = slow!.next!.next;
  return dummyHead.next;
};