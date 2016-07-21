"use strict";

// HEAPS: BONUS!

// You've already implemented a heap using a tree data structure.
// A heap can also be--and often is--implemented using a simple array
// instead. Try re-implementing your heap using just an array.

// Constructor: instantiate a heap, passing in an optional comparator function.
// If no comparator function is provided, it should default to less than
// (i.e., a min heap).
var heap = function(comparator) {

};

// Add a value v to the heap.
heap.prototype.push = function(v) {

};

// Remove the first value from the heap (i.e., the top value) and return it.
heap.prototype.pop = function() {
  return true;
};

// Return the first value (i.e., the top value) without removing it.
heap.prototype.peek = function() {

};

// Return the number of elements in the heap.
heap.prototype.size = function() {

};

window.heap = heap;
