"use strict";

describe("sparseSearch()", function() {
  it("sparseSearch([], 1) -> -1", function() {
    expect(sparseSearch([], 1) ).toBe(-1);
  });
  it("sparseSearch([null, null, null, null], 1) -> -1", function() {
    expect(sparseSearch([null, null, null, null], 1) ).toBe(-1);
  });
  it("sparseSearch([1, null, null, null], 1) -> 0", function() {
    expect(sparseSearch([1, null, null, null], 1) ).toBe(0);
  });
  it("sparseSearch([null, 1, null, null, null], 1) -> 1", function() {
    expect(sparseSearch([null, 1, null, null, null], 1) ).toBe(1);
  });
  it("sparseSearch([null, 1, null], 2) -> -1", function() {
    expect(sparseSearch([null, 1, null], 2) ).toBe(-1);
  });
  it("sparseSearch([0, 1, 2, null, 4, null, 6, 7], 4) -> 4", function() {
    expect(sparseSearch([0, 1, 2, null, 4, null, 6, 7], 4) ).toBe(4);
  });
  it("sparseSearch([0, null, 2, null, 4, null, 6, 7], 4) -> 4", function() {
    expect(sparseSearch([0, null, 2, null, 4, null, 6, 7], 4) ).toBe(4);
  });
  it("sparseSearch([0, null, 1, 2, null, 4, null, 6, 7], 4) -> 5", function() {
    expect(sparseSearch([0, null, 1, 2, null, 4, null, 6, 7], 4) ).toBe(5);
  });
  it("sparseSearch([0, 1, 2, 3, 4, 6, 7], 5) -> -1", function() {
    expect(sparseSearch([0, 1, 2, 3, 4, 6, 7], 5) ).toBe(-1);
  });
  it("sparseSearch([null, 0, 1, null, null, null 2, 3, null, 4, 6, null, 7, null, null], 5) -> -1", function() {
    expect(sparseSearch([null, 0, 1, null, null, null, 2, 3, null, 4, 6, null, 7, null, null], 5) ).toBe(-1);
  });
});
