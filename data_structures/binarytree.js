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
//
// Here are some examples of balanced and unbalanced trees.
//
// Balanced:
//
//     A
//   /   \
//  B     C
//
//     A
//   /
//  B
//
// Unbalanced:
//
//      A
//     /
//    B
//   /
//  C
Tree.prototype.depth = function() {
  var leftDepth = _.isUndefined(this.left) ? 0 : this.left.depth();
  var rightDepth = _.isUndefined(this.right) ? 0 : this.right.depth();
  return Math.max(leftDepth, rightDepth)+1;
};

Tree.prototype.isBalanced = function() {
  var leftDepth = _.isUndefined(this.left) ? 0 : this.left.depth();
  var rightDepth = _.isUndefined(this.right) ? 0 : this.right.depth();
  return Math.abs(leftDepth - rightDepth) <= 1;
};

// Implement a function to find the first common ancestor of two nodes in a
// binary tree. Avoid storing additional nodes in a data structure.
// NOTE: This is not necessarily a binary search tree. (Cracking the
// Coding Interview #4.8)

//
// Example:
//
//         A
//        / \
//       B   C
//      / \   \
//     D   E   F
//
// firstCommonAncestor(B, F) -> A
// firstCommonAncestor(D, E) -> B
// firstCommonAncestor(C, F) -> A
Tree.prototype.contains = function(tree) {
  return (
    (this === tree) ||
    (!_.isUndefined(this.left) && this.left.contains(tree)) ||
    (!_.isUndefined(this.right) && this.right.contains(tree)));
};
var firstCommonAncestor = function(root, tree1, tree2) {
  if (!root)
    return false;

  var
    leftContains1 = !_.isUndefined(root.left) && root.left.contains(tree1),
    leftContains2 = !_.isUndefined(root.left) && root.left.contains(tree2),
    rightContains1 = !_.isUndefined(root.right) && root.right.contains(tree1),
    rightContains2 = !_.isUndefined(root.right) && root.right.contains(tree2);
  if ((leftContains1 && rightContains2) || (leftContains2 && rightContains1))
    return root;
  else
    return firstCommonAncestor(root.left, tree1, tree2) || firstCommonAncestor(root.right, tree1, tree2);
};

window.Tree = Tree;
window.firstCommonAncestor = firstCommonAncestor;
