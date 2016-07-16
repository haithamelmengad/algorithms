"use strict";

var sortBonus = {};

// Write a function that takes an array and returns a new array with items
// sorted in increasing order.
//
// Use the Quick Sort algorithm to solve this problem.
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

window.sortBonus = sortBonus;
