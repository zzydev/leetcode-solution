import { describe, expect, it } from 'vitest';
import { topKFrequent } from '@/problems/Heap/topKFrequentWords';

describe('topKFrequent', () => {
  it('should return top k frequent words sorted by frequency and lexicographically', () => {
    const words = ['i', 'love', 'leetcode', 'i', 'love', 'coding'];
    const k = 2;
    expect(topKFrequent(words, k)).toEqual(['i', 'love']);
  });

  it('should handle ties by sorting lexicographically', () => {
    const words = ['the', 'day', 'is', 'sunny', 'the', 'the', 'the', 'sunny', 'is', 'is'];
    const k = 4;
    expect(topKFrequent(words, k)).toEqual(['the', 'is', 'sunny', 'day']);
  });

  it('should return all words when k equals the number of unique words', () => {
    const words = ['apple', 'banana', 'apple', 'cherry', 'banana', 'apple'];
    const k = 3;
    expect(topKFrequent(words, k)).toEqual(['apple', 'banana', 'cherry']);
  });

  it('should handle all words having the same frequency', () => {
    const words = ['cat', 'dog', 'fish'];
    const k = 2;
    expect(topKFrequent(words, k)).toEqual(['cat', 'dog']);
  });

  it('should return empty array for empty input', () => {
    const words: string[] = [];
    const k = 0;
    expect(topKFrequent(words, k)).toEqual([]);
  });

  it('should handle k = 0', () => {
    const words = ['a', 'b', 'c'];
    const k = 0;
    expect(topKFrequent(words, k)).toEqual([]);
  });

  it('should handle single word', () => {
    const words = ['hello'];
    const k = 1;
    expect(topKFrequent(words, k)).toEqual(['hello']);
  });

  it('should handle case sensitivity', () => {
    const words = ['Hello', 'hello', 'World', 'world'];
    const k = 4;
    expect(topKFrequent(words, k)).toEqual(['Hello', 'World', 'hello', 'world']);
  });

  it('should handle words with different lengths', () => {
    const words = ['short', 'longer', 'longest', 'short', 'longer'];
    const k = 3;
    expect(topKFrequent(words, k)).toEqual(['longer', 'short', 'longest']);
  });

  it('should handle large input with multiple ties', () => {
    const words = ['a', 'a', 'b', 'b', 'c', 'c', 'd', 'd', 'e', 'e'];
    const k = 5;
    expect(topKFrequent(words, k)).toEqual(['a', 'b', 'c', 'd', 'e']);
  });
});
