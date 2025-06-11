import { describe, expect, it } from 'vitest';
import { myAtoi } from '@/problems/String/stringToInteger';

describe('myAtoi', () => {
  it('should return 0 for empty string', () => {
    expect(myAtoi('')).toBe(0);
  });

  it('should handle leading whitespace', () => {
    expect(myAtoi('   42')).toBe(42);
  });

  it('should handle positive sign', () => {
    expect(myAtoi('+42')).toBe(42);
  });

  it('should handle negative sign', () => {
    expect(myAtoi('-42')).toBe(-42);
  });

  it('should handle digits after whitespace and sign', () => {
    expect(myAtoi('   -42')).toBe(-42);
  });

  it('should stop parsing at non-digit character', () => {
    expect(myAtoi('4193 with words')).toBe(4193);
  });

  it('should return 0 if no valid conversion', () => {
    expect(myAtoi('words and 987')).toBe(0);
  });
});
