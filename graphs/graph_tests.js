"use strict";

describe("Graph addEdge() and isConnected()", function() {
  it("Empty graph is not connected", function() {
    var g = new Graph();
    expect(g.isConnected('a', 'b')).toBe(false);
  });

  it("Adding an edge works in both directions", function() {
    var g = new Graph();
    g.addEdge('a', 'b');
    expect(g.isConnected('b', 'a')).toBe(true);
    expect(g.isConnected('a', 'b')).toBe(true);
    expect(g.isConnected('a', 'c')).toBe(false);
  });

  it("Adding an edge works in both directions", function() {
    var g = new Graph();
    g.addEdge('b', 'a');
    expect(g.isConnected('b', 'a')).toBe(true);
    expect(g.isConnected('a', 'b')).toBe(true);
    expect(g.isConnected('a', 'c')).toBe(false);
  });

  it("Adding an edge in two directions has no effect", function() {
    var g = new Graph();
    g.addEdge('a', 'b');
    g.addEdge('b', 'a');
    expect(g.isConnected('b', 'a')).toBe(true);
    expect(g.isConnected('a', 'b')).toBe(true);
  });

  it("isConnected() is only true for directly connected nodes", function() {
    var g = new Graph();
    g.addEdge('b', 'a');
    g.addEdge('b', 'c');
    expect(g.isConnected('b', 'a')).toBe(true);
    expect(g.isConnected('a', 'b')).toBe(true);
    expect(g.isConnected('b', 'c')).toBe(true);
    expect(g.isConnected('c', 'b')).toBe(true);
    expect(g.isConnected('a', 'c')).toBe(false);
    expect(g.isConnected('c', 'a')).toBe(false);
  });

  it("Adding unconnected subgraphs works", function() {
    var g = new Graph();
    g.addEdge('a', 'b');
    g.addEdge('y', 'x');

    expect(g.isConnected('b', 'a')).toBe(true);
    expect(g.isConnected('a', 'b')).toBe(true);
    expect(g.isConnected('x', 'y')).toBe(true);
    expect(g.isConnected('y', 'x')).toBe(true);

    expect(g.isConnected('a', 'x')).toBe(false);
    expect(g.isConnected('a', 'y')).toBe(false);
    expect(g.isConnected('b', 'x')).toBe(false);
    expect(g.isConnected('b', 'y')).toBe(false);
  });
});

describe("Graph.getNeighbors()", function() {
  it("Calling getNeighbors() on empty graph throws error", function() {
    var g = new Graph();
    expect(function() { g.getNeighbors('x') }).toThrow();
  });
  it("Calling getNeighbors() on a node not in the graph thorws error", function() {
    var g = new Graph();
    g.addEdge('a', 'b');
    expect(function() { g.getNeighbors('x') }).toThrow();
  });
  it("Calling neighbors on node with one neighbor", function() {
    var g = new Graph();
    g.addEdge('a', 'b');
    g.addEdge('a', 'b');
    g.addEdge('b', 'a');
    expect(g.getNeighbors('a')).toEqual(['b']);
    expect(g.getNeighbors('b')).toEqual(['a']);
  });
  it("Calling neighbors on node with multiple neighbors", function() {
    var g = new Graph();
    g.addEdge('a', 'b');
    g.addEdge('a', 'b');
    g.addEdge('c', 'a');
    g.addEdge('a', 'd');
    g.addEdge('e', 'a');
    g.addEdge('e', 'a');
    expect(g.getNeighbors('b')).toEqual(['a']);
    expect(g.getNeighbors('c')).toEqual(['a']);
    expect(g.getNeighbors('a')).toEqual(jasmine.arrayContaining(['c', 'b', 'd', 'e']));
  });

  it("Adding unconnected subgraphs works", function() {
    var g = new Graph();
    g.addEdge('a', 'b');
    g.addEdge('y', 'x');

    expect(g.getNeighbors('b')).toEqual(['a']);
    expect(g.getNeighbors('a')).toEqual(['b']);
    expect(g.getNeighbors('y')).toEqual(['x']);
    expect(g.getNeighbors('x')).toEqual(['y']);
  });
});

describe("Graph.calcDistanceFrom()", function() {
  it("Calling calcDistanceFrom() on empty graph should throw an exception", function() {
    var g = new Graph();
    expect(function() { g.calcDistanceFrom('x'); }).toThrow();
  });

  it("Calling calcDistanceFrom() on missing node throws error", function() {
    var g = new Graph();
    g.addEdge('a', 'b');
    expect(function() { g.calcDistanceFrom('x'); }).toThrow();
  });

  it("Calling calcDistanceFrom() on graph with 2 nodes works", function() {
    var g = new Graph();
    g.addEdge('a', 'b');
    expect(function() { g.calcDistanceFrom('a') }).not.toThrow();
  });

  it("Calling calcDistanceFrom() twice throws an error", function() {
    var g = new Graph();
    g.addEdge('a', 'b');
    g.calcDistanceFrom('a');
    expect(function() { g.calcDistanceFrom('a'); }).toThrow();
  });

  it("Calling addEdge() after calcDistanceFrom() throws an error", function() {
    var g = new Graph();
    g.addEdge('a', 'b');
    g.calcDistanceFrom('a');
    expect(function() { g.addEdge('a', 'b'); }).toThrow();
  });
});

describe("Graph.getDistance()", function() {
  it("Throws an error if calcDistanceFrom() has not been called", function() {
    var g = new Graph();
    g.addEdge('a', 'b');
    expect(function() { g.getDistance('a'); }).toThrow();
  });

  it("Returns 0 for startNode", function() {
    var g = new Graph();
    g.addEdge('a', 'b');
    g.calcDistanceFrom('a');
    expect(g.getDistance('a')).toBe(0);
  });

  it("Returns 1 for startNodes neighbors", function() {
    var g = new Graph();
    g.addEdge('a', 'b');
    g.addEdge('a', 'c');
    g.addEdge('a', 'd');
    g.addEdge('a', 'e');
    g.addEdge('a', 'f');
    g.calcDistanceFrom('a');
    g.getNeighbors('a').forEach(function(n) {
      expect(g.getDistance(n)).toBe(1);
    });
  });

  it("Returns false if node is not in graph", function() {
    var g = new Graph();
    g.addEdge('a', 'b');
    g.calcDistanceFrom('a');
    expect(g.getDistance('x')).toBe(false);
  });

  it("Returns false if node has no path to startNode", function() {
    var g = new Graph();
    g.addEdge('a', 'b');
    g.addEdge('x', 'y');
    g.calcDistanceFrom('a');
    expect(g.getDistance('x')).toBe(false);
  });

  it("Test with graph with some nodes", function() {
    var g = new Graph();
    g.addEdge('a', 'b');
    g.addEdge('b', 'c');
    g.addEdge('c', 'd');
    g.addEdge('d', 'e');
    g.addEdge('c', 'f');
    g.addEdge('f', 'g');
    g.addEdge('g', 'h');
    g.addEdge('b', 'h');
    g.calcDistanceFrom('c');
    expect(g.getDistance('a')).toBe(2);
    expect(g.getDistance('b')).toBe(1);
    expect(g.getDistance('c')).toBe(0);
    expect(g.getDistance('d')).toBe(1);
    expect(g.getDistance('e')).toBe(2);
    expect(g.getDistance('f')).toBe(1);
    expect(g.getDistance('g')).toBe(2);
    expect(g.getDistance('h')).toBe(2);
  });

  it("Line graph with 100 nodes in sequence works", function() {
    var g = new Graph();
    var last = null;
    _.range(100).forEach(function(i) {
      if (!_.isNull(last)) {
        g.addEdge("" + last, "" + i);
      }
      last = i;
    });
    g.calcDistanceFrom("0");
    _.range(100).forEach(function(i) {
      expect(g.getDistance("" + i)).toBe(i);
    });
  });

  it("Circular graph with 100 nodes works", function() {
    // If only this test is failing, you're using depth-first-search instead
    // of breadth-first-search
    var g = new Graph();
    var last = null;
    _.range(100).forEach(function(i) {
      if (!_.isNull(last)) {
        g.addEdge("" + last, "" + i);
      }
      last = i;
    });
    // complete the circle
    g.addEdge('0', '' + last);
    g.calcDistanceFrom("0");
    _.range(100).forEach(function(i) {
      expect(g.getDistance("" + i)).toBe(Math.min(i, 100 - i));
    });
  });
});

describe("Graph.getShortestPath()", function() {
  it("Throws an error if calcDistanceFrom() has not been called", function() {
    var g = new Graph();
    g.addEdge('a', 'b');
    expect(function() { g.getShortestPath('a'); }).toThrow();
  });

  it("Returns [] for startNode", function() {
    var g = new Graph();
    g.addEdge('a', 'b');
    g.calcDistanceFrom('a');
    expect(g.getShortestPath('a')).toEqual([]);
  });

  it("Returns [startNode] for startNodes neighbors", function() {
    var g = new Graph();
    g.addEdge('a', 'b');
    g.addEdge('a', 'c');
    g.addEdge('a', 'd');
    g.addEdge('a', 'e');
    g.addEdge('a', 'f');
    g.calcDistanceFrom('a');
    g.getNeighbors('a').forEach(function(n) {
      expect(g.getShortestPath(n)).toEqual(['a']);
    });
  });

  it("Returns false if node is not in graph", function() {
    var g = new Graph();
    g.addEdge('a', 'b');
    g.calcDistanceFrom('a');
    expect(g.getShortestPath('x')).toBe(false);
  });

  it("Returns false if node has no path to startNode", function() {
    var g = new Graph();
    g.addEdge('a', 'b');
    g.addEdge('x', 'y');
    g.calcDistanceFrom('a');
    expect(g.getShortestPath('x')).toBe(false);
  });

  it("Test with graph with some nodes", function() {
    var g = new Graph();
    g.addEdge('a', 'b');
    g.addEdge('b', 'c');
    g.addEdge('c', 'd');
    g.addEdge('d', 'e');
    g.addEdge('c', 'f');
    g.addEdge('f', 'g');
    g.addEdge('g', 'h');
    g.addEdge('b', 'h');
    g.calcDistanceFrom('c');
    expect(g.getShortestPath('a')).toEqual(['c', 'b']);
    expect(g.getShortestPath('b')).toEqual(['c']);
    expect(g.getShortestPath('c')).toEqual([]);
    expect(g.getShortestPath('d')).toEqual(['c']);
    expect(g.getShortestPath('e')).toEqual(['c', 'd']);
    expect(g.getShortestPath('f')).toEqual(['c']);
    expect(g.getShortestPath('g')).toEqual(['c', 'f']);
    expect(g.getShortestPath('h')).toEqual(['c', 'b']);
  });
});
