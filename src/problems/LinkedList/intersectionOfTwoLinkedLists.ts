import { ListNode } from '@/utils/ListNode';


export function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  let lenA = 0;
  let pA = headA;
  while (pA !== null) {
    lenA ++;
    pA = pA.next;
  }
  let lenB = 0;
  let pB = headB;
  while (pB !== null) {
    lenB ++;
    pB = pB.next;
  }
  pA = headA;
  pB = headB;
  if (lenA > lenB) {
    for (let i = 0; i < lenA - lenB; i ++) {
      pA = pA!.next;
    }
  } else {
    for (let i = 0; i < lenB - lenA; i ++) {
      pB = pB!.next;
    }
  }

  while (pA != pB) {
    pA = pA!.next;
    pB = pB!.next;
  }
  return pA;
};