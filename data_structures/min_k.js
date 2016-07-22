"use strict";

// MIN K

// Min k is a deceptively simple-sounding set of problems involving finding
// the minimum (or maximum) k values from an array.

// Write a function that, given an array and a k, returns the min k elements
// in that array in order from lowest to highest.

// Examples:
// min_k([1, 2, 3], 0) -> []
// min_k([1], 1) -> [1]
// min_k([5, 2, 9], 2) -> [2, 5]
var min_k = function(array, k) {
  return array.sort(function (a, b) { return a-b }).slice(0,k);
};

window.min_k = min_k;
