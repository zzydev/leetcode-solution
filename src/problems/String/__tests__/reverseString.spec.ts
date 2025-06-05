import { describe, expect, it } from 'vitest';
import { reverseString } from '@/problems/String/reverseString';

describe('reverseString', () => {
  it('should reverse empty array', () => {
    const s: string[] = [];
    reverseString(s);
    expect(s).toEqual([]);
  });

  it('should reverse single character', () => {
    const s = ['a'];
    reverseString(s);
    expect(s).toEqual(['a']);
  });

  it('should reverse two characters', () => {
    const s = ['h', 'e'];
    reverseString(s);
    expect(s).toEqual(['e', 'h']);
  });

  it('should reverse multiple characters', () => {
    const s = ['h', 'e', 'l', 'l', 'o'];
    reverseString(s);
    expect(s).toEqual(['o', 'l', 'l', 'e', 'h']);
  });

  it('should reverse string with special characters', () => {
    const s = ['H', 'a', 'n', 'n', 'a', 'h'];
    reverseString(s);
    expect(s).toEqual(['h', 'a', 'n', 'n', 'a', 'H']);
  });

  it('should handle uppercase and lowercase letters', () => {
    const s = ['R', 'e', 'v', 'e', 'r', 's', 'e'];
    reverseString(s);
    expect(s).toEqual(['e', 's', 'r', 'e', 'v', 'e', 'R']);
  });

  it('should handle numbers in string', () => {
    const s = ['1', '2', '3', '4', '5'];
    reverseString(s);
    expect(s).toEqual(['5', '4', '3', '2', '1']);
  });

  it('should handle mix of letters and numbers', () => {
    const s = ['h', 'e', 'l', 'l', 'o', '1', '2', '3'];
    reverseString(s);
    expect(s).toEqual(['3', '2', '1', 'o', 'l', 'l', 'e', 'h']);
  });

  it('should handle string with spaces', () => {
    const s = [' ', 'a', ' ', 'b', ' '];
    reverseString(s);
    expect(s).toEqual([' ', 'b', ' ', 'a', ' ']);
  });

  it('should handle palindrome', () => {
    const s = ['r', 'a', 'c', 'e', 'c', 'a', 'r'];
    reverseString(s);
    expect(s).toEqual(['r', 'a', 'c', 'e', 'c', 'a', 'r']);
  });
});
