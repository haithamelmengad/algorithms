"use strict"

var sortWarmup = {};

// Write a function that takes an array, and returns true if and only if
// the array is already sorted in increasing order.
//
// ex. sortWarmup.isSorted([]) -> true
// ex. sortWarmup.isSorted([1]) -> true
// ex. sortWarmup.isSorted([-1]) -> true
// ex. sortWarmup.isSorted([0, 1]) -> true
// ex. sortWarmup.isSorted([11, 1]) -> false
// ex. sortWarmup.isSorted([0, 999]) -> true
// ex. sortWarmup.isSorted([-12, 2, 3, 6, 10]) -> true
// ex. sortWarmup.isSorted([-12, 3, 6, 10, 2]) -> false
sortWarmup.isSorted = function(array) {
  // YOUR CODE HERE
}

// Write a function that merges two sorted arrays and
// returns a new sorted array.
//
// ex. sortWarmup.mergeArrays([], []) -> []
// ex. sortWarmup.mergeArrays([1, 2], []) -> [1, 2]
// ex. sortWarmup.mergeArrays([], [1, 2]) -> [1, 2]
// ex. sortWarmup.mergeArrays([1, 3], [2]) -> [1, 2, 3]
// ex. sortWarmup.mergeArrays([1, 10], [2, 3, 11]) -> [1, 2, 3, 10, 11]
// ex. sortWarmup.mergeArrays([1, 2, 9, 10, 12], [2, 3, 11]) -> [1, 2, 2, 3, 9, 10, 11, 12]
sortWarmup.mergeArrays = function(array1, array2) {
  // YOUR CODE HERE
}


// Write a function that finds the index of an item in a given sorted array.
// Return -1 if item is not found.
//
// This function should use a binary search to find the item.
//
// ex. sortWarmup.indexOf([], 1) -> -1
// ex. sortWarmup.indexOf([1], 1) -> 0
// ex. sortWarmup.indexOf([1], 2) -> -1
// ex. sortWarmup.indexOf([0, 1, 2, 3, 4, 6, 7], 4) -> 4
// ex. sortWarmup.indexOf([0, 1, 2, 3, 4, 6, 7], 5) -> -1
sortWarmup.indexOf = function(sortWarmup, item) {
  // YOUR CODE HERE
}
