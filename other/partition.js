"use strict";
var _ = require('underscore');
// Adapted from https://khan4019.github.io/front-end-Interview-Questions/sort.html#quickSort

function swap(array, i, j) {
  // console.log(array.join(' , '));
  // console.log(array[i], array[j]);
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
function partition(arr, left, right) {
  var pivot = left;
  var pivotValue = arr[pivot];
  var low = left + 1;
  var high = right;

  while (low <= high){
    while (low < right && arr[low] < pivotValue) {
      low++;
    }
    while (low <= high && arr[high] >= pivot) {
      high--;
    }
    if (low < high) {
      swap(arr, low, high);
    }
  }

  swap(arr, pivot, high);
  return high;
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
  it("my arr", function() {
    var arr = [3, 1, 2];
    test(arr);
    // test([183530,
    //   57170,
    //   261227,
    //   -801878,
    //   -345601,
    //   -883866,
    //   -147274,
    //   -471573,
    //   -458375,
    //   -708101]);
  });
  it("randomized dataset", function() {
    // return
    _.range(10000).forEach(() => {
      var arr = _.range(10).map(() => _.random(-1e6, 1e6));
      test(arr);
    });
  });
});

module.exports = partition;
