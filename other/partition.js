"use strict";
function swap(array, i, j) {
  var tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}

// Quicksort partition algorithm
// Adapted from https://gist.github.com/KenCorbettJr/4691882
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

// Adapted from https://gist.github.com/KenCorbettJr/4691882
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

module.exports = {partition, sort};
