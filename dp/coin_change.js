"use strict";

// Write a function that calculates how many different ways can you make change
// for a given amount cents with a given set of coins.
//
// ex. coinChange(4, [1, 2, 3]) -> 4, change combinations: [1, 1, 1, 1] [1, 1, 2] [1, 3] [2, 2]
// ex. coinChange(10, [2, 5, 3, 6]) -> 5, change combinations: [2, 2, 2, 2, 2] [2, 2, 3, 3] [2, 2, 6] [2, 3, 5] [5, 5]
// ex. coinChange(50, [2, 5, 3, 7]) -> 158
// ex. coinChange(150, [2, 5, 3, 7]) -> 3158
//
// More details:
// https://www.hackerrank.com/challenges/coin-change
//
// Walkthrough:
// https://www.youtube.com/watch?v=_fgjrs570YE
function coinChange(cents, coins) {
  // YOUR CODE HERE
}

describe("coinChange()", function() {
  it("coinChange(4, [1, 2, 3]) -> 4, change combinations: [1, 1, 1, 1] [1, 1, 2] [1, 3] [2, 2]", function() {
    expect(coinChange(4, [1, 2, 3]) ).toEqual(4);
  });
  it("coinChange(10, [2, 5, 3, 6]) -> 5, change combinations: [2, 2, 2, 2, 2] [2, 2, 3, 3] [2, 2, 6] [2, 3, 5] [5, 5]", function() {
    expect(coinChange(10, [2, 5, 3, 6]) ).toEqual(5);
  });
  it("coinChange(50, [2, 5, 3, 7]) -> 158", function() {
    expect(coinChange(50, [2, 5, 3, 7]) ).toEqual(158);
  });
  it("coinChange(150, [2, 5, 3, 7]) -> 3158", function() {
    expect(coinChange(150, [2, 5, 3, 7]) ).toEqual(3158);
  });
});
