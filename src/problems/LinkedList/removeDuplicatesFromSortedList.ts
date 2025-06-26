import { ListNode } from '@/utils/ListNode';

export function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (head == null) return head;
  const dummyHead = new ListNode();
  let tail: ListNode | null = dummyHead;
  let p: ListNode | null = head;
  while (p != null) {
    const tmp: ListNode | null = p.next;
    if (p.val !== tail.val) {
      tail.next = p;
      tail = p;
      p.next = null;
    }
    p = tmp;
  }
  return dummyHead.next;
}
