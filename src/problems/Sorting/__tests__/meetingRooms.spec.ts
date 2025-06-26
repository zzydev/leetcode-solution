import { describe, expect, it } from 'vitest';
import { canAttendMeetings } from '@/problems/Sorting/meetingRooms';

describe('canAttendMeetings', () => {
  it('should return true for empty intervals', () => {
    expect(canAttendMeetings([])).toBe(true);
  });

  it('should return true for single interval', () => {
    expect(canAttendMeetings([[0, 1]])).toBe(true);
  });

  it('should return true for non-overlapping intervals', () => {
    expect(
      canAttendMeetings([
        [0, 1],
        [2, 3],
        [4, 5],
      ]),
    ).toBe(true);
    expect(
      canAttendMeetings([
        [5, 10],
        [15, 20],
        [25, 30],
      ]),
    ).toBe(true);
  });

  it('should return false for overlapping intervals', () => {
    expect(
      canAttendMeetings([
        [0, 30],
        [5, 10],
        [15, 20],
      ]),
    ).toBe(false);
    expect(
      canAttendMeetings([
        [1, 5],
        [4, 6],
      ]),
    ).toBe(false);
    expect(
      canAttendMeetings([
        [7, 10],
        [2, 4],
      ]),
    ).toBe(true);
  });

  it('should handle intervals with the same start time', () => {
    expect(
      canAttendMeetings([
        [1, 2],
        [1, 3],
      ]),
    ).toBe(false);
    expect(
      canAttendMeetings([
        [5, 8],
        [5, 9],
      ]),
    ).toBe(false);
  });

  it('should handle intervals with the same end time', () => {
    expect(
      canAttendMeetings([
        [1, 3],
        [2, 3],
      ]),
    ).toBe(false);
    expect(
      canAttendMeetings([
        [4, 7],
        [5, 7],
      ]),
    ).toBe(false);
  });

  it('should handle intervals with zero duration', () => {
    expect(
      canAttendMeetings([
        [1, 1],
        [2, 2],
      ]),
    ).toBe(true);
    expect(
      canAttendMeetings([
        [1, 1],
        [1, 2],
      ]),
    ).toBe(true);
    expect(
      canAttendMeetings([
        [0, 0],
        [0, 1],
      ]),
    ).toBe(true);
  });

  it('should handle intervals with negative numbers', () => {
    expect(
      canAttendMeetings([
        [-5, -1],
        [0, 5],
      ]),
    ).toBe(true);
    expect(
      canAttendMeetings([
        [-5, 0],
        [-1, 5],
      ]),
    ).toBe(false);
  });

  it('should handle intervals in non-sorted order', () => {
    expect(
      canAttendMeetings([
        [7, 10],
        [2, 4],
      ]),
    ).toBe(true);
    expect(
      canAttendMeetings([
        [4, 5],
        [2, 3],
        [1, 2],
      ]),
    ).toBe(true);
    expect(
      canAttendMeetings([
        [4, 8],
        [1, 5],
      ]),
    ).toBe(false);
  });

  it('should handle intervals with large numbers', () => {
    expect(
      canAttendMeetings([
        [1000000, 2000000],
        [2000000, 3000000],
      ]),
    ).toBe(true);
    expect(
      canAttendMeetings([
        [1000000, 2000001],
        [2000000, 3000000],
      ]),
    ).toBe(false);
  });

  it('should handle intervals where one ends exactly when the next starts', () => {
    expect(
      canAttendMeetings([
        [1, 2],
        [2, 3],
      ]),
    ).toBe(true);
    expect(
      canAttendMeetings([
        [5, 10],
        [10, 15],
      ]),
    ).toBe(true);
  });

  it('should handle intervals with a mix of overlapping and non-overlapping', () => {
    expect(
      canAttendMeetings([
        [1, 5],
        [6, 10],
        [11, 15],
        [2, 4],
      ]),
    ).toBe(false);
    expect(
      canAttendMeetings([
        [1, 3],
        [4, 6],
        [7, 9],
        [10, 12],
      ]),
    ).toBe(true);
  });

  it('should handle intervals with all the same start and end time', () => {
    expect(
      canAttendMeetings([
        [1, 2],
        [1, 2],
        [1, 2],
      ]),
    ).toBe(false);
    expect(
      canAttendMeetings([
        [5, 5],
        [5, 5],
      ]),
    ).toBe(true);
  });
});
