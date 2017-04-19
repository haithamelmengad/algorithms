"use strict";
var {kthLargest, kthLargestPartition} = require('./kthLargest');

describe("kthLargest()", function() {
  it("kthLargest([5, -6, 2, 14], 0) -> 14", function() {
    expect(kthLargest([5, -6, 2, 14], 0) ).toBe(14);
  });
  it("kthLargest([5, -6, 2, 14], 1) -> 5", function() {
    expect(kthLargest([5, -6, 2, 14], 1) ).toBe(5);
  });
  it("kthLargest([5, -6, 2, 14], 2) -> 2", function() {
    expect(kthLargest([5, -6, 2, 14], 2) ).toBe(2);
  });
});

describe("kthLargestPartition()", function() {
  it("kthLargestPartition([5, -6, 2, 14], 0) -> 14", function() {
    expect(kthLargestPartition([5, -6, 2, 14], 0) ).toBe(14);
  });
  it("kthLargestPartition([5, -6, 2, 14], 1) -> 5", function() {
    expect(kthLargestPartition([5, -6, 2, 14], 1) ).toBe(5);
  });
  it("kthLargestPartition([5, -6, 2, 14], 2) -> 2", function() {
    expect(kthLargestPartition([5, -6, 2, 14], 2) ).toBe(2);
  });
});
