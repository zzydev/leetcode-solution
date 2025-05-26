import { describe, expect, it } from 'vitest';
import { evalRPN } from '@/problems/StackAndQueue/evaluateReversePolishNotation';

describe('evalRPN', () => {
  it('should evaluate simple addition', () => {
    expect(evalRPN(['2', '1', '+'])).toBe(3);
    expect(evalRPN(['10', '20', '+'])).toBe(30);
  });

  it('should evaluate simple subtraction', () => {
    expect(evalRPN(['5', '2', '-'])).toBe(3);
    expect(evalRPN(['100', '50', '-'])).toBe(50);
  });

  it('should evaluate multiplication', () => {
    expect(evalRPN(['3', '2', '*'])).toBe(6);
    expect(evalRPN(['10', '20', '*'])).toBe(200);
  });

  it('should evaluate division with truncation', () => {
    expect(evalRPN(['6', '2', '/'])).toBe(3);
    expect(evalRPN(['100', '4', '/'])).toBe(25);
    expect(evalRPN(['5', '2', '/'])).toBe(2); // 向零取整
    expect(evalRPN(['-5', '2', '/'])).toBe(-2); // 负数除法
  });

  it('should handle complex expressions', () => {
    expect(evalRPN(['4', '13', '5', '/', '+'])).toBe(6);
    expect(evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'])).toBe(22);
  });

  it('should handle single number input', () => {
    expect(evalRPN(['42'])).toBe(42);
    expect(evalRPN(['-123'])).toBe(-123);
  });

  it('should handle multiple operations', () => {
    expect(evalRPN(['2', '1', '+', '3', '*'])).toBe(9);
    expect(evalRPN(['4', '13', '5', '/', '+'])).toBe(6);
  });

  it('should handle large numbers', () => {
    expect(evalRPN(['10000', '10000', '*'])).toBe(100000000);
    expect(evalRPN(['123456', '123', '/'])).toBe(1003);
  });

  it('should handle negative numbers', () => {
    expect(evalRPN(['-2', '3', '*'])).toBe(-6);
    expect(evalRPN(['5', '-2', '/'])).toBe(-2);
  });
});
