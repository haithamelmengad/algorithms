"use strict";

// THE GRAPH

// A graph is one of the most fundamental, important, and broadly useful data
// structures in computer science. Let's begin by implementing a graph.

// As you saw in class, you can implement a graph in multiple ways including
// by using an adjacency list or an adjacency matrix. Pick one, and fill in the
// empty methods below to fully implement a graph. For now we'll build an
// unweighted, undirected graph.

// Suggested reading: https://www.khanacademy.org/computing/computer-science/algorithms/graph-representation/a/representing-graphs

// Constructor
var Graph = function() {
  // YOUR CODE HERE
};

// Add a vertex called name to the graph.
Graph.prototype.addVertex = function(name) {
  // YOUR CODE HERE
};

// Add an edge linking vertices v1 and v2.
Graph.prototype.addEdge = function(v1, v2) {
  // YOUR CODE HERE
};

// Return the list of vertices.
Graph.prototype.vertices = function() {
  // YOUR CODE HERE
};

// Remove the vertex called name from the graph.
Graph.prototype.removeVertex = function(name) {
  // YOUR CODE HERE
};

// Remove the edge linking vertices v1 and v2.
Graph.prototype.removeEdge = function(v1, v2) {
  // YOUR CODE HERE
};

// Return true if vertices v1 and v2 are adjacent, false otherwise.
Graph.prototype.isAdjacent = function(v1, v2) {
  // YOUR CODE HERE
};

// Return the list of neighbors of the vertex v.
Graph.prototype.neighbors = function(v) {
  // YOUR CODE HERE
};

window.Graph = Graph;
