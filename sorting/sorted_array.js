"use strict";

var sortedArray = {};

// Write a function that takes an array, and returns true if and only if
// the array is already sorted in increasing order.
//
// ex. sortedArray.isSorted([]) -> true
// ex. sortedArray.isSorted([1]) -> true
// ex. sortedArray.isSorted([-1]) -> true
// ex. sortedArray.isSorted([0, 1]) -> true
// ex. sortedArray.isSorted([11, 1]) -> false
// ex. sortedArray.isSorted([0, 999]) -> true
// ex. sortedArray.isSorted([-12, 2, 3, 6, 10]) -> true
// ex. sortedArray.isSorted([-12, 3, 6, 10, 2]) -> false
sortedArray.isSorted = function(array) {
  // YOUR CODE HERE
}

// Write a function that merges two sorted arrays and
// returns a new sorted array.
//
// ex. sortedArray.mergeArrays([], []) -> []
// ex. sortedArray.mergeArrays([1, 2], []) -> [1, 2]
// ex. sortedArray.mergeArrays([], [1, 2]) -> [1, 2]
// ex. sortedArray.mergeArrays([1, 3], [2]) -> [1, 2, 3]
// ex. sortedArray.mergeArrays([1, 10], [2, 3, 11]) -> [1, 2, 3, 10, 11]
// ex. sortedArray.mergeArrays([1, 2, 9, 10, 12], [2, 3, 11]) -> [1, 2, 2, 3, 9, 10, 11, 12]
sortedArray.mergeArrays = function(array1, array2) {
  // YOUR CODE HERE
}


// Write a function that finds the index of an item in a given sorted array.
// Return -1 if item is not found.
//
// This function should use a binary search to find the item.
//
// ex. sortedArray.indexOf([], 1) -> -1
// ex. sortedArray.indexOf([1], 1) -> 0
// ex. sortedArray.indexOf([1], 2) -> -1
// ex. sortedArray.indexOf([0, 1, 2, 3, 4, 6, 7], 4) -> 4
// ex. sortedArray.indexOf([0, 1, 2, 3, 4, 6, 7], 5) -> -1
sortedArray.indexOf = function(sortedArray, item) {
  // YOUR CODE HERE
}

// Write a function that takes a sorted array and returns a new
// array with all the duplicate items removed.
//
// In a sorted array duplicate items will be adjacent, you can
// use this to your advantage to make a single run through the data
// detecting sequences of identical items.
//
// ex. sortedArray.removeDuplicates([]) -> []
// ex. sortedArray.removeDuplicates([1]) -> [1]
// ex. sortedArray.removeDuplicates([1, 1, 1, 1]) -> [1]
// ex. sortedArray.removeDuplicates([0, 1, 1, 1, 1, 4, 5]) -> [0, 1, 4, 5]
// ex. sortedArray.removeDuplicates([-1, 0, 1, 1, 3, 5, 5, 5, 12, 13, 13]) -> [-1, 0, 1, 3, 5, 12, 13]
sortedArray.removeDuplicates = function(sortedArray) {
  // YOUR CODE HERE
}

// Write a function that takes an array and returns a new array with items
// sorted in increasing order.
//
// Use the Bubble Sort algorithm to solve this problem.
//
// ex. sortedArray.bubbleSort([]) -> []
// ex. sortedArray.bubbleSort([1,2,3]) -> [1,2,3]
// ex. sortedArray.bubbleSort([2,2,2]) -> [2,2,2]
// ex. sortedArray.bubbleSort([3,2,1,2,4]) -> [1,2,2,3,4]
// ex. sortedArray.bubbleSort([3, 2, 1]) -> [1, 2, 3]
// ex. sortedArray.bubbleSort([3, 2, 2, 1]) -> [1, 2, 2, 3]
sortedArray.bubbleSort = function(array) {
  // YOUR CODE HERE
}

// Write a function that takes an array and returns a new array with items
// sorted in increasing order.
//
// Use the merge Sort algorithm to solve this problem.
//
// ex. sortedArray.mergeSort([]) -> []
// ex. sortedArray.mergeSort([1,2,3]) -> [1,2,3]
// ex. sortedArray.mergeSort([2,2,2]) -> [2,2,2]
// ex. sortedArray.mergeSort([3,2,1,2,4]) -> [1,2,2,3,4]
// ex. sortedArray.mergeSort([3, 2, 1]) -> [1, 2, 3]
// ex. sortedArray.mergeSort([3, 2, 2, 1]) -> [1, 2, 2, 3]
sortedArray.mergeSort = function(array) {
  // YOUR CODE HERE
}

// Write a function that takes an array and returns a new array with items
// sorted in increasing order.
//
// Use the Quick Sort algorithm to solve this problem.
//
// ex. sortedArray.quickSort([]) -> []
// ex. sortedArray.quickSort([1,2,3]) -> [1,2,3]
// ex. sortedArray.quickSort([2,2,2]) -> [2,2,2]
// ex. sortedArray.quickSort([3,2,1,2,4]) -> [1,2,2,3,4]
// ex. sortedArray.quickSort([3, 2, 1]) -> [1, 2, 3]
// ex. sortedArray.quickSort([3, 2, 2, 1]) -> [1, 2, 2, 3]
sortedArray.quickSort = function(array) {
  // YOUR CODE HERE
}

window.sortedArray = sortedArray;
