"use strict";

// This object represents an undirected graph.
//
// We use an adjacency matrix to represent this graph.
//
// - When edge is added between nodes 'a' and 'b', we set this.nodes['a']['b'] and
//   this.nodes['b']['a'] to true.
//   We need to set edges in both directions because this is an undirected graph,
//
// - We can check if two nodes 'x' and 'y' are connected (i.e. neighbors) by checking
//   if this.nodes['x']['y'] is true.
//
// so we need to permit traversal in both directions.
function Graph() {
  // maps nodes to their neighbors
  // each node is represnted by an object containing its neighbors set to true
  // ex. a graph with a - b
  //     becomes {a: {b: true}, b: {a: true}}
  this.nodes = {};
  // This object is populated when calcDistanceFrom() is called with
  // this.distances[node] = distance from startNode
  this.distances = {};
  // Indicates whether calcDistanceFrom() has been called yet
  // calcDistanceFrom() can only be called once for each graph.
  this.distanceCalculated = false;
}

// Write a function that adds an edge between two nodes in the graph.
// If nodes are not already in the graph, add them to the graph first.
// Remember to add edges in in both ways because it is not a directed graph, meaning
// users should be able to go forward and backwards through edges.
// Throw an exception if calcDistanceFrom() has been called.
Graph.prototype.addEdge = function(node1, node2) {
  // YOUR CODE HERE
}

// Write a function that returns true if two nodes in the graph are
// directly connected, returns false otherwise.
Graph.prototype.isConnected = function(node1, node2) {
  // YOUR CODE HERE
}

// Write a function that takes a node and returns all the neighbors of that
// node in an array.
// If this node is not in the graph, throw an exception.
Graph.prototype.getNeighbors = function(node) {
  // YOUR CODE HERE
}

// Write a function that calculates the distance of every node in this graph to
// startNode.
// If startNode is not in the graph, throw an error.
// If calcDistanceFrom() has already been called, throw an error.
// Update this.distances as you process data. Each node should be a key and
// each value should represent the distance of the given key from startNode.
//
// Calculate distances using a breadth-first-search of the graph.
// You can implement a breadth-first-search using a Queue (see queue.js):
//  - Create an empty queue
//  - Push an object with start {node: startNode, distance: 0} to the queue
//  - while queue is not empty
//    - an item from queue
//    - if item.node is in this.distances skip item
//    - else
//      - set the value of item.node in this.distances to node.distance
//      - for every neighbor of item.node, push({node: neighbor, distance: item.distance + 1})
//
// When you exit the for loop, you will have set the distance of every node in the graph
// in this.distances.
// Remember to set this.distanceCalculated to true at the end.
Graph.prototype.calcDistanceFrom = function (startNode) {
  // YOUR CODE HERE
}

// Write a function that returns the distance of given node from startNode.
// If there is no path between node and startNode (or if node is not in the graph)
// return false.
// Throw an exception if calcDistanceFrom() has not been called yet.
// The distance from the startNode to itself is 0.
Graph.prototype.getDistance = function(node) {
  // YOUR CODE HERE
}

// Write a function that returns the path between given node and the startNode.
// If there is no path between node and startNode (or if node is not in the graph)
// return false.
// Throw an exception if calcDistanceFrom() has not been called yet.
// The path should start with the startNode and not include this node.
// - The path from the startNode to itself is [].
// - The path from startNode to its neighbors is [startNode].
Graph.prototype.getPath = function(node) {
  // YOUR CODE HERE
}
