"use strict";

describe("sortWarmup.isSorted()", function() {
  it("sortWarmup.isSorted([]) -> true", function() {
    expect(sortWarmup.isSorted([]) ).toBe(true);
  });
  it("sortWarmup.isSorted([1]) -> true", function() {
    expect(sortWarmup.isSorted([1]) ).toBe(true);
  });
  it("sortWarmup.isSorted([-1]) -> true", function() {
    expect(sortWarmup.isSorted([-1]) ).toBe(true);
  });
  it("sortWarmup.isSorted([0, 1]) -> true", function() {
    expect(sortWarmup.isSorted([0, 1]) ).toBe(true);
  });
  it("sortWarmup.isSorted([11, 1]) -> false", function() {
    expect(sortWarmup.isSorted([11, 1]) ).toBe(false);
  });
  it("sortWarmup.isSorted([0, 999]) -> true", function() {
    expect(sortWarmup.isSorted([0, 999]) ).toBe(true);
  });
  it("sortWarmup.isSorted([-12, 2, 3, 6, 10]) -> true", function() {
    expect(sortWarmup.isSorted([-12, 2, 3, 6, 10]) ).toBe(true);
  });
  it("sortWarmup.isSorted([-12, 3, 6, 10, 2]) -> false", function() {
    expect(sortWarmup.isSorted([-12, 3, 6, 10, 2]) ).toBe(false);
  });
});

describe("sortWarmup.indexOf()", function() {
  it("sortWarmup.indexOf([], 1) -> -1", function() {
    expect(sortWarmup.indexOf([], 1) ).toBe(-1);
  });
  it("sortWarmup.indexOf([1], 1) -> 0", function() {
    expect(sortWarmup.indexOf([1], 1) ).toBe(0);
  });
  it("sortWarmup.indexOf([1], 2) -> -1", function() {
    expect(sortWarmup.indexOf([1], 2) ).toBe(-1);
  });
  it("sortWarmup.indexOf([0, 1, 2, 3, 4, 6, 7], 4) -> 4", function() {
    expect(sortWarmup.indexOf([0, 1, 2, 3, 4, 6, 7], 4) ).toBe(4);
  });
  it("sortWarmup.indexOf([0, 1, 2, 3, 4, 6, 7], 5) -> -1", function() {
    expect(sortWarmup.indexOf([0, 1, 2, 3, 4, 6, 7], 5) ).toBe(-1);
  });
});

describe("sortWarmup.mergeArrays()", function() {
  it("sortWarmup.mergeArrays([], []) -> []", function() {
    expect(sortWarmup.mergeArrays([], []) ).toEqual([]);
  });
  it("sortWarmup.mergeArrays([1, 2], []) -> [1, 2]", function() {
    expect(sortWarmup.mergeArrays([1, 2], []) ).toEqual([1, 2]);
  });
  it("sortWarmup.mergeArrays([], [1, 2]) -> [1, 2]", function() {
    expect(sortWarmup.mergeArrays([], [1, 2]) ).toEqual([1, 2]);
  });
  it("sortWarmup.mergeArrays([1, 3], [2]) -> [1, 2, 3]", function() {
    expect(sortWarmup.mergeArrays([1, 3], [2]) ).toEqual([1, 2, 3]);
  });
  it("sortWarmup.mergeArrays([1, 10], [2, 3, 11]) -> [1, 2, 3, 10, 11]", function() {
    expect(sortWarmup.mergeArrays([1, 10], [2, 3, 11]) ).toEqual([1, 2, 3, 10, 11]);
  });
  it("sortWarmup.mergeArrays([1, 2, 9, 10, 12], [2, 3, 11]) -> [1, 2, 2, 3, 9, 10, 11, 12]", function() {
    expect(sortWarmup.mergeArrays([1, 2, 9, 10, 12], [2, 3, 11]) ).toEqual([1, 2, 2, 3, 9, 10, 11, 12]);
  });
});
