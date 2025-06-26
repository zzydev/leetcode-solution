import { describe, expect, it } from 'vitest';
import { dailyTemperatures } from '@/problems/StackAndQueue/dailyTemperatures';

describe('dailyTemperatures', () => {
  it('should handle empty input', () => {
    expect(dailyTemperatures([])).toEqual([]);
  });

  it('should handle single day', () => {
    expect(dailyTemperatures([30])).toEqual([0]);
  });

  it('should handle all decreasing temperatures', () => {
    expect(dailyTemperatures([30, 29, 28, 27])).toEqual([0, 0, 0, 0]);
  });

  it('should handle all increasing temperatures', () => {
    expect(dailyTemperatures([27, 28, 29, 30])).toEqual([1, 1, 1, 0]);
  });

  it('should solve basic case', () => {
    expect(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])).toEqual([
      1, 1, 4, 2, 1, 1, 0, 0,
    ]);
  });

  it('should handle constant temperatures', () => {
    expect(dailyTemperatures([30, 30, 30, 30])).toEqual([0, 0, 0, 0]);
  });

  it('should handle mixed temperatures', () => {
    expect(dailyTemperatures([55, 38, 53, 81, 61, 93, 97, 32, 43, 78])).toEqual(
      [3, 1, 1, 2, 1, 1, 0, 1, 1, 0],
    );
  });

  it('should handle large temperature range', () => {
    const input = [...Array.from({ length: 100 }).keys()].map((i) => i + 30);
    const expected = [...Array.from({ length: 99 }).fill(1), 0];
    expect(dailyTemperatures(input)).toEqual(expected);
  });

  it('should handle random temperature fluctuations', () => {
    expect(dailyTemperatures([34, 33, 32, 34, 33, 35, 36, 34, 33])).toEqual([
      5, 2, 1, 2, 1, 1, 0, 0, 0,
    ]);
  });
});
