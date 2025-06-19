import { ListNode } from '@/utils/ListNode';

export function insertionSortList(head: ListNode | null): ListNode | null {
  if (head === null) {
    return null;
  }
  const newHead = new ListNode();
  let p: ListNode | null = head;
  while (p !== null) {
    const tmp: ListNode = p.next!;
    let q = newHead;
    while (q.next !== null && q.next.val <= p.val) {
      q = q.next;
    }
    p.next = q.next;
    q.next = p;

    p = tmp;
  }
  return newHead.next;
};
