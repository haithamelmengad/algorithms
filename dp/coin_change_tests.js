"use strict";

describe("coinChange()", function() {
  it("coinChange(8, []) -> 0, change combinations: (none)", function() {
    expect(coinChange(8, []) ).toEqual(0);
  });
  it("coinChange(0, []) -> 1, change combinations: []", function() {
    expect(coinChange(0, []) ).toEqual(1);
  });
  it("coinChange(0, [1, 2, 3]) -> 1, change combinations: []", function() {
    expect(coinChange(0, [1, 2, 3]) ).toEqual(1);
  });
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
  it("coinChange(200, [8, 3, 7, 1]) -> 9116", function() { // random order of coins
    expect(coinChange(200, [8, 3, 7, 1]) ).toEqual(9116);
  });
  it("coinChange(100, [1, 2, 3, 4, 5]) -> 46262", function() {
    expect(coinChange(100, [1, 2, 3, 4, 5]) ).toEqual(46262);
  });
  it("coinChange(200, [2, 5, 3, 7, 8, 10, 11]) -> 915649", function() {
    expect(coinChange(200, [2, 5, 3, 7, 8, 10, 11]) ).toEqual(915649);
  });
  it("coinChange(200, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) -> 1212199424", function() {
    expect(coinChange(200, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) ).toEqual(1212199424);
  });
});
