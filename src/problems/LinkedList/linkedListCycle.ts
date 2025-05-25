import { ListNode } from '@/utils/ListNode';

export function hasCycle(head: ListNode | null): boolean {
    if (head === null) {
      return false;
    }
    let slow: ListNode | null = head;
    let fast = head.next;
    while (fast !== null && fast.next !== null) {
      slow = slow!.next;
      fast = fast.next.next;
      if (slow === fast) {return true;}
    }
    return false;
};