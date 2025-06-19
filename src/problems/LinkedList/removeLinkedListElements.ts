import { ListNode } from '@/utils/ListNode';

export function removeElements(
  head: ListNode | null,
  val: number,
): ListNode | null {
  if (head == null) {
    return null;
  }
  const dummyHead = new ListNode();
  dummyHead.next = head;
  let prev = dummyHead;
  while (prev.next != null) {
    if (prev.next.val === val) {
      prev.next = prev.next.next;
    }
    else {
      prev = prev.next;
    }
  }
  return dummyHead.next;
}
