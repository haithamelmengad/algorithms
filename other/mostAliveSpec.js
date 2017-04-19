"use strict";
var {mostAlive, mostAliveSorted} = require('./mostAlive');

var people = [
  {birth: 1901, death: 1924},
  {birth: 1902, death: 1950},
  {birth: 1920, death: 1960},
  {birth: 1950, death: 1985},
  {birth: 1980, death: 2000},
  {birth: 1921, death: 1922},
  {birth: 1902, death: 1955}
];

describe("mostAlive()", function() {
  it("mostAlive() should return 1921", function() {
    expect(mostAlive(people)).toBe(1921);
  });
});

describe("mostAliveSorted()", function() {
  it("mostAliveSorted() should return 1921", function() {
    expect(mostAliveSorted(people)).toBe(1921);
  });
});
