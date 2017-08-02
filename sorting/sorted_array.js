"use strict";

// Write a function that takes a sorted array of numbers and a number
// to locate and returns the index where that number can be found
// (or -1 if the number is not present).
//
// Use Binary Search to solve this problem.
//
// Expected runtime: O(log(n))
//
// ex. sortedArray.binarySearch([], 3) -> -1
// ex. sortedArray.binarySearch([1,2,3], 1) -> 0
// ex. sortedArray.binarySearch([1,4,5,8], 5) -> 2
// ex. sortedArray.binarySearch([2,5,6,8,10,11], 11) -> 5
// ex. sortedArray.binarySearch([2,5,6,8,10,11], 1) -> -1
sortedArray.binarySearch = function(array, val) {
  // YOUR CODE HERE
}

// Write a function that takes an array of numbers and returns
// a new array with the same items sorted in increasing order.
//
// Use either Bubble Sort or Selection Sort to solve this problem.
//
// Expected runtime: O(n^2)
//
// ex. sortedArray.naiveSort([]) -> []
// ex. sortedArray.naiveSort([1,2,3]) -> [1,2,3]
// ex. sortedArray.naiveSort([2,2,2]) -> [2,2,2]
// ex. sortedArray.naiveSort([3,2,1,2,4]) -> [1,2,2,3,4]
// ex. sortedArray.naiveSort([3, 2, 1]) -> [1, 2, 3]
// ex. sortedArray.naiveSort([3, 2, 2, 1]) -> [1, 2, 2, 3]
sortedArray.naiveSort = function(array) {
  // YOUR CODE HERE
}

// Write a function that takes an array of numbers and returns
// a new array with the same items sorted in increasing order.
//
// Use Merge Sort to solve this problem.
//
// Expected runtime: O(n*log(n))
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

/*=======*/
/* BONUS */
/*=======*/
// Write a function that takes an array of numbers and MODIFIES the array
// to be in sorted order.
//
// Use the Quick Sort algorithm to solve this problem.
//
// A correct implementation should be O(n*log(n)) and should be
// in-place (i.e. O(1) space complexity)
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
