"use strict";

class SearchTree extends Tree {
  constructor(value, left, right) {
    // Call the parent constructor here
    // YOUR CODE HERE
  }

  min() {
    // YOUR CODE HERE
  }

  max() {
    // YOUR CODE HERE
  }

  // Add given item to this tree.
  // Return true if n was already stored in this tree before insertion, false
  // otherwise.
  //
  // ex.
  //  var t = new SearchTree();
  //  t.add(1) -> false
  //  t.add(1) -> true
  add(n) {
    // YOUR CODE HERE
  }

  // Search for given item item in this tree.  Return true if item is found,
  // false otherwise.
  search(n) {
    // YOUR CODE HERE
  }

  // Remove given item from this tree.
  // Return true if item was found and removed and false if item was not found.
  // When the node to be removed is found, replace the value at this node with the next largest (v), and
  // recursively remove v from the right subtree.
  // Hint: this.right.min()
  remove(n, parent) {
    // YOUR CODE HERE
  }
}
