"use strict";

// GRAPH SEARCH

// Let's extend the Graph class we created in the first exercise with a few
// search-related methods. Note that this code DOES depend upon your code in
// graph.js from the first exercise.

// BFS and DFS require that the neighbors of each node be sorted. For the
// purposes of this exercise, sort the neighbors in alphabetical order, e.g.,
// node "B" comes after (to the right of) "A" and before (to the left of) "C".

// Write a function that returns true if the graph is connected, false
// otherwise. Recall that a graph is connected if every vertex is reachable from
// every other vertex, i.e., there is no vertex (or set of vertices) that is
// totally disconnected from the other vertices.
Graph.prototype.isConnected = function() {
  // YOUR CODE HERE
};

// Write a function that, given a start vertex, returns the list of vertices
// visited in order with a depth first search.
//
// For instance, starting at A, we'd visit A -> B -> D -> C.
//
//     A
//    / \
//   B   C
//  /
// D
Graph.prototype.dfs = function(start) {
  // YOUR CODE HERE
};

// Write a function that, given a start vertex, returns the list of vertices
// visited in order with a breadth first search.
//
// For instance, for the above graph, we'd visit A -> B -> C -> D.
Graph.prototype.bfs = function(start) {
  // YOUR CODE HERE
};
