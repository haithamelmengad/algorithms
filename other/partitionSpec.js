"use strict";
var _ = require('underscore');
var {partition, sort} = require('./partition');

describe("partition()", function() {
  function test(arr) {
    var orig = arr.slice();
    var sorted = _.sortBy(arr);
    var pivot = partition(arr, 0, arr.length - 1);
    if (arr[pivot] !== sorted[pivot]) {
      console.log(pivot, arr[pivot], orig[0]);
      console.log(arr);
      console.log(sorted);
      throw new Error('Failed');
    }
  }
  it("randomized dataset", function() {
    _.range(1000).forEach(() => {
      var arr = _.range(1000).map(() => _.random(-1e6, 1e6));
      test(arr);
    });
  });
});

describe("sort()", function() {
  function test(arr) {
    var sorted = _.sortBy(arr);
    sort(arr);
    expect(arr).toEqual(sorted);
  }

  it("randomized dataset", function() {
    var arr = _.range(10000).map(() => _.random(-1e6, 1e6));
    test(arr);
  });
});
