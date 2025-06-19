import { ListNode } from '@/utils/ListNode';

export function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null {
  if (list1 == null)
    return list2;
  if (list2 == null)
    return list1;
  let p1: ListNode | null = list1;
  let p2: ListNode | null = list2;
  const dummyHead = new ListNode();
  let tail = dummyHead;
  while (p1 != null && p2 != null) {
    if (p1.val <= p2.val) {
      tail.next = p1;
      tail = p1;
      p1 = p1.next;
    }
    else {
      tail.next = p2;
      tail = p2;
      p2 = p2.next;
    }
  }
  if (p1 != null)
    tail.next = p1;
  if (p2 != null)
    tail.next = p2;
  return dummyHead.next;
}
