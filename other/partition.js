"use strict";
var _ = require('underscore');
// Adapted from https://gist.github.com/KenCorbettJr/4691882
function swap(array, i, j) {
  var tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}

function partition(array, left, right) {
  var storeIndex = left,
    pivot = left,
    pivotValue = array[pivot];

  // put the pivot on the right
  swap(array, pivot, right);

  // go through the rest
  for(var v = left; v < right; v++) {

    // if the value is less than the pivot's
    // value put it to the left of the pivot
    // point and move the pivot point along one
    if(array[v] < pivotValue) {
      swap(array, v, storeIndex);
      storeIndex++;
    }
  }

  // finally put the pivot in the correct place
  swap(array, right, storeIndex);

  return storeIndex;
}

function sort(array, left, right) {
  var newPivot = null;

  if (typeof left !== 'number') {
    left = 0;
  }

  if (typeof right !== 'number') {
    right = array.length - 1;
  }

  // effectively set our base
  // case here. When left == right
  // we'll stop
  if(left < right) {
    // pick a pivot between left and right
    // and update it once we've partitioned
    // the array to values < than or > than
    // the pivot value
    newPivot  = partition(array, left, right);
    // recursively sort to the left and right
    sort(array, left, newPivot - 1);
    sort(array, newPivot + 1, right);
  }
}

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

module.exports = partition;
