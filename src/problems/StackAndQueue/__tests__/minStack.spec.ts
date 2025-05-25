import { describe, it, expect } from "vitest";
import { MinStack } from "@/problems/StackAndQueue/minStack";

describe("MinStack", () => {

  it("should return correct min after single push", () => {
    const stack = new MinStack();
    stack.push(5);
    expect(stack.getMin()).toBe(5);
    expect(stack.top()).toBe(5);
  });

  it("should track minimum correctly", () => {
    const stack = new MinStack();
    stack.push(3);
    stack.push(2);
    stack.push(5);
    expect(stack.getMin()).toBe(2);
    stack.pop();
    expect(stack.getMin()).toBe(2);
    stack.pop();
    expect(stack.getMin()).toBe(3);
  });

  it("should handle duplicate minimum values", () => {
    const stack = new MinStack();
    stack.push(2);
    stack.push(2);
    stack.push(3);
    expect(stack.getMin()).toBe(2);
    stack.pop();
    expect(stack.getMin()).toBe(2);
    stack.pop();
    expect(stack.getMin()).toBe(2);
  });

  it("should update minimum after pop", () => {
    const stack = new MinStack();
    stack.push(3);
    stack.push(1);
    stack.push(2);
    stack.push(1);
    expect(stack.getMin()).toBe(1);
    stack.pop();
    expect(stack.getMin()).toBe(1);
    stack.pop();
    expect(stack.getMin()).toBe(1);
    stack.pop();
    expect(stack.getMin()).toBe(3);
  });

  it("should work with negative numbers", () => {
    const stack = new MinStack();
    stack.push(-2);
    stack.push(0);
    stack.push(-3);
    expect(stack.getMin()).toBe(-3);
    stack.pop();
    expect(stack.top()).toBe(0);
    expect(stack.getMin()).toBe(-2);
  });

  it("should throw when popping empty stack", () => {
    const stack = new MinStack();
    expect(() => stack.pop()).toThrow("Stack is empty");
  });

  it("should handle mixed operations", () => {
    const stack = new MinStack();
    stack.push(5);
    stack.push(3);
    stack.push(4);
    stack.push(2);
    stack.push(6);
    
    expect(stack.getMin()).toBe(2);
    expect(stack.top()).toBe(6);
    
    stack.pop();
    expect(stack.getMin()).toBe(2);
    
    stack.pop();
    expect(stack.getMin()).toBe(3);
    
    stack.push(1);
    expect(stack.getMin()).toBe(1);
    
    stack.pop();
    expect(stack.getMin()).toBe(3);
  });
});