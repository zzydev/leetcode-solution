import { describe, expect, it } from 'vitest';
import { calculate } from '@/problems/StackAndQueue/calculatorLcci';

describe('calculate', () => {
  it('should handle simple addition', () => {
    expect(calculate('3+2')).toBe(5);
    expect(calculate('10+20')).toBe(30);
  });

  it('should handle simple subtraction', () => {
    expect(calculate('5-2')).toBe(3);
    expect(calculate('100-50')).toBe(50);
  });

  it('should handle multiplication', () => {
    expect(calculate('3*2')).toBe(6);
    expect(calculate('10*20')).toBe(200);
  });

  it('should handle division', () => {
    expect(calculate('6/2')).toBe(3);
    expect(calculate('100/4')).toBe(25);
  });

  it('should handle mixed operations', () => {
    expect(calculate('3+2*2')).toBe(7);
    expect(calculate(' 3/2 ')).toBe(1);
    expect(calculate(' 3+5 / 2 ')).toBe(5);
  });

  it('should respect operator precedence', () => {
    expect(calculate('2*3+4')).toBe(10);
    expect(calculate('2+3*4')).toBe(14);
    expect(calculate('2*3+4*5')).toBe(26);
  });

  it('should handle multiple spaces', () => {
    expect(calculate('  3   +   2   *   2   ')).toBe(7);
    expect(calculate(' 3  / 2 ')).toBe(1);
  });

  it('should handle complex expressions', () => {
    expect(calculate('1+2*5/3+6/4*2')).toBe(6);
    expect(calculate('1*2*3+4*5*6')).toBe(126);
  });

  it('should handle single number', () => {
    expect(calculate('42')).toBe(42);
    expect(calculate('   123   ')).toBe(123);
  });

  it('should handle division truncation', () => {
    expect(calculate('5/2')).toBe(2);
    expect(calculate('10/3')).toBe(3);
    expect(calculate('1/2+1')).toBe(1);
  });

  it('should handle large numbers', () => {
    expect(calculate('10000*10000')).toBe(100000000);
    expect(calculate('123456/123')).toBe(1003);
  });
});
