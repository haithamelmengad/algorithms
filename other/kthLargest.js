"use strict";

var Heap = require('heap');

// Write a function that takes an array of numbers and returns the k-th largest
// number.
// ex. kthLargest([5, -6, 2, 14], 0) -> 14
// ex. kthLargest([5, -6, 2, 14], 1) -> 5
// ex. kthLargest([5, -6, 2, 14], 2) -> 2
function kthLargest(numbers, k) {
  var heap = new Heap((a, b) => (a - b));
  numbers.forEach((number) => {
    if (heap.size() < (k + 1)) {
      heap.push(number);
    } else if (heap.peek() < number) {
      heap.pop();
      heap.push(number);
    }
  });
  return heap.peek();
}

var {partition} = require('./partition');
// This is the O(n) solution
function kthLargestPartition(numbers, k) {
  k = numbers.length - k - 1;
  function helper(left, right) {
    if (left >= right) {
      return numbers[left];
    }
    var pivot = partition(numbers, left, right);
    if (pivot === k) {
      return numbers[k];
    } else if (pivot > k) {
      return helper(left, pivot - 1);
    } else {
      return helper(pivot + 1, right);
    }
  }

  return helper(0, numbers.length - 1);
}

module.exports = {kthLargest, kthLargestPartition};
