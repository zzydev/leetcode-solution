import { describe, expect, it } from 'vitest';
import { originalDigits } from '@/problems/HashTable/reconstructOriginalDigitsFromEnglish';

describe('originalDigits', () => {
  it('should return "0" for input "zero"', () => {
    expect(originalDigits('zero')).toBe('0');
  });

  it('should return "8" for input "eight"', () => {
    expect(originalDigits('eight')).toBe('8');
  });

  it('should return "012" for input "owoztneoer"', () => {
    expect(originalDigits('owoztneoer')).toBe('012');
  });

  it('should return "00" for input "zerozero"', () => {
    expect(originalDigits('zerozero')).toBe('00');
  });

  it('should return "75" for input "evisene"', () => {
    expect(originalDigits('evisene')).toBe('7');
  });

  it('should return "45" for input "ffixveour"', () => {
    expect(originalDigits('ffixveour')).toBe('45');
  });

  it('should return "99" for input "nnnineieee"', () => {
    expect(originalDigits('nnnineieee')).toBe('99');
  });

  it('should return "222" for input "twotwotwo"', () => {
    expect(originalDigits('twotwotwo')).toBe('222');
  });

  it('should return "0123456789" for full input', () => {
    expect(originalDigits('zeroonetwothreefourfivesixseveneightnine')).toBe('0123456789');
  });
});
