import { describe, expect, it } from 'vitest';
import { MyQueue } from '@/problems/StackAndQueue/implementQueueUsingStacks';

describe('myQueue', () => {
  it('新创建的队列应为空', () => {
    const queue = new MyQueue();
    expect(queue.empty()).toBe(true);
  });

  it('push 后队列不应为空', () => {
    const queue = new MyQueue();
    queue.push(1);
    expect(queue.empty()).toBe(false);
  });

  it('应该能正确执行 push 和 peek 操作', () => {
    const queue = new MyQueue();
    queue.push(1);
    expect(queue.peek()).toBe(1);
    queue.push(2);
    expect(queue.peek()).toBe(1); // 检查队列的先进先出特性
  });

  it('应该能正确执行 push 和 pop 操作', () => {
    const queue = new MyQueue();
    queue.push(1);
    queue.push(2);
    expect(queue.pop()).toBe(1);
    expect(queue.pop()).toBe(2);
  });

  it('混合操作测试', () => {
    const queue = new MyQueue();
    queue.push(1);
    queue.push(2);
    expect(queue.peek()).toBe(1);
    queue.push(3);
    expect(queue.pop()).toBe(1);
    expect(queue.empty()).toBe(false);
    expect(queue.pop()).toBe(2);
    expect(queue.pop()).toBe(3);
    expect(queue.empty()).toBe(true);
  });

  it('空队列调用 pop 应该报错', () => {
    const queue = new MyQueue();
    expect(() => queue.pop()).toThrow('Queue is empty');
  });

  it('空队列调用 peek 应该报错', () => {
    const queue = new MyQueue();
    expect(() => queue.peek()).toThrow('Queue is empty');
  });

  it('应该能处理大量数据', () => {
    const queue = new MyQueue();
    const testSize = 1000;

    // 入队 1-1000
    for (let i = 1; i <= testSize; i++) {
      queue.push(i);
      expect(queue.peek()).toBe(1); // 每次检查队首是否还是1
    }

    // 出队并验证顺序
    for (let i = 1; i <= testSize; i++) {
      expect(queue.pop()).toBe(i);
    }

    expect(queue.empty()).toBe(true);
  });

  it('应该能正确处理交替的 push 和 pop', () => {
    const queue = new MyQueue();
    queue.push(1);
    queue.push(2);
    expect(queue.pop()).toBe(1);
    queue.push(3);
    expect(queue.pop()).toBe(2);
    queue.push(4);
    expect(queue.pop()).toBe(3);
    expect(queue.pop()).toBe(4);
    expect(queue.empty()).toBe(true);
  });

  it('应该能处理重复值', () => {
    const queue = new MyQueue();
    queue.push(1);
    queue.push(1);
    queue.push(2);
    queue.push(2);
    expect(queue.pop()).toBe(1);
    expect(queue.pop()).toBe(1);
    expect(queue.pop()).toBe(2);
    expect(queue.pop()).toBe(2);
    expect(queue.empty()).toBe(true);
  });
});
