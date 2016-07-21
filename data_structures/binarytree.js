"use strict";

// BINARY TREES

// A binary tree is simply a tree in which each node has zero, one, or two
// children. There are many variants of binary trees, such as the binary search
// tree (BST), perfect binary tree, etc. For the purposes of this exercise,
// note that we are working only with a vanilla binary tree.

// This is a barebones, recursive implementation of a binary tree. Implement
// the two empty methods.
function Tree(value, left, right) {
  if (_.isUndefined(value) || _.isNull(value)) {
    value = null;
  }

  this.value = value;
  this.left = left;
  this.right = right;
}

Tree.prototype.equals = function(tree) {
  return tree &&
    this.value === tree.value &&
    ((!this.left && !tree.left) || this.left.equals(tree.left)) &&
    ((!this.right && !tree.right) || this.right.equals(tree.right));
};

// Implement a function to check if a binary tree is balanced. For the purposes
// of this exercise, a balanced tree is defined to be a tree such that the
// heights of the two subtrees of any node never differ by more than one.
// (Cracking the Coding Interview #4.4)
Tree.prototype.isBalanced = function() {
  // YOUR CODE HERE
};

// Implement a function to find the first common ancestor of two nodes in a
// binary tree. Avoid storing additional nodes in a data structure.
// NOTE: This is not necessarily a binary search tree. (Cracking the
// Coding Interview #4.8)
var firstCommonAncestor = function(root, tree1, tree2) {
  // YOUR CODE HERE
};

window.Tree = Tree;
window.firstCommonAncestor = firstCommonAncestor;
