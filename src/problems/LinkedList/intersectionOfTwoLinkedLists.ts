import type { ListNode } from '@/utils/ListNode';

export function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null,
): ListNode | null {
  let lenA = 0;
  let pA = headA;
  while (pA !== null) {
    lenA++;
    pA = pA.next;
  }
  let lenB = 0;
  let pB = headB;
  while (pB !== null) {
    lenB++;
    pB = pB.next;
  }
  pA = headA;
  pB = headB;
  if (lenA > lenB) {
    for (let i = 0; i < lenA - lenB && pA !== null; i++) {
      pA = pA.next;
    }
  } else {
    for (let i = 0; i < lenB - lenA && pB !== null; i++) {
      pB = pB.next;
    }
  }

  while (pA !== pB && pA !== null && pB !== null) {
    pA = pA.next;
    pB = pB.next;
  }
  return pA;
}
