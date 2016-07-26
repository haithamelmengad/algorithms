"use strict";

// WEIGHTED GRAPH

// Note: This code depends on your code in graph.js from the first exercise.

// A weighted graph contains a weight for every edge. This "weight" is an
// abstract value and could represent various "real world" data such as distance
// (between two points or cities), time (to complete a task), money, etc.

// Extend your (unweighted) Graph class from before by adding weights to each
// edge. Rewrite the methods below (which will overwrite the old ones in the
// Graph class), and fill in the new method, getWeight.

// Constructor
var oldPrototype = Graph.prototype;
Graph = function() {
  // YOUR CODE HERE
  // (If you don't need to modify your constructor, just comment out this
  // method.)
};
Graph.prototype = oldPrototype;

// Add an weighted edge linking vertices v1 and v2.
Graph.prototype.addEdge = function(v1, v2, weight) {
  // YOUR CODE HERE
};

// New function: return the weight of the edge between v1 and v2. Note: this
// method should only return a weight if there is a _direct_ edge between v1
// and v2.
Graph.prototype.getWeight = function(v1, v2) {
  // YOUR CODE HERE
};
