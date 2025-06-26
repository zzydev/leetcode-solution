import { ListNode } from '@/utils/ListNode';
import { Heap } from '../../utils/Heap';

export function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  const minHeap = new Heap<ListNode>((a, b) => a.val < b.val);
  for (const list of lists) {
    if (list !== null) {
      minHeap.insert(list);
    }
  }
  const dummy = new ListNode();
  let tail = dummy;
  while (!minHeap.isEmpty()) {
    const cur = minHeap.extract();
    if (cur === null) {
      throw new Error('Heap is empty');
    }
    tail.next = cur;
    tail = cur;
    if (cur.next !== null) {
      minHeap.insert(cur.next);
    }
  }
  return dummy.next;
}
