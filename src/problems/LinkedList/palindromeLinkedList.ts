import type { ListNode } from '@/utils/ListNode';

export function isPalindrome(head: ListNode | null): boolean {
  if (head == null) {
    return true;
  }
  const list: Array<ListNode> = [];
  let p: ListNode | null = head;
  while (p != null) {
    list.push(p);
    p = p.next;
  }
  let l = 0;
  let r = list.length - 1;
  while (l < r) {
    if (list[l].val !== list[r].val) {
      return false;
    }
    l++;
    r--;
  }
  return true;
};
