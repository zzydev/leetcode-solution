import { describe, expect, it } from 'vitest';
import { hasCycle } from '@/problems/LinkedList/linkedListCycle';
import { ListNode } from '@/utils/ListNode';

function getLastNode(head: ListNode | null): ListNode | null {
  if (!head) return null;

  let current = head;
  while (current.next) {
    current = current.next;
  }
  return current;
}

function getNthNode(head: ListNode | null, n: number): ListNode | null {
  if (!head) return null;

  let current = head;
  for (let i = 0; i < n; i++) {
    if (!current.next) return null;
    current = current.next;
  }
  return current;
}

describe('hasCycle', () => {
  it('should return false for empty list', () => {
    expect(hasCycle(null)).toBe(false);
  });

  it('should return false for single node without cycle', () => {
    const list = ListNode.fromArray([1]);
    expect(hasCycle(list)).toBe(false);
  });

  it('should detect single node cycle', () => {
    const list = new ListNode(1);
    list.next = list; // Create cycle
    expect(hasCycle(list)).toBe(true);
  });

  it('should detect small cycle', () => {
    const node1 = new ListNode(1);
    const node2 = new ListNode(2);
    node1.next = node2;
    node2.next = node1; // Create cycle
    expect(hasCycle(node1)).toBe(true);
  });

  it('should return false for linear list', () => {
    const list = ListNode.fromArray([1, 2, 3, 4, 5]);
    expect(hasCycle(list)).toBe(false);
  });

  it('should detect tail cycle', () => {
    const list = ListNode.fromArray([1, 2, 3, 4, 5]);
    const last = getLastNode(list);

    if (last) {
      last.next = list; // Create cycle
    }

    expect(hasCycle(list)).toBe(true);
  });

  it('should detect middle cycle', () => {
    const list = ListNode.fromArray([1, 2, 3, 4, 5]);
    const node2 = getNthNode(list, 1);
    const node3 = getNthNode(list, 2);

    if (node2 && node3) {
      node3.next = node2; // Create cycle
    }

    expect(hasCycle(list)).toBe(true);
  });

  it('should handle large cycle', () => {
    const nodes = [...Array.from({ length: 1000 }).keys()].map(
      (val) => new ListNode(val),
    );

    for (let i = 0; i < nodes.length - 1; i++) {
      nodes[i].next = nodes[i + 1];
    }

    if (nodes.length > 500) {
      nodes[nodes.length - 1].next = nodes[500];
    }

    expect(hasCycle(nodes[0])).toBe(true);
  });

  it('should handle large non-cycle list', () => {
    const list = ListNode.fromArray([...Array.from({ length: 1000 }).keys()]);
    expect(hasCycle(list)).toBe(false);
  });

  it('should detect cycle in two-node list', () => {
    const node1 = new ListNode(1);
    const node2 = new ListNode(2);
    node1.next = node2;
    node2.next = node1; // Create cycle
    expect(hasCycle(node1)).toBe(true);
  });
});
