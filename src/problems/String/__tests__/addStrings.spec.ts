import { describe, expect, it } from 'vitest';
import { addStrings } from '@/problems/String/addStrings';

describe('addStrings', () => {
  it('should add two single-digit numbers', () => {
    expect(addStrings('1', '2')).toBe('3');
  });

  it('should handle carry from the least significant digit', () => {
    expect(addStrings('5', '5')).toBe('10');
  });

  it('should add two multi-digit numbers', () => {
    expect(addStrings('123', '456')).toBe('579');
  });

  it('should handle different length numbers', () => {
    expect(addStrings('123', '4567')).toBe('4690');
  });

  it('should handle multiple carries', () => {
    expect(addStrings('999', '1')).toBe('1000');
  });

  it('should handle zeros', () => {
    expect(addStrings('0', '0')).toBe('0');
  });

  it('should handle zero and a non-zero number', () => {
    expect(addStrings('0', '123')).toBe('123');
    expect(addStrings('123', '0')).toBe('123');
  });

  it('should handle very large numbers', () => {
    expect(addStrings('999999999999999999', '1')).toBe('1000000000000000000');
  });

  it('should handle numbers requiring multiple carries', () => {
    expect(addStrings('999', '999')).toBe('1998');
  });

  it('should handle different length numbers with carries', () => {
    expect(addStrings('999', '1234')).toBe('2233');
  });

  it('should handle addition resulting in longer length', () => {
    expect(addStrings('99', '1')).toBe('100');
  });

  it('should handle numbers with varying lengths and carries', () => {
    expect(addStrings('888', '22')).toBe('910');
  });

  it('should handle addition where one number is much longer', () => {
    expect(addStrings('123456789', '987654321')).toBe('1111111110');
  });

  it('should handle large numbers with carries throughout', () => {
    expect(addStrings('9999999999', '9999999999')).toBe('19999999998');
  });
});
