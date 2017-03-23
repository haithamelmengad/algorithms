"use strict";

// GRAPH REPRESENTATIONS

// As you saw in class, a graph can be represented several ways including by
// using an adjacency list or an adjacency matrix. In this exercise, we'll
// explore both types of representations by converting between them.

// Note: the code in this file DOES NOT depend on the code in graph.js!

var GraphRepresentations = {};

// Write a function that takes a graph represented as an adjacency list and
// returns the corresponding adjacency matrix, representing the same graph.
// Assume that the graph is unweighted and undirected.
// The adjacency list is two-dimensional array. Element i of the outer array is
// an array listing all of the vertexes that vertex i is adjacent to. E.g.,
// to indicate that the first vertex (vertex 0) is linked to the second vertex
// (vertex 1), the array would look like this: [[1]].
// Note that, with an undirected graph, we do not need to specify the link in
// the other direction, i.e., we've specified 0->1 and we do not need to specify
// 1->0 as well.

// Example:
//
//     0
//    / \
//   1   2
//    \ /
//     3
//
// List: [[1, 2], [3], [3]]
// Matrix: [[0, 1, 1, 0],
//          [1, 0, 0, 1],
//          [1, 0, 0, 1],
//          [0, 1, 1, 0]]
GraphRepresentations.listToMatrix = function(list) {
  // YOUR CODE HERE
};

// Write a function that performs the inverse operation: it takes a graph
// represented as an adjacency matrix and returns the corresponding adjacency
// list, representing the same graph. You only need to show an adjacency in one
// direction, e.g., the above list contains a link 0->1 but no link 1->0.
GraphRepresentations.matrixToList = function(matrix) {
  // YOUR CODE HERE
};

window.GraphRepresentations = GraphRepresentations;
