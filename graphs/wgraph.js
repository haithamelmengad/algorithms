"use strict";

// WEIGHTED GRAPH

// A weighted graph contains a weight for every edge. This "weight" is an
// abstract value and could represent various "real world" data such as distance
// (between two points or cities), time (to complete a task), money, etc.

// Rewrite the Graph class to be a weighted graph. You'll probably want to copy
// and paste a lot of your code from graph.js. There is only one brand new
// method below, getWeight(), but you will have to modify several other methods.

// Constructor
var WGraph = function() {
  // YOUR CODE HERE
};

// Add a vertex called name to the graph.
WGraph.prototype.addVertex = function(name) {
  // YOUR CODE HERE
};

// Add an edge linking vertices v1 and v2.
WGraph.prototype.addEdge = function(v1, v2, weight) {
  // YOUR CODE HERE
};

// Return the list of vertices.
WGraph.prototype.vertices = function() {
  // YOUR CODE HERE
};

// Remove the vertex called name from the graph.
WGraph.prototype.removeVertex = function(name) {
  // YOUR CODE HERE
};

// Remove the edge linking vertices v1 and v2.
WGraph.prototype.removeEdge = function(v1, v2) {
  // YOUR CODE HERE
};

// Return true if vertices v1 and v2 are adjacent, false otherwise.
WGraph.prototype.isAdjacent = function(v1, v2) {
  // YOUR CODE HERE
};

// Return the list of neighbors of the vertex v.
WGraph.prototype.neighbors = function(v) {
  // YOUR CODE HERE
};

// New function: return the weight of the edge between v1 and v2. Note: this
// method should only return a weight if there is a _direct_ edge between v1
// and v2.
WGraph.prototype.getWeight = function(v1, v2) {
  // YOUR CODE HERE
};

window.WGraph = WGraph;
