import { ListNode } from '@/utils/ListNode';

export function oddEvenList(head: ListNode | null): ListNode | null {
  if (head == null) return null;
  const oddHead = new ListNode();
  let oddTail = oddHead;
  const evenHead = new ListNode();
  let evenTail = evenHead;
  let p: ListNode | null = head;
  let count = 1;
  while (p != null) {
    const tmp: ListNode | null = p.next;
    if (count % 2 === 1) {
      p.next = null;
      oddTail.next = p;
      oddTail = p;
    } else {
      p.next = null;
      evenTail.next = p;
      evenTail = p;
    }
    count++;
    p = tmp;
  }
  oddTail.next = evenHead.next;
  return oddHead.next;
}
