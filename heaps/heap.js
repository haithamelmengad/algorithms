"use strict";

// HEAPS

// A heap is a tree-based data structure that satisfies one important
// constraint: if B is a child of A, then the value of A must be ordered
// with respect to B, and the same ordering applies across the entire
// data structure. The two most common types of heap are a "min heap"
// and a "max heap", in which A is always less than, or greater than, B
// (respectively).

// Fill in the following functions, implementing a heap as a tree.

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
