import { ListNode } from '@/utils/ListNode';

export function removeDuplicateNodes(head: ListNode | null): ListNode | null {
  if (head === null) {
    return null;
  }
  const set = new Set<number>();
  const newHead = new ListNode();
  let tail = newHead;
  let p: ListNode | null = head;
  while (p !== null) {
    const tmp: ListNode | null = p.next;
    if (!set.has(p.val)) {
      set.add(p.val);
      tail.next = p;
      tail = p;
      tail.next = null;
    }
    p = tmp;
  }
  return newHead.next;
}
