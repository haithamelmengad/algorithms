"use strict";

var Heap = require('heap');

// Write a function that takes an array of numbers and returns the k-th largest
// number.
// ex. kthLargest([5, -6, 2, 14], 0) -> 14
// ex. kthLargest([5, -6, 2, 14], 1) -> 5
// ex. kthLargest([5, -6, 2, 14], 2) -> 2
function kthLargest(numbers, k) {
  var heap = new Heap((a, b) => (a - b));
  numbers.forEach((number) => {
    if (heap.size() < (k + 1)) {
      heap.push(number);
    } else if (heap.peek() < number) {
      heap.pop();
      heap.push(number);
    }
  });
  return heap.peek();
}

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
