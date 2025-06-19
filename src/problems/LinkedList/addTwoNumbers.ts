import { ListNode } from '@/utils/ListNode';

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  const dummy = new ListNode();
  let newList = dummy;
  let carry = 0;
  while (l1 !== null || l2 !== null || carry !== 0) {
    if (l1 !== null) {
      carry += l1.val;
      l1 = l1.next;
    }
    if (l2 !== null) {
      carry += l2.val;
      l2 = l2.next;
    }
    newList.next = new ListNode(carry % 10);
    carry = Math.floor(carry / 10);
    newList = newList.next;
  }
  return dummy.next;
}
