"use strict";

describe("sortedArray.isSorted()", function() {
  it("sortedArray.isSorted([]) -> true", function() {
    expect(sortedArray.isSorted([]) ).toBe(true);
  });
  it("sortedArray.isSorted([1]) -> true", function() {
    expect(sortedArray.isSorted([1]) ).toBe(true);
  });
  it("sortedArray.isSorted([-1]) -> true", function() {
    expect(sortedArray.isSorted([-1]) ).toBe(true);
  });
  it("sortedArray.isSorted([0, 1]) -> true", function() {
    expect(sortedArray.isSorted([0, 1]) ).toBe(true);
  });
  it("sortedArray.isSorted([11, 1]) -> false", function() {
    expect(sortedArray.isSorted([11, 1]) ).toBe(false);
  });
  it("sortedArray.isSorted([0, 999]) -> true", function() {
    expect(sortedArray.isSorted([0, 999]) ).toBe(true);
  });
  it("sortedArray.isSorted([-12, 2, 3, 6, 10]) -> true", function() {
    expect(sortedArray.isSorted([-12, 2, 3, 6, 10]) ).toBe(true);
  });
  it("sortedArray.isSorted([-12, 3, 6, 10, 2]) -> false", function() {
    expect(sortedArray.isSorted([-12, 3, 6, 10, 2]) ).toBe(false);
  });
});

describe("sortedArray.indexOf()", function() {
  it("sortedArray.indexOf([], 1) -> -1", function() {
    expect(sortedArray.indexOf([], 1) ).toBe(-1);
  });
  it("sortedArray.indexOf([1], 1) -> 0", function() {
    expect(sortedArray.indexOf([1], 1) ).toBe(0);
  });
  it("sortedArray.indexOf([1], 2) -> -1", function() {
    expect(sortedArray.indexOf([1], 2) ).toBe(-1);
  });
  it("sortedArray.indexOf([0, 1, 2, 3, 4, 6, 7], 4) -> 4", function() {
    expect(sortedArray.indexOf([0, 1, 2, 3, 4, 6, 7], 4) ).toBe(4);
  });
  it("sortedArray.indexOf([0, 1, 2, 3, 4, 6, 7], 5) -> -1", function() {
    expect(sortedArray.indexOf([0, 1, 2, 3, 4, 6, 7], 5) ).toBe(-1);
  });
});

describe("sortedArray.mergeArrays()", function() {
  it("sortedArray.mergeArrays([], []) -> []", function() {
    expect(sortedArray.mergeArrays([], []) ).toEqual([]);
  });
  it("sortedArray.mergeArrays([1, 2], []) -> [1, 2]", function() {
    expect(sortedArray.mergeArrays([1, 2], []) ).toEqual([1, 2]);
  });
  it("sortedArray.mergeArrays([], [1, 2]) -> [1, 2]", function() {
    expect(sortedArray.mergeArrays([], [1, 2]) ).toEqual([1, 2]);
  });
  it("sortedArray.mergeArrays([1, 3], [2]) -> [1, 2, 3]", function() {
    expect(sortedArray.mergeArrays([1, 3], [2]) ).toEqual([1, 2, 3]);
  });
  it("sortedArray.mergeArrays([1, 10], [2, 3, 11]) -> [1, 2, 3, 10, 11]", function() {
    expect(sortedArray.mergeArrays([1, 10], [2, 3, 11]) ).toEqual([1, 2, 3, 10, 11]);
  });
  it("sortedArray.mergeArrays([1, 2, 9, 10, 12], [2, 3, 11]) -> [1, 2, 2, 3, 9, 10, 11, 12]", function() {
    expect(sortedArray.mergeArrays([1, 2, 9, 10, 12], [2, 3, 11]) ).toEqual([1, 2, 2, 3, 9, 10, 11, 12]);
  });
});
