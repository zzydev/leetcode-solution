import { ListNode } from '@/utils/ListNode';

export function removeNthFromEnd(
  head: ListNode | null,
  n: number,
): ListNode | null {
  if (head === null) {
    return null;
  }
  const dummyHead = new ListNode();
  dummyHead.next = head;
  let fast: ListNode | null = dummyHead;
  let slow: ListNode | null = dummyHead;
  while (n-- && fast !== null) {
    fast = fast.next;
  }
  if (fast === null) {
    return dummyHead.next;
  }
  fast = fast.next;
  while (fast !== null && slow !== null) {
    fast = fast.next;
    slow = slow.next;
  }
  if (slow !== null && slow.next !== null) {
    slow.next = slow.next.next;
  }
  return dummyHead.next;
}
