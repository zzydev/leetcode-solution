import { ListNode } from '@/utils/ListNode';

export function reverseKGroup(
  head: ListNode | null,
  k: number,
): ListNode | null {
  const dummyHead = new ListNode();
  let tail = dummyHead;

  let p = head;
  while (p !== null) {
    let count = 0;
    let q: ListNode | null = p;
    while (q != null) {
      count++;
      if (count === k) {
        break;
      }
      q = q.next;
    }
    if (q == null) {
      tail.next = p;
      return dummyHead.next;
    } else {
      const tmp = q.next;
      const group = reverse(p, q);
      tail.next = group[0];
      tail = group[1];
      p = tmp;
    }
  }
  return dummyHead.next;
}

function reverse(head: ListNode, tail: ListNode) {
  let newHead: ListNode | null = null;
  let p: ListNode | null = head;
  while (p !== tail) {
    const tmp = p.next as ListNode;
    p.next = newHead;
    newHead = p;
    p = tmp;
  }
  tail.next = newHead;
  newHead = tail;

  return [tail, head];
}
