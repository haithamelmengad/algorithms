"use strict";

// HEAPS

// A heap is a tree-based data structure that satisfies one important
// constraint: if B is a child of A, then the value of A must be ordered
// with respect to B, and the same ordering applies across the entire
// data structure. The two most common types of heap are a "min heap"
// and a "max heap", in which A is always less than, or greater than, B
// (respectively).

// Fill in the following functions, implementing a heap using an array.

// Constructor: instantiate a heap, passing in an optional comparator function.
// If no comparator function is provided, it should default to less than
// (i.e., a min heap).

// A comparator function takes two arguments, a and b, and returns a negative
// number if a < b (i.e., a comes before b), zero if a is equal to b, and a
// positive number if a > b.
class Heap {
  constructor(comparator) {
    // YOUR CODE HERE
  }

  // Add a value v to the heap.
  push(v) {
    // YOUR CODE HERE
  }

  // Remove the first value from the heap (i.e., the top value) and return it.
  pop() {
    // YOUR CODE HERE
  }

  // Return the first value (i.e., the top value) without removing it.
  peek() {
    // YOUR CODE HERE
  }

  // Return the number of elements in the heap.
  size() {
    // YOUR CODE HERE
  }
}
