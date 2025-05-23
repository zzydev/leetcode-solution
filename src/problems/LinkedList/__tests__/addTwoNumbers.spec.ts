import { describe, it, expect } from "vitest";
import { ListNode } from "@/utils/ListNode";
import { addTwoNumbers } from "@/problems/LinkedList/addTwoNumbers";

describe("addTwoNumbers", () => {
    it("should add two single-digit numbers", () => {
        const l1 = ListNode.fromArray([2]);
        const l2 = ListNode.fromArray([3]);
        const expected = [5];

        const result = addTwoNumbers(l1, l2);
        expect(ListNode.toArray(result)).toEqual(expected);
    });

    it("should add two multi-digit numbers", () => {
        const l1 = ListNode.fromArray([2, 4, 3]); // 342
        const l2 = ListNode.fromArray([5, 6, 4]); // 465
        const expected = [7, 0, 8]; // 807

        const result = addTwoNumbers(l1, l2);
        expect(ListNode.toArray(result)).toEqual(expected);
    });

    it("should handle carry at the end", () => {
        const l1 = ListNode.fromArray([9, 9]);
        const l2 = ListNode.fromArray([1]);
        const expected = [0, 0, 1];

        const result = addTwoNumbers(l1, l2);
        expect(ListNode.toArray(result)).toEqual(expected);
    });

    it("should handle empty lists", () => {
        const l1 = ListNode.fromArray([]);
        const l2 = ListNode.fromArray([1, 2]);
        const expected = [1, 2];

        const result = addTwoNumbers(l1, l2);
        expect(ListNode.toArray(result)).toEqual(expected);
    });

    it("should handle both empty lists", () => {
        const l1 = ListNode.fromArray([]);
        const l2 = ListNode.fromArray([]);
        const expected: number[] = [];

        const result = addTwoNumbers(l1, l2);
        expect(ListNode.toArray(result)).toEqual(expected);
    });

    it("should handle different length lists", () => {
        const l1 = ListNode.fromArray([9, 9, 9, 9]);
        const l2 = ListNode.fromArray([1]);
        const expected = [0, 0, 0, 0, 1];

        const result = addTwoNumbers(l1, l2);
        expect(ListNode.toArray(result)).toEqual(expected);
    });

    it("should handle multiple carries", () => {
        const l1 = ListNode.fromArray([9, 9, 9]);
        const l2 = ListNode.fromArray([9, 9, 9]);
        const expected = [8, 9, 9, 1];

        const result = addTwoNumbers(l1, l2);
        expect(ListNode.toArray(result)).toEqual(expected);
    });
});
