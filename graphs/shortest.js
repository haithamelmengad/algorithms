"use strict";

// SHORTEST PATH

// Note: This code depends on your code in graph.js and wgraph.js.

// Let's try writing an algorithm to find the shortest (i.e., lowest-
// weight) path between two vertices in a weighted, undirected graph.
// Pay particular attention to the fact that the _shortest_ path may
// not, in fact, be the path with the smallest number of hops (i.e.,
// the path that passes through the fewest intermediate vertices).
// Calculate path length as the sum of the weights of all of the
// intermediate edges.

// Example:
//
//            A
//         2 / \ 4
//          B   C
//       2 / \ 1 \ 4
//        D   E - F
//              1
//
// The path from A -> F with the fewest hops is A -> C -> F, but this
// path has total weight 8. The path A -> B -> E -> F has one more hop
// but total weight 4, so this is the shortest path.

// Write a function that takes an input graph and two vertices, and returns
// the shortest path from v1 to v2 as a list of vertices and the total weight of
// that path as an object with two properties, "path" and "total". E.g., for the
// above graph it should return:
// {
//    path: ["A","B","E","F"],
//    total: 4
// }
window.shortestPath = function(graph, v1, v2) {
  // YOUR CODE HERE
};
