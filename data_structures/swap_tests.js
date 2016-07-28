"use strict";

describe("swap()", function() {
  it("swap([10, 20], 0, 1) -> [20, 10]", function() {
    expect(swap([10, 20], 0, 1) ).toEqual([20, 10]);
  });
  it("swap([10, 123, 20], 0, 2) -> [20, 123, 10]", function() {
    expect(swap([10, 123, 20], 0, 2) ).toEqual([20, 123, 10]);
  });
});
