import { beforeEach, describe, expect, it } from 'vitest';
import { MyStack } from '@/problems/StackAndQueue/implementStackUsingQueues';

describe('myStack', () => {
  let stack: MyStack;

  beforeEach(() => {
    stack = new MyStack();
  });

  it('新创建的栈应为空', () => {
    expect(stack.empty()).toBe(true);
  });

  it('push 后栈不应为空', () => {
    stack.push(1);
    expect(stack.empty()).toBe(false);
  });

  it('应该能正确执行 push 和 top 操作', () => {
    stack.push(1);
    expect(stack.top()).toBe(1);
    stack.push(2);
    expect(stack.top()).toBe(2);
  });

  it('应该能正确执行 push 和 pop 操作', () => {
    stack.push(1);
    stack.push(2);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
  });

  it('混合操作测试', () => {
    stack.push(1);
    stack.push(2);
    expect(stack.top()).toBe(2);
    stack.push(3);
    expect(stack.pop()).toBe(3);
    expect(stack.empty()).toBe(false);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.empty()).toBe(true);
  });

  it('空栈调用 pop 应该报错', () => {
    expect(() => stack.pop()).toThrow('Stack is empty');
  });

  it('空栈调用 top 应该报错', () => {
    expect(() => stack.top()).toThrow('Stack is empty');
  });

  it('应该能处理大量数据', () => {
    const testSize = 1000;

    // 入栈 1-1000
    for (let i = 1; i <= testSize; i++) {
      stack.push(i);
      expect(stack.top()).toBe(i);
    }

    // 出栈并验证顺序
    for (let i = testSize; i >= 1; i--) {
      expect(stack.pop()).toBe(i);
    }

    expect(stack.empty()).toBe(true);
  });

  it('应该能正确处理交替的 push 和 pop', () => {
    stack.push(1);
    stack.push(2);
    expect(stack.pop()).toBe(2);
    stack.push(3);
    expect(stack.pop()).toBe(3);
    stack.push(4);
    expect(stack.pop()).toBe(4);
    expect(stack.pop()).toBe(1);
    expect(stack.empty()).toBe(true);
  });

  it('应该能处理重复值', () => {
    stack.push(1);
    stack.push(1);
    stack.push(2);
    stack.push(2);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.pop()).toBe(1);
    expect(stack.empty()).toBe(true);
  });
});
