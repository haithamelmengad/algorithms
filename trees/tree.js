"use strict";

// This object represents a binary tree. In a binary tree, each node has 0, 1,
// or 2 children.
//
// We use this object to represent both the root node and the children.
//
// An empty tree is represented by a root node with no children and this.value === null.
//
// ex.
//  This:
//    new Tree('A', new Tree('B'), new Tree('C'))
//  Represents this:
//     A
//    / \
//   B   C
//
class Tree {
  constructor(value, left, right) {
    if (_.isUndefined(value) || _.isNull(value)) {
      value = null;
    }

    this.value = value;
    this.left = left;
    this.right = right;
  }

  // Get the size of this tree.
  //
  // The size of the tree can be defined recursively:
  // size() = 1 + size(left child) + size(right child)
  //
  // An empty tree represented by a root node with no children
  // and this.value === null;
  getSize() {
    // YOUR CODE HERE
  }

  // Get the height of the tree.
  //
  // A tree with just the root node and no children has height 1.
  height() {
    // YOUR CODE HERE
  }

  // Perform an in order traversal of the tree.
  //
  // Steps for an in-order traversal:
  //  - Visit left child
  //  - This node (Call fn with this.value)
  //  - Visit right child
  inOrder(fn) {
    // YOUR CODE HERE
  }

  // Perform a pre order traversal of the tree.
  //
  // Steps for an in-order traversal:
  //  - This node (Call fn with this.value)
  //  - Visit left child
  //  - Visit right child
  preOrder(fn) {
    // YOUR CODE HERE
  }

  // Perform a post order traversal of the tree.
  //
  // Steps for an in-order traversal:
  //  - Visit left child
  //  - Visit right child
  //  - This node (Call fn with this.value)
  postOrder(fn) {
    // YOUR CODE HERE
  }

  // Return true if both trees have the same shape
  // and same items. False otherwise.
  equals(tree) {
    // YOUR CODE HERE
  }
}
