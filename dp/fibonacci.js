"use strict";

// Write a function that calculates the nth fibonacci number.
//
// ex. fibonacci(0) -> 0
// ex. fibonacci(1) -> 1
// ex. fibonacci(2) -> 1
// ex. fibonacci(3) -> 2
// ex. fibonacci(10) -> 55
// ex. fibonacci(21) -> 10946
// ex. fibonacci(80) -> 23416728348467685
function fibonacci(n) {
  // YOUR CODE HERE
}

describe("fibonacci()", function() {
  it("fibonacci(0) -> 0", function() {
    expect(fibonacci(0) ).toBe(0);
  });
  it("fibonacci(1) -> 1", function() {
    expect(fibonacci(1) ).toBe(1);
  });
  it("fibonacci(2) -> 1", function() {
    expect(fibonacci(2) ).toBe(1);
  });
  it("fibonacci(3) -> 2", function() {
    expect(fibonacci(3) ).toBe(2);
  });
  it("fibonacci(10) -> 55", function() {
    expect(fibonacci(10) ).toBe(55);
  });
  it("fibonacci(21) -> 10946", function() {
    expect(fibonacci(21) ).toBe(10946);
  });
  it("fibonacci(80) -> 23416728348467685", function() {
    expect(fibonacci(80) ).toBe(23416728348467685);
  });
});
