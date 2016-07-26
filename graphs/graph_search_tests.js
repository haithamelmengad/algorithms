"use strict";

describe("graph", function() {
  var graph;
  beforeEach(function() {
    graph = new Graph();
    graph.addVertex("A");
    graph.addVertex("B");
    graph.addVertex("C");
    graph.addVertex("D");
    graph.addVertex("E");
    graph.addEdge("A","B");
    graph.addEdge("B","C");
    graph.addEdge("B","D");
    graph.addEdge("B","E");
    graph.addEdge("A","E");
  });
  describe("an empty graph", function() {
    it("has no vertices", function() {
      var g = new Graph();
      expect(g.vertices().toEqual(jasmine.any(Array)));
      expect(g.vertices().length.toBe(0));
    });
    
  })
});
