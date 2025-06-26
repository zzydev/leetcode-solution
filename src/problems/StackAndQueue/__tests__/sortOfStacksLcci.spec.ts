import { beforeEach, describe, expect, it } from 'vitest';
import { SortedStack } from '@/problems/StackAndQueue/sortOfStacksLcci';

describe('sortedStack', () => {
  let stack: SortedStack;

  beforeEach(() => {
    stack = new SortedStack();
  });

  it('新创建的排序栈应为空', () => {
    expect(stack.isEmpty()).toBe(true);
  });

  it('push 后栈不应为空', () => {
    stack.push(1);
    expect(stack.isEmpty()).toBe(false);
  });

  it('应该能正确排序数字', () => {
    stack.push(3);
    stack.push(1);
    stack.push(2);
    expect(stack.peek()).toBe(1);
    stack.pop();
    expect(stack.peek()).toBe(2);
  });

  it('应该能处理相同值的排序', () => {
    stack.push(2);
    stack.push(2);
    stack.push(1);
    expect(stack.peek()).toBe(1);
    stack.pop();
    expect(stack.peek()).toBe(2);
    stack.pop();
    expect(stack.peek()).toBe(2);
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
  });

  it('应该能处理空栈的peek操作', () => {
    expect(stack.peek()).toBe(-1);
  });

  it('应该能处理空栈的pop操作', () => {
    expect(() => stack.pop()).toThrow('Stack is empty');
  });

  it('应该能处理大量数据排序', () => {
    const testSize = 1000;
    const nums = Array.from({ length: testSize }, () =>
      Math.floor(Math.random() * 10000),
    );

    nums.forEach((num) => stack.push(num));

    let prev = stack.peek();
    stack.pop();
    while (!stack.isEmpty()) {
      const current = stack.peek();
      expect(current).toBeGreaterThanOrEqual(prev);
      prev = current;
      stack.pop();
    }
  });

  it('应该能处理降序输入', () => {
    stack.push(5);
    stack.push(4);
    stack.push(3);
    stack.push(2);
    stack.push(1);

    expect(stack.peek()).toBe(1);
    stack.pop();
    expect(stack.peek()).toBe(2);
    stack.pop();
    expect(stack.peek()).toBe(3);
    stack.pop();
    expect(stack.peek()).toBe(4);
    stack.pop();
    expect(stack.peek()).toBe(5);
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
  });

  it('应该能处理升序输入', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(5);

    expect(stack.peek()).toBe(1);
    stack.pop();
    expect(stack.peek()).toBe(2);
    stack.pop();
    expect(stack.peek()).toBe(3);
    stack.pop();
    expect(stack.peek()).toBe(4);
    stack.pop();
    expect(stack.peek()).toBe(5);
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
  });

  it('应该能处理混合输入', () => {
    stack.push(3);
    stack.push(1);
    stack.push(4);
    stack.push(2);
    stack.push(5);

    expect(stack.peek()).toBe(1);
    stack.pop();
    expect(stack.peek()).toBe(2);
    stack.pop();
    expect(stack.peek()).toBe(3);
    stack.pop();
    expect(stack.peek()).toBe(4);
    stack.pop();
    expect(stack.peek()).toBe(5);
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
  });
});
