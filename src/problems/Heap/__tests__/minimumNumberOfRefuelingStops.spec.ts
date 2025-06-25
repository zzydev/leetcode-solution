import { describe, expect, it } from 'vitest';
import { minRefuelStops } from '@/problems/Heap/minimumNumberOfRefuelingStops';

describe('minRefuelStops', () => {
  it('should return 0 if target is reachable with initial fuel', () => {
    const target = 1;
    const startFuel = 1;
    const stations: number[][] = [];
    expect(minRefuelStops(target, startFuel, stations)).toBe(0);
  });

  it('should return -1 if not enough fuel even with all stations', () => {
    const target = 100;
    const startFuel = 1;
    const stations = [
      [10, 10],
      [20, 20],
    ];
    expect(minRefuelStops(target, startFuel, stations)).toBe(-1);
  });

  it('should return number of refueling stops needed', () => {
    const target = 100;
    const startFuel = 10;
    const stations = [
      [10, 60],
      [20, 30],
      [30, 30],
      [60, 40],
    ];
    expect(minRefuelStops(target, startFuel, stations)).toBe(2);
  });

  it('should handle case where no stations are needed', () => {
    const target = 100;
    const startFuel = 100;
    const stations = [[50, 50]];
    expect(minRefuelStops(target, startFuel, stations)).toBe(0);
  });

  it('should handle case where stations are not reachable', () => {
    const target = 100;
    const startFuel = 10;
    const stations = [[50, 50]];
    expect(minRefuelStops(target, startFuel, stations)).toBe(-1);
  });

  it('should handle case where stations are far apart', () => {
    const target = 1000;
    const startFuel = 83;
    const stations = [
      [25, 27],
      [36, 187],
      [140, 186],
      [378, 6],
      [492, 202],
      [517, 89],
      [579, 234],
      [673, 86],
      [808, 53],
      [954, 49],
    ];
    expect(minRefuelStops(target, startFuel, stations)).toBe(-1);
  });

  it('should handle case where stations are close together', () => {
    const target = 100;
    const startFuel = 25;
    const stations = [
      [25, 25],
      [50, 25],
      [75, 25],
    ];
    expect(minRefuelStops(target, startFuel, stations)).toBe(3);
  });

  it('should handle case where fuel at stations is very large', () => {
    const target = 1000;
    const startFuel = 10;
    const stations = [
      [10, 100],
      [110, 100],
      [210, 100],
      [310, 1000],
    ];
    expect(minRefuelStops(target, startFuel, stations)).toBe(4);
  });

  it('should handle case where stations are not sorted', () => {
    const target = 100;
    const startFuel = 10;
    const stations = [
      [20, 30],
      [10, 60],
      [30, 30],
      [60, 40],
    ];
    expect(minRefuelStops(target, startFuel, stations)).toBe(-1);
  });

  it('should handle case where stations are empty but target is reachable', () => {
    const target = 10;
    const startFuel = 15;
    const stations: number[][] = [];
    expect(minRefuelStops(target, startFuel, stations)).toBe(0);
  });
});
