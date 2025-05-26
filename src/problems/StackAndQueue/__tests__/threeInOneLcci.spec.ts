import { describe, expect, it } from 'vitest';
import { TripleInOne } from '@/problems/StackAndQueue/threeInOneLcci';

describe('tripleInOne', () => {
  it('应正确初始化三个空栈', () => {
    const stack = new TripleInOne(5);
    expect(stack.isEmpty(0)).toBe(true);
    expect(stack.isEmpty(1)).toBe(true);
    expect(stack.isEmpty(2)).toBe(true);
  });

  it('应能向不同栈添加元素', () => {
    const stack = new TripleInOne(3);
    stack.push(0, 1);
    stack.push(1, 2);
    stack.push(2, 3);
    expect(stack.peek(0)).toBe(1);
    expect(stack.peek(1)).toBe(2);
    expect(stack.peek(2)).toBe(3);
  });

  it('应能弹出元素', () => {
    const stack = new TripleInOne(3);
    stack.push(0, 1);
    stack.push(0, 2);
    expect(stack.pop(0)).toBe(2);
    expect(stack.pop(0)).toBe(1);
    expect(stack.isEmpty(0)).toBe(true);
  });

  it('应正确处理混合操作', () => {
    const stack = new TripleInOne(10);
    // 栈0操作
    stack.push(0, 1);
    stack.push(0, 2);
    expect(stack.peek(0)).toBe(2);
    // 栈1操作
    stack.push(1, 3);
    stack.push(1, 4);
    expect(stack.pop(1)).toBe(4);
    // 栈2操作
    stack.push(2, 5);
    expect(stack.peek(2)).toBe(5);
    // 验证各栈状态
    expect(stack.pop(0)).toBe(2);
    expect(stack.pop(1)).toBe(3);
    expect(stack.pop(2)).toBe(5);
  });
});
