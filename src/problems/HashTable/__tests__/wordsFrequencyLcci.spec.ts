import { describe, expect, it } from 'vitest';
import { WordsFrequency } from '@/problems/HashTable/wordsFrequencyLcci';

describe('wordsFrequency', () => {
  it('should return 0 for empty dictionary', () => {
    const freq = new WordsFrequency([]);
    expect(freq.get('hello')).toBe(0);
  });

  it('should count single word correctly', () => {
    const freq = new WordsFrequency(['hello']);
    expect(freq.get('hello')).toBe(1);
  });

  it('should count multiple words', () => {
    const freq = new WordsFrequency(['hello', 'world', 'hello']);
    expect(freq.get('hello')).toBe(2);
    expect(freq.get('world')).toBe(1);
    expect(freq.get('unknown')).toBe(0);
  });

  it('should handle case-sensitive words', () => {
    const freq = new WordsFrequency(['Hello', 'hello', 'HELLO']);
    expect(freq.get('Hello')).toBe(1);
    expect(freq.get('hello')).toBe(1);
    expect(freq.get('HELLO')).toBe(1);
  });

  it('should handle special characters and punctuation', () => {
    const freq = new WordsFrequency(['hello!', 'world?', 'hello']);
    expect(freq.get('hello!')).toBe(1);
    expect(freq.get('world?')).toBe(1);
    expect(freq.get('hello')).toBe(1);
  });

  it('should handle repeated queries efficiently', () => {
    const freq = new WordsFrequency(['apple', 'banana', 'apple', 'cherry']);
    expect(freq.get('apple')).toBe(2);
    expect(freq.get('banana')).toBe(1);
    expect(freq.get('cherry')).toBe(1);
    expect(freq.get('date')).toBe(0);
  });
});
