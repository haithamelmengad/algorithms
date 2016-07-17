"use strict";

var sortBonus = {};

// Write a function that takes an array and returns a new array with items
// sorted in increasing order.
//
// Use the Radix Sort algorithm to solve this problem.
//
// ex. sortBonus.radixSort([]) -> []
// ex. sortBonus.radixSort([1,2,3]) -> [1,2,3]
// ex. sortBonus.radixSort([2,2,2]) -> [2,2,2]
// ex. sortBonus.radixSort([3,2,1,2,4]) -> [1,2,2,3,4]
// ex. sortBonus.radixSort([3, 2, 1]) -> [1, 2, 3]
// ex. sortBonus.radixSort([3, 2, 2, 1]) -> [1, 2, 2, 3]
sortBonus.radixSort = function(array) {
  // YOUR CODE HERE
}

// Write a function that takes an array of strings and sorts the array such that
// strings that are anagrams (i.e. contain the same letters) are grouped together.
//
// Use Array.sort() and pass in a custom comparator.
//
// Adapted from Cracking the Coding Interview
//
// ex. sortBonus.groupAnagrams([]) -> []
// ex. sortBonus.groupAnagrams(['a', 'b', 'a']) -> ['a', 'a', 'b']
// ex. sortBonus.groupAnagrams(['aa', 'b', 'aa', 'c']) -> ['aa', 'aa', 'b', 'c']
// ex. sortBonus.groupAnagrams(['aa', 'ab', 'aa', 'c', 'ba']) -> ["aa", "aa", "ab", "ba", "c"]
// ex. sortBonus.groupAnagrams(['aa', 'abc', 'cab', 'ab', 'aa', 'c', 'bac', 'bac', 'ba']) -> ["aa", "aa", "ab", "ba", "abc", "cab", "bac", "bac", "c"]
sortBonus.groupAnagrams = function(array) {
	// YOUR CODE HERE
};

// Write a function that takes a sorted 2d array (i.e. a matrix) and an item
// and finds the item in the sorted 2d array.
//
// Assume every row and column in the 2d array (i.e. matrix) is sorted in increasing order.
// If item is found return it's coordinates in an array [row, column]
//
// Return -1 if item is not found.
//
// Adapted from Cracking the Coding Interview
//
// ex. sortBonus.searchSortedMatrix([[]], 1) -> -1
// ex. sortBonus.searchSortedMatrix([[1]], 1) -> [0, 0]
// ex. sortBonus
sortBonus.searchSortedMatrix = function(array2d, item) {
	// YOUR CODE HERE
	var x = [0, array2d.length];
	var y = [0, array2d[0].length];

	function center() {
		var xCenter = x[0] + Math.floor((x[1] - x[0]) / 2);
		var yCenter = y[0] + Math.floor((y[1] - y[0]) / 2);
		return [xCenter, yCenter];
	}

	while (true) {
		debugger;
		if (x[0] >= x[1] || y[0] >= y[1]) {
			return -1;
		}
		var cur = center();
		var curItem = array2d[cur[0]][cur[1]];
		if (curItem === item) {
			return cur;
		}
		if (item > curItem) {
			x[0] = cur[0];
			y[0] = cur[1];
		} else {
			x[1] = cur[0];
			y[1] = cur[1];
		}
	}
}

window.sortBonus = sortBonus;
