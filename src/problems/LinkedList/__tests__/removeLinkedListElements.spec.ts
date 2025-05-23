import { describe, it, expect } from "vitest";
import { ListNode } from "@/utils/ListNode";
import { removeElements } from "@/problems/LinkedList/removeLinkedListElements";

describe("removeElements", () => {
    it("should remove all matching elements from the list", () => {
        const list = ListNode.fromArray([1, 2, 6, 3, 4, 5, 6]);
        const valToRemove = 6;
        const expected = [1, 2, 3, 4, 5];

        const result = removeElements(list, valToRemove);
        expect(ListNode.toArray(result)).toEqual(expected);
    });

    it("should remove elements from the beginning of the list", () => {
        const list = ListNode.fromArray([1, 1, 2, 3]);
        const valToRemove = 1;
        const expected = [2, 3];

        const result = removeElements(list, valToRemove);
        expect(ListNode.toArray(result)).toEqual(expected);
    });

    it("should remove elements from the end of the list", () => {
        const list = ListNode.fromArray([1, 2, 3, 3]);
        const valToRemove = 3;
        const expected = [1, 2];

        const result = removeElements(list, valToRemove);
        expect(ListNode.toArray(result)).toEqual(expected);
    });

    it("should handle removing all elements", () => {
        const list = ListNode.fromArray([7, 7, 7, 7]);
        const valToRemove = 7;
        const expected: number[] = [];

        const result = removeElements(list, valToRemove);
        expect(ListNode.toArray(result)).toEqual(expected);
    });

    it("should return null for an empty list", () => {
        const list = null;
        const valToRemove = 1;

        const result = removeElements(list, valToRemove);
        expect(result).toBeNull();
    });

    it("should return the same list when no matches are found", () => {
        const list = ListNode.fromArray([1, 2, 3, 4]);
        const valToRemove = 5;
        const expected = [1, 2, 3, 4];

        const result = removeElements(list, valToRemove);
        expect(ListNode.toArray(result)).toEqual(expected);
    });

    it("should handle consecutive elements to remove", () => {
        const list = ListNode.fromArray([1, 1, 1, 2, 1, 3, 1]);
        const valToRemove = 1;
        const expected = [2, 3];

        const result = removeElements(list, valToRemove);
        expect(ListNode.toArray(result)).toEqual(expected);
    });
});
