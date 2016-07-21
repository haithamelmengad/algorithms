"use strict";

describe("mergeArrays()", function() {
  it("mergeArrays([],[]) -> []", function() {
    expect(mergeArrays([],[]) ).toEqual([]);
  });
  it("mergeArrays([],[],[]) -> []", function() {
    expect(mergeArrays([],[],[]) ).toEqual([]);
  });
  it("mergeArrays([2],[3],[1]) -> [1, 2, 3]", function() {
    expect(mergeArrays([2],[3],[1]) ).toEqual([1, 2, 3]);
  });
  it("mergeArrays([2],[3],[1], [], [0], [], [-1]) -> [-1, 0, 1, 2, 3]", function() {
    expect(mergeArrays([2],[3],[1], [], [0], [], [-1]) ).toEqual([-1, 0, 1, 2, 3]);
  });
  it("mergeArrays([1, 5],[-3, 8],[0]) -> [-3, 0, 1, 5, 8]", function() {
    expect(mergeArrays([1, 5],[-3, 8],[0]) ).toEqual([-3, 0, 1, 5, 8]);
  });

  function randoms(n) {
    return _.range(n).map(_.partial(_.random, -100, 100));
  }

  var numbers = randoms(100);
  numbers.sort();
  var arrs = _.range(4).map(() => []);
  numbers.forEach((n, i) => {
    arrs[i % 4].push(n);
  });
  it("Merge 4 arrays with 100 numbers total", function() {
    expect(mergeArrays.apply(null, arrs)).toEqual(numbers);
  });
});
