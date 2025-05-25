import { ListNode } from '@/utils/ListNode';

export function kthToLast(head: ListNode | null, k: number): number {
  const dummyHead = new ListNode();
  dummyHead.next = head;
  let slow: ListNode | null = dummyHead;
  let fast: ListNode | null = dummyHead;
  while (k-- && fast !== null) {
    fast = fast.next;
  }
  while (fast !== null) {
    fast = fast.next;
    slow = slow!.next;
  }
  return slow!.val;
};
