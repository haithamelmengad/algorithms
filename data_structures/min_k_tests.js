"use strict";

describe("min_k", function() {
  it("min_k([], 0) -> []", function() {
    expect(min_k([], 0)).toEqual([]);
  });
  it("min_k([], 1) -> []", function() {
    expect(min_k([], 1)).toEqual([]);
  });
  it("min_k([1, 2, 3], 0) -> []", function() {
    expect(min_k([1, 2, 3], 0)).toEqual([]);
  });
  it("min_k([1, 2, 3], 1) -> 1", function() {
    expect(min_k([1, 2, 3], 1)).toEqual([1]);
  });
  it("min_k([3, 2, 1], 1) -> 1", function() {
    expect(min_k([3, 2, 1], 1)).toEqual([1]);
  });
  it("min_k([1, 2, 3], 2) -> [1, 2]", function() {
    expect(min_k([1, 2, 3], 2)).toEqual([1, 2]);
  });
  it("min_k([3, 2, 1], 2) -> [1, 2]", function() {
    expect(min_k([3, 2, 1], 2)).toEqual([1, 2]);
  });
  it("min_k([1, 1, 2, 3], 2) -> [1, 1]", function() {
    expect(min_k([1, 1, 2, 3], 2)).toEqual([1, 1]);
  });
  it("min_k([99, 43, 96, 21, -20, -45, 0, 1, 12], 4) -> [-45, -20, 0, 1]", function() {
    expect(min_k([99, 43, 96, 21, -20, -45, 0, 1, 12], 4)).toEqual([-45, -20, 0, 1]);
  });
});
