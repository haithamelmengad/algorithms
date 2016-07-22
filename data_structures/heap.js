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

// Solution cf. http://eloquentjavascript.net/1st_edition/appendix2.html
var heap = function(scoreFunction) {
  this.scoreFunction = scoreFunction || function(a, b) { return a-b };
  this.content = [];
};

// Add a value v to the heap.
heap.prototype.push = function(element) {
  // Add the new element to the end of the array.
  this.content.push(element);
  // Allow it to bubble up.
  this.bubbleUp(this.content.length - 1);
};

// Remove the first value from the heap (i.e., the top value) and return it.
heap.prototype.pop = function() {
  // Store the first element so we can return it later.
  var result = this.content[0];
  // Get the element at the end of the array.
  var end = this.content.pop();
  // If there are any elements left, put the end element at the
  // start, and let it sink down.
  if (this.content.length > 0) {
    this.content[0] = end;
    this.sinkDown(0);
  }
  return result;
};

heap.prototype.remove = function(node) {
  var length = this.content.length;
  // To remove a value, we must search through the array to find
  // it.
  for (var i = 0; i < length; i++) {
    if (this.content[i] != node) continue;
    // When it is found, the process seen in 'pop' is repeated
    // to fill up the hole.
    var end = this.content.pop();
    // If the element we popped was the one we needed to remove,
    // we're done.
    if (i == length - 1) break;
    // Otherwise, we replace the removed element with the popped
    // one, and allow it to float up or sink down as appropriate.
    this.content[i] = end;
    this.bubbleUp(i);
    this.sinkDown(i);
    break;
  }
};

heap.prototype.bubbleUp = function(n) {
  // Fetch the element that has to be moved.
  var element = this.content[n], score = this.scoreFunction(element);
  // When at 0, an element can not go up any further.
  while (n > 0) {
    // Compute the parent element's index, and fetch it.
    var parentN = Math.floor((n + 1) / 2) - 1,
      parent = this.content[parentN];
    // If the parent has a lesser score, things are in order and we
    // are done.
    if (score >= this.scoreFunction(parent))
      break;

    // Otherwise, swap the parent with the current element and
    // continue.
    this.content[parentN] = element;
    this.content[n] = parent;
    n = parentN;
  }
};

heap.prototype.sinkDown = function(n) {
  // Look up the target element and its score.
  var length = this.content.length,
    element = this.content[n],
    elemScore = this.scoreFunction(element);

  while(true) {
    // Compute the indices of the child elements.
    var child2N = (n + 1) * 2, child1N = child2N - 1;
    // This is used to store the new position of the element,
    // if any.
    var swap = null;
    // If the first child exists (is inside the array)...
    if (child1N < length) {
      // Look it up and compute its score.
      var child1 = this.content[child1N],
        child1Score = this.scoreFunction(child1);
      // If the score is less than our element's, we need to swap.
      if (child1Score < elemScore)
        swap = child1N;
    }
    // Do the same checks for the other child.
    if (child2N < length) {
      var child2 = this.content[child2N],
        child2Score = this.scoreFunction(child2);
      if (child2Score < (swap == null ? elemScore : child1Score))
        swap = child2N;
    }

    // No need to swap further, we are done.
    if (swap == null) break;

    // Otherwise, swap and continue.
    this.content[n] = this.content[swap];
    this.content[swap] = element;
    n = swap;
  }
};

// Return the first value (i.e., the top value) without removing it.
heap.prototype.peek = function() {
  return this.content[0];
};

// Return the number of elements in the heap.
heap.prototype.size = function() {
  return this.content.length;
};

window.heap = heap;
