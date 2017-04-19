"use strict";
var _ = require('underscore');
// Adapted from https://khan4019.github.io/front-end-Interview-Questions/sort.html#quickSort

function swap(array, i, j) {
  var tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}

// function partition(arr, left, right){
//   var pivot = left;
//   var pivotValue = arr[pivot];
//   var wall = left + 1;
//
//   for (var low = left + 1; low < right; low++) {
//     if (arr[low] < pivotValue) {
//       swap(arr, low, wall);
//       wall++;
//     }
//   }
//   console.log(pivot, wall, arr);
//   swap(arr, pivot, wall);
//
//   return wall;
// }
function partition(arr, left, right){
  var pivot = left;
  var pivotValue = arr[pivot];
  var wall = left + 1;

  for (var low = left + 1; low < right; low++) {
    if (arr[low] < pivotValue) {
      swap(arr, low, wall);
      wall++;
    }
  }
  console.log(pivot, wall, arr);
  swap(arr, pivot, wall);

  return wall;
}

describe("partition()", function() {
  function test(arr) {
    var sorted = _.sortBy(arr);
    var pivot = partition(arr, 0, 0, arr.length - 1);
    expect(arr[pivot]).toBe(sorted[pivot]);
    console.log(arr);
    console.log(sorted);
  }
  it("my arr", function() {
    test([183530,
      57170,
      261227,
      -801878,
      -345601,
      -883866,
      -147274,
      -471573,
      -458375,
      -708101]);
  });
  it("randomized dataset", function() {
    var arr = _.range(10).map(() => _.random(-1e6, 1e6));
    // test(arr);
  });
});

module.exports = partition;
