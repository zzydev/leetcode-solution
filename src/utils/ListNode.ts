export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }

  static fromArray(arr: number[]): ListNode | null {
    if (!arr.length)
      return null;

    const head = new ListNode(arr[0]);
    let current = head;

    for (let i = 1; i < arr.length; i++) {
      current.next = new ListNode(arr[i]);
      current = current.next;
    }

    return head;
  }

  static toArray(head: ListNode | null): number[] {
    const arr: number[] = [];
    let current = head;

    while (current) {
      arr.push(current.val);
      current = current.next;
    }

    return arr;
  }

  static connect(list: ListNode | null, tail: ListNode | null): void {
    if (!list)
      return;
    let current = list;
    while (current.next) {
      current = current.next;
    }
    current.next = tail;
  }
}
