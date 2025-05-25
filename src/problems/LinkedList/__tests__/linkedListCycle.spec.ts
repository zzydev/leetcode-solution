import { describe, expect, it } from 'vitest';
import { hasCycle } from '@/problems/LinkedList/linkedListCycle';
import { ListNode } from '@/utils/ListNode';

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
    // Make last node point to head
    let last = list;
    while (last!.next) last = last!.next;
    last!.next = list;
    expect(hasCycle(list)).toBe(true);
  });

  it('should detect middle cycle', () => {
    const list = ListNode.fromArray([1, 2, 3, 4, 5]);
    // Make node 3 point to node 2
    const node2 = list!.next;
    const node3 = node2!.next;
    node3!.next = node2;
    expect(hasCycle(list)).toBe(true);
  });

  it('should handle large cycle', () => {
    const nodes = [...Array.from({ length: 1000 }).keys()].map(val => new ListNode(val));
    // Link all nodes linearly
    for (let i = 0; i < nodes.length - 1; i++) {
      nodes[i].next = nodes[i + 1];
    }
    // Create cycle from last to 500th node
    nodes[nodes.length - 1].next = nodes[500];
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
