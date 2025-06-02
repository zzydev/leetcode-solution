import { describe, expect, it } from 'vitest';
import { MedianFinder } from '@/problems/Heap/findMedianFromDataStream';

describe('MedianFinder', () => {
  it('should handle empty stream', () => {
    const medianFinder = new MedianFinder();
    expect(medianFinder.findMedian()).toBe(0);
  });

  it('should handle single element', () => {
    const medianFinder = new MedianFinder();
    medianFinder.addNum(5);
    expect(medianFinder.findMedian()).toBe(5);
  });

  it('should handle two elements', () => {
    const medianFinder = new MedianFinder();
    medianFinder.addNum(1);
    medianFinder.addNum(3);
    expect(medianFinder.findMedian()).toBe(2);
  });

  it('should handle multiple elements with odd count', () => {
    const medianFinder = new MedianFinder();
    medianFinder.addNum(1);
    medianFinder.addNum(2);
    medianFinder.addNum(3);
    expect(medianFinder.findMedian()).toBe(2);
  });

  it('should handle multiple elements with even count', () => {
    const medianFinder = new MedianFinder();
    medianFinder.addNum(1);
    medianFinder.addNum(2);
    medianFinder.addNum(3);
    medianFinder.addNum(4);
    expect(medianFinder.findMedian()).toBe(2.5);
  });

  it('should handle elements added in descending order', () => {
    const medianFinder = new MedianFinder();
    medianFinder.addNum(5);
    medianFinder.addNum(4);
    medianFinder.addNum(3);
    medianFinder.addNum(2);
    medianFinder.addNum(1);
    expect(medianFinder.findMedian()).toBe(3);
  });

  it('should handle elements added in ascending order', () => {
    const medianFinder = new MedianFinder();
    medianFinder.addNum(1);
    medianFinder.addNum(2);
    medianFinder.addNum(3);
    medianFinder.addNum(4);
    medianFinder.addNum(5);
    expect(medianFinder.findMedian()).toBe(3);
  });

  it('should handle elements with duplicates', () => {
    const medianFinder = new MedianFinder();
    medianFinder.addNum(1);
    medianFinder.addNum(2);
    medianFinder.addNum(2);
    medianFinder.addNum(3);
    medianFinder.addNum(4);
    expect(medianFinder.findMedian()).toBe(2);
  });

  it('should handle negative numbers', () => {
    const medianFinder = new MedianFinder();
    medianFinder.addNum(-1);
    medianFinder.addNum(-2);
    medianFinder.addNum(-3);
    expect(medianFinder.findMedian()).toBe(-2);
  });

  it('should handle mixed positive and negative numbers', () => {
    const medianFinder = new MedianFinder();
    medianFinder.addNum(-1);
    medianFinder.addNum(2);
    medianFinder.addNum(-3);
    medianFinder.addNum(4);
    expect(medianFinder.findMedian()).toBe(0.5);
  });

  it('should handle large numbers', () => {
    const medianFinder = new MedianFinder();
    medianFinder.addNum(1000000);
    medianFinder.addNum(2000000);
    medianFinder.addNum(3000000);
    expect(medianFinder.findMedian()).toBe(2000000);
  });

  it('should handle alternating adds and finds', () => {
    const medianFinder = new MedianFinder();
    medianFinder.addNum(1);
    expect(medianFinder.findMedian()).toBe(1);
    medianFinder.addNum(2);
    expect(medianFinder.findMedian()).toBe(1.5);
    medianFinder.addNum(3);
    expect(medianFinder.findMedian()).toBe(2);
    medianFinder.addNum(4);
    expect(medianFinder.findMedian()).toBe(2.5);
  });
});    